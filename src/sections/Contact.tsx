import { useId, useState, type FormEvent } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { CONTACT_EMAIL, CONTACT_ENDPOINT, whatsappLink } from '../config/links';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { fmt } from '../lib/format';

type Role = 'client' | 'barber' | 'academy' | 'shop' | 'other';
const ROLES: Role[] = ['client', 'barber', 'academy', 'shop', 'other'];
type Field = 'name' | 'email' | 'message';
type Status = 'idle' | 'sending' | 'mailto' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Formulario de contacto honesto:
 * - Con VITE_CONTACT_ENDPOINT: POST JSON y solo muestra exito si la respuesta es 2xx.
 * - Sin endpoint: abre un `mailto:` con el contenido y lo dice tal cual
 *   (no afirmamos que el mensaje se envio).
 */
export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const uid = useId();
  const [values, setValues] = useState({ name: '', email: '', role: 'client' as Role, message: '' });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const wa = whatsappLink(c.whatsappText);

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) e.name = c.errors.required;
    if (!values.email.trim()) e.email = c.errors.required;
    else if (!EMAIL_RE.test(values.email.trim())) e.email = c.errors.email;
    if (values.message.trim().length < 10) e.message = values.message.trim() ? c.errors.short : c.errors.required;
    return e;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = (Object.keys(e) as Field[])[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    const roleLabel = c.roles[values.role];
    const subject = fmt(c.mailSubject, { role: roleLabel });

    if (CONTACT_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, roleLabel, subject, source: 'web' }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus('success');
        setValues({ name: '', email: '', role: values.role, message: '' });
      } catch {
        setStatus('error');
      }
      return;
    }

    const body = `${c.name}: ${values.name}\n${c.email}: ${values.email}\n${c.role}: ${roleLabel}\n\n${values.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (k in errors) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const fieldProps = (f: Field) => ({
    id: `${uid}-${f}`,
    'aria-invalid': errors[f] ? true : undefined,
    'aria-describedby': errors[f] ? `${uid}-${f}-err` : undefined,
  });
  const err = (f: Field) =>
    errors[f] ? (
      <span id={`${uid}-${f}-err`} className="field__error">
        {errors[f]}
      </span>
    ) : null;

  return (
    <Section id={SECTION_IDS.contact} eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} className="contact">
      <div className="contact__layout">
        <form className="contact__form card" onSubmit={onSubmit} noValidate data-reveal>
          <div className="field-row">
            <div className="field">
              <label htmlFor={`${uid}-name`}>{c.name}</label>
              <input type="text" autoComplete="name" required value={values.name} onChange={set('name')} {...fieldProps('name')} />
              {err('name')}
            </div>
            <div className="field">
              <label htmlFor={`${uid}-email`}>{c.email}</label>
              <input type="email" autoComplete="email" inputMode="email" required value={values.email} onChange={set('email')} {...fieldProps('email')} />
              {err('email')}
            </div>
          </div>
          <div className="field">
            <label htmlFor={`${uid}-role`}>{c.role}</label>
            <select id={`${uid}-role`} value={values.role} onChange={set('role')}>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {c.roles[r]}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor={`${uid}-message`}>{c.message}</label>
            <textarea rows={5} required value={values.message} onChange={set('message')} {...fieldProps('message')} />
            {err('message')}
          </div>
          <Button type="submit" size="lg" icon="send" disabled={status === 'sending'}>
            {status === 'sending' ? c.sending : c.submit}
          </Button>
          <p className="form-status" role="status" aria-live="polite">
            {status === 'mailto' ? c.mailtoOpened : status === 'success' ? c.success : status === 'error' ? c.failure : ''}
          </p>
        </form>

        <aside className="contact__aside" data-reveal>
          <h3>{c.channelsTitle}</h3>
          <ul className="channels">
            <li>
              <a className="channel" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="icon-chip" aria-hidden="true">
                  <Icon name="mail" />
                </span>
                <span>
                  <strong>{c.emailUs}</strong>
                  <small>{CONTACT_EMAIL}</small>
                </span>
              </a>
            </li>
            <li>
              {wa ? (
                <a className="channel" href={wa} target="_blank" rel="noopener noreferrer">
                  <span className="icon-chip" aria-hidden="true">
                    <Icon name="whatsapp" />
                  </span>
                  <span>
                    <strong>{c.whatsapp}</strong>
                    <small>{c.whatsappText}</small>
                  </span>
                </a>
              ) : (
                <span className="channel channel--disabled" aria-disabled="true">
                  <span className="icon-chip" aria-hidden="true">
                    <Icon name="whatsapp" />
                  </span>
                  <span>
                    <strong>{c.whatsapp}</strong>
                    <small>{t.common.comingSoon}</small>
                  </span>
                </span>
              )}
            </li>
          </ul>
        </aside>
      </div>
    </Section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { Tabs } from '../components/Tabs';
import { Icon, type IconName } from '../components/Icon';
import { Card } from '../components/Card';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cx } from '../lib/format';

type Convo = 'barber' | 'client';
const FEATURE_ICONS: IconName[] = ['user', 'chat', 'sparkle'];

export function AIAssistant() {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const [convo, setConvo] = useState<Convo>('barber');
  const [run, setRun] = useState(0);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4, once: true });
  const body = useRef<HTMLDivElement>(null);
  const messages = t.ai.conversations[convo];

  // Secuencia: mensajes del usuario aparecen tras una pausa breve; los del
  // asistente van precedidos por el indicador de "escribiendo".
  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setShown(messages.length);
      setTyping(false);
      return;
    }
    setShown(0);
    setTyping(false);
    const timers: number[] = [];
    let at = 400;
    messages.forEach((m, i) => {
      if (m.from === 'ai') {
        timers.push(window.setTimeout(() => setTyping(true), at));
        at += 1300;
      } else {
        at += 700;
      }
      timers.push(
        window.setTimeout(() => {
          setTyping(false);
          setShown(i + 1);
        }, at),
      );
      at += 500;
    });
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [inView, reduced, convo, run, messages]);

  useEffect(() => {
    const el = body.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduced ? 'auto' : 'smooth' });
  }, [shown, typing, reduced]);

  return (
    <Section id={SECTION_IDS.ai} eyebrow={t.ai.eyebrow} title={t.ai.title} subtitle={t.ai.subtitle} className="ai">
      <div className="ai__layout">
        <div className="ai__demo" ref={ref} data-reveal>
          <div className="ai__window">
            <div className="ai__head">
              <span className="ai__bot" aria-hidden="true">
                <Icon name="bot" size={20} />
              </span>
              <span>
                <strong>{t.ai.assistantName}</strong>
                <small>
                  <span className="ms-live" aria-hidden="true" /> {t.nav.ai}
                </small>
              </span>
              <button type="button" className="icon-btn ai__replay" onClick={() => setRun((n) => n + 1)} aria-label={t.ai.replay} title={t.ai.replay}>
                <Icon name="replay" size={18} />
              </button>
            </div>
            <Tabs
              idPrefix="ai"
              label={t.ai.tabsLabel}
              items={[
                { id: 'barber', label: t.ai.tabs.barber },
                { id: 'client', label: t.ai.tabs.client },
              ]}
              value={convo}
              onChange={setConvo}
              className="ai__tabs"
            />
            <div id="ai-panel" role="tabpanel" aria-labelledby={`ai-tab-${convo}`} className="ai__body" ref={body}>
              <ol className="ai__msgs" aria-live="polite">
                {messages.slice(0, shown).map((m, i) => (
                  <li key={`${convo}-${run}-${i}`} className={cx('ai-msg', m.from === 'ai' ? 'ai-msg--ai' : 'ai-msg--user')}>
                    <span className="sr-only">{m.from === 'ai' ? t.ai.assistantName : t.ai.you}: </span>
                    {m.text}
                  </li>
                ))}
              </ol>
              {typing ? (
                <p className="ai-typing" role="status">
                  <span className="sr-only">{t.ai.typing}</span>
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                </p>
              ) : null}
            </div>
            <div className="ai__input" aria-hidden="true">
              <span>{t.ai.inputPlaceholder}</span>
              <Icon name="send" size={16} />
            </div>
          </div>
          <p className="note">{t.ai.disclaimer}</p>
        </div>

        <ul className="ai__features">
          {t.ai.features.map((f, i) => (
            <Card as="li" key={f.title} className="ai__feature">
              <span className="icon-chip" aria-hidden="true">
                <Icon name={FEATURE_ICONS[i] ?? 'sparkle'} />
              </span>
              <span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </span>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  );
}

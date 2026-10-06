import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { fmt } from '../lib/format';

const LESSONS = [18, 12, 24, 9];

export function Academy() {
  const { t } = useI18n();
  const a = t.academy;
  return (
    <Section id={SECTION_IDS.academy} eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} className="academy">
      <div className="academy__cats" data-reveal>
        <h3 className="sr-only">{a.categoriesLabel}</h3>
        <ul className="chips" aria-label={a.categoriesLabel}>
          {a.categories.map((c) => (
            <li key={c} className="chip">
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="academy__layout">
        <div>
          <h3 className="sr-only">{a.coursesLabel}</h3>
          <ul className="courses">
            {a.courses.map((c, i) => (
              <li key={c.title} className={`course card course--${i}`} data-reveal>
                <div className="course__cover" aria-hidden="true">
                  <Icon name={i === 0 ? 'scissors' : i === 1 ? 'beard' : i === 2 ? 'color' : 'graduation'} size={34} />
                  <span className="badge badge--example">{t.common.example}</span>
                </div>
                <div className="course__body">
                  <span className="course__level">{c.level}</span>
                  <h4 className="course__title">{c.title}</h4>
                  <p className="course__teacher">
                    <Avatar name={c.teacher} size={26} />
                    <span>
                      <small>{a.teacher}</small> {c.teacher}
                    </span>
                  </p>
                  <p className="course__meta">
                    <span>
                      <Icon name="clock" size={14} /> {c.duration}
                    </span>
                    <span>
                      <Icon name="play" size={14} /> {fmt(a.lessons, { n: LESSONS[i] ?? 10 })}
                    </span>
                    <span>
                      <Icon name="award" size={14} /> {a.certificate}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="note">{a.note}</p>
        </div>

        <aside className="academy__aside">
          <Card glow>
            <h3 className="academy__h">{a.benefitsTitle}</h3>
            <ul className="checklist">
              {a.benefits.map((b) => (
                <li key={b}>
                  <Icon name="check" size={18} />
                  {b}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="academy__cert">
            <span className="academy__seal" aria-hidden="true">
              <Icon name="award" size={30} />
            </span>
            <h3 className="academy__h">{a.certTitle}</h3>
            <p className="muted">{a.certText}</p>
          </Card>
          <div className="academy__ctas">
            <Button href={`#${SECTION_IDS.download}`} iconEnd="arrowRight">
              {a.cta}
            </Button>
            <Button href={`#${SECTION_IDS.contact}`} variant="secondary">
              {a.ctaTeach}
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}

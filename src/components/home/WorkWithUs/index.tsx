import { ArrowRight, CheckCircle2 } from 'lucide-react';

import styles from './style.module.css';

import { Button, Link } from '@/shared';

const CHECKLIST = [
  'Full visibility across departments',
  'AI execution tied to real business outcomes',
  'Less operational drag, more output',
  'A platform built around your company, not generic workflows'
];

export const WorkWithUs = () => {
  return (
    <section id="work-with-us" className={styles.wwu} aria-labelledby="wwu-heading">
      <div className={styles.wwuInner}>
        <div className={styles.wwuIntro}>
          <div className={styles.wwuPill}>
            <span>The Int3grate operating layer</span>
          </div>
          <p className={styles.wwuIntroParagraph}>
            {`Int3grate gives businesses a top-down view of how their organization runs, with the ability to deploy AI across departments through one unified control layer. It turns scattered workflows into a visible, scalable operating system — helping companies move faster, cut inefficiency, and build a lasting edge.`}
          </p>
        </div>

        <div className={styles.wwuCard}>
          <div className={styles.wwuCardLeft}>
            <span className={styles.wwuCardLabel}>WORK WITH US</span>
            <h2 id="wwu-heading" className={styles.wwuCardHeading}>
              Run your company on Int3grate
            </h2>
            <p className={styles.wwuCardBody}>
              {`Int3grate is built for operators who want more than disconnected automations. It gives companies one system to structure departments, coordinate AI agents, and manage execution across sales, operations, finance, support, and growth. We'll help you achieve more growth, at lower costs.`}
            </p>
            <Link href="#contact">
              <Button color="green" size="lg">
                Integrate with Int3grate
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className={styles.wwuCardRight}>
            <span className={styles.wwuCheckLabel}>WHAT YOU GET</span>
            <div className={styles.wwuCheckList}>
              {CHECKLIST.map((item) => (
                <div key={item} className={styles.wwuCheckRow}>
                  <CheckCircle2 size={18} className={styles.wwuCheckIcon} aria-hidden="true" />
                  <span className={styles.wwuCheckText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

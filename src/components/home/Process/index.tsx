'use client';

import { useRef } from 'react';
import { Check } from 'lucide-react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';

import styles from './style.module.css';

const STEPS = [
  {
    label: 'Audit',
    text: 'Audit your current workflows and identify high-friction tasks.'
  },
  {
    label: 'Design',
    text: 'Design agents, approval layers, and success metrics around your team.'
  },
  {
    label: 'Deploy',
    text: 'Deploy in phases with visibility into savings, usage, and performance.'
  }
];

/* ------------------------------------------------------------------ */
/*  Mobile / reduced-motion fallback — simple stacked list             */
/* ------------------------------------------------------------------ */
const ProcessFallback = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  return (
    <section id="process" className={styles.process} aria-labelledby="process-heading">
      <div className={styles.processInner}>
        <div ref={ref} className={styles.fallbackPanel}>
          <motion.div
            className={styles.processLeft}
            initial={animate ? { opacity: 0, y: 16 } : undefined}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}>
            <span className={styles.processLabel}>OUR PROCESS</span>
            <h2 id="process-heading" className={styles.processHeading}>
              From workflow audit to live deployment.
            </h2>
            <p className={styles.processBody}>
              {`We work with your team to identify what should be automated first, what needs oversight, and how success should be measured from day one.`}
            </p>
          </motion.div>

          <ol className={styles.fallbackSteps}>
            {STEPS.map((step, i) => (
              <motion.li
                key={i}
                className={styles.fallbackStep}
                initial={animate ? { opacity: 0, y: 16 } : undefined}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.14 }}>
                <div className={styles.fallbackBadgeWrap}>
                  <div className={styles.stepNumber} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.fallbackCheck} aria-hidden="true">
                    <Check size={10} strokeWidth={3} />
                  </div>
                </div>
                <div className={styles.fallbackStepBody}>
                  <span className={styles.stepCardLabel}>{step.label}</span>
                  <p className={styles.fallbackStepText}>{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Desktop sticky stepper                                             */
/* ------------------------------------------------------------------ */
const StepCard = ({
  step,
  index,
  style
}: {
  step: (typeof STEPS)[number];
  index: number;
  style: React.CSSProperties;
}) => (
  <div className={styles.stepCard} style={style}>
    <div className={styles.stepCardInner}>
      <div className={styles.stepNumber} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className={styles.stepCardContent}>
        <span className={styles.stepCardLabel}>{step.label}</span>
        <p className={styles.stepCardText}>{step.text}</p>
      </div>
    </div>
  </div>
);

const ProcessDesktop = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  /* Map scroll progress to active step: 0–0.33 → step 0, 0.33–0.66 → step 1, 0.66–1 → step 2 */
  const card0Opacity = useTransform(scrollYProgress, [0, 0.05, 0.28, 0.36], [0, 1, 1, 0]);
  const card0Y = useTransform(scrollYProgress, [0, 0.05, 0.28, 0.36], [16, 0, 0, -16]);
  const card0Scale = useTransform(scrollYProgress, [0, 0.05, 0.28, 0.36], [0.98, 1, 1, 0.98]);

  const card1Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.61, 0.69], [0, 1, 1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.28, 0.36, 0.61, 0.69], [16, 0, 0, -16]);
  const card1Scale = useTransform(scrollYProgress, [0.28, 0.36, 0.61, 0.69], [0.98, 1, 1, 0.98]);

  const card2Opacity = useTransform(scrollYProgress, [0.61, 0.69, 0.92, 1], [0, 1, 1, 1]);
  const card2Y = useTransform(scrollYProgress, [0.61, 0.69, 0.92, 1], [16, 0, 0, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.61, 0.69, 0.92, 1], [0.98, 1, 1, 1]);

  /* Progress bar fill */
  const progressWidth = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%']);

  /* Dot active states */
  const dot0Opacity = useTransform(scrollYProgress, [0, 0.05, 0.32], [0.3, 1, 1]);
  const dot1Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.65], [0.3, 1, 1]);
  const dot2Opacity = useTransform(scrollYProgress, [0.61, 0.69, 0.95], [0.3, 1, 1]);

  const dot0Scale = useTransform(scrollYProgress, [0, 0.05, 0.32], [0.8, 1.2, 1]);
  const dot1Scale = useTransform(scrollYProgress, [0.28, 0.36, 0.65], [0.8, 1.2, 1]);
  const dot2Scale = useTransform(scrollYProgress, [0.61, 0.69, 0.95], [0.8, 1.2, 1]);

  return (
    <section ref={sectionRef} id="process" className={styles.process} aria-labelledby="process-heading">
      <div className={styles.stickyWrap}>
        <div className={styles.stickyInner}>
          <div className={styles.processPanel}>
            <div className={styles.processLeft}>
              <span className={styles.processLabel}>OUR PROCESS</span>
              <h2 id="process-heading" className={styles.processHeading}>
                From workflow audit to live deployment.
              </h2>
              <p className={styles.processBody}>
                {`We work with your team to identify what should be automated first, what needs oversight, and how success should be measured from day one.`}
              </p>
            </div>

            <div className={styles.processRight}>
              {/* Progress indicator */}
              <div className={styles.progressBar} aria-hidden="true">
                <div className={styles.progressTrack}>
                  <motion.div className={styles.progressFill} style={{ width: progressWidth }} />
                </div>
                <div className={styles.progressDots}>
                  {[dot0Opacity, dot1Opacity, dot2Opacity].map((opacity, i) => (
                    <motion.div
                      key={i}
                      className={styles.progressDot}
                      style={{
                        opacity,
                        scale: [dot0Scale, dot1Scale, dot2Scale][i]
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Card stack — all rendered, positioned absolute, controlled by scroll */}
              <div className={styles.cardStack}>
                {/* Accessibility: screen-reader-only list of all steps */}
                <ol className={styles.srOnly}>
                  {STEPS.map((step, i) => (
                    <li key={i}>
                      Step {i + 1}: {step.label}. {step.text}
                    </li>
                  ))}
                </ol>

                <motion.div style={{ opacity: card0Opacity, y: card0Y, scale: card0Scale }} aria-hidden="true">
                  <StepCard step={STEPS[0]} index={0} style={{}} />
                </motion.div>
                <motion.div
                  className={styles.cardStackLayer}
                  style={{ opacity: card1Opacity, y: card1Y, scale: card1Scale }}
                  aria-hidden="true">
                  <StepCard step={STEPS[1]} index={1} style={{}} />
                </motion.div>
                <motion.div
                  className={styles.cardStackLayer}
                  style={{ opacity: card2Opacity, y: card2Y, scale: card2Scale }}
                  aria-hidden="true">
                  <StepCard step={STEPS[2]} index={2} style={{}} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Responsive wrapper                                                 */
/* ------------------------------------------------------------------ */
export const Process = () => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return <ProcessFallback />;

  return (
    <>
      {/* Desktop: sticky stepper */}
      <div className={styles.desktopOnly}>
        <ProcessDesktop />
      </div>
      {/* Mobile/tablet: simple list */}
      <div className={styles.mobileOnly}>
        <ProcessFallback />
      </div>
    </>
  );
};

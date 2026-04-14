import styles from './style.module.css';

const STEPS = [
  'Audit your current workflows and identify high-friction tasks.',
  'Design agents, approval layers, and success metrics around your team.',
  'Deploy in phases with visibility into savings, usage, and performance.'
];

export const Process = () => {
  return (
    <section id="process" className={styles.process} aria-labelledby="process-heading">
      <div className={styles.processInner}>
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
            <ol className={styles.processSteps}>
              {STEPS.map((step, i) => (
                <li key={i} className={styles.processStep}>
                  <div className={styles.processStepNumber} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className={styles.processStepText}>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

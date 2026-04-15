'use client';

import styles from './style.module.css';

const PARTICLES = [
  { x: '12%', y: '18%', size: 3, delay: 0, dur: 14 },
  { x: '28%', y: '72%', size: 2, delay: 2, dur: 18 },
  { x: '45%', y: '30%', size: 3, delay: 5, dur: 16 },
  { x: '62%', y: '65%', size: 2, delay: 1, dur: 20 },
  { x: '78%', y: '22%', size: 3, delay: 4, dur: 15 },
  { x: '85%', y: '55%', size: 2, delay: 7, dur: 17 },
  { x: '35%', y: '50%', size: 2, delay: 3, dur: 19 },
  { x: '55%', y: '82%', size: 3, delay: 6, dur: 13 }
];

const LINES = [
  { x1: '12%', y1: '18%', x2: '28%', y2: '72%' },
  { x1: '45%', y1: '30%', x2: '62%', y2: '65%' },
  { x1: '78%', y1: '22%', x2: '85%', y2: '55%' }
];

export const HeroBackground = () => {
  return (
    <div className={styles.heroBg} aria-hidden="true">
      {/* Ambient radial gradients */}
      <div className={styles.heroBgGradients} />

      {/* Dot grid overlay */}
      <div className={styles.heroBgGrid} />

      {/* Connection lines */}
      <svg className={styles.heroBgLines} viewBox="0 0 100 100" preserveAspectRatio="none">
        {LINES.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="currentColor"
            strokeWidth="0.08"
            opacity="0.12"
          />
        ))}
      </svg>

      {/* Floating particles / nodes */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={styles.heroBgParticle}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`
          }}
        />
      ))}

      {/* Scanning glow sweep */}
      <div className={styles.heroBgSweep} />
    </div>
  );
};

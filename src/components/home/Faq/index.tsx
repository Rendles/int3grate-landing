'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { HelpCircle, Minus, Plus } from 'lucide-react';
import { motion } from 'motion/react';

import styles from './style.module.css';

const FAQ_ITEMS = [
  {
    question: 'What is agentic AI and how is it different from regular automation?',
    answer:
      'Regular automation follows fixed rules — if X happens, do Y. Agentic AI goes further: agents can reason about tasks, make decisions across multiple steps, and adapt when conditions change. Instead of hard-coded scripts, you get workflows that understand context. Int3grate deploys agents that act on your behalf while staying inside boundaries your team defines.'
  },
  {
    question: 'How is agentic AI different from RPA (robotic process automation)?',
    answer:
      'RPA is brittle — it breaks when a UI changes or an edge case appears. Agentic AI handles variation, interprets unstructured inputs like emails or documents, and can escalate to a human when something is outside its scope. RPA automates clicks; agents automate decisions.'
  },
  {
    question: 'Is AI automation safe to use in finance, HR, or client-facing operations?',
    answer:
      'Yes — when it is designed with approval layers from day one. Int3grate builds human-in-the-loop checkpoints into every critical workflow. No financial action, client communication, or sensitive task runs without the right person signing off. Safety is not a constraint we add later; it is part of the architecture.'
  },
  {
    question: 'Will AI agents replace our employees?',
    answer:
      'No. Agents handle the repetitive, low-judgment work that slows teams down — inbox triage, data entry, follow-up sequencing, report generation. Your team handles what requires experience, relationships, and judgment. The outcome is more output per person, not fewer people.'
  },
  {
    question: 'How long does it take to go from audit to live deployment?',
    answer:
      'It depends on workflow complexity, but most initial deployments follow a phased approach: audit and scoping in week one, agent design and approval layer setup in weeks two and three, phased rollout with monitoring from week four onward. You see measurable results before the full system is live.'
  },
  {
    question: 'What does Int3grate actually integrate with — what tools and systems do you support?',
    answer:
      'We design workflows around the tools your team already uses — CRMs, email platforms, project management tools, financial systems, and document workflows. Integration scope is defined during the audit phase so the agents connect to your real stack, not a generic demo environment.'
  },
  {
    question: 'How do we measure ROI from AI workflow automation?',
    answer:
      'We track hours saved per workflow, error rates before and after, cycle time reduction, and approval volume versus exception rate. From day one we agree on what success looks like for your team — so performance is visible, not assumed. Agent cost tracking and margin impact are built into the platform.'
  }
];

export const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <motion.section
      id="faq"
      className={styles.section}
      aria-labelledby="faq-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}>
      <div className={styles.sectionInner}>
        <header className={styles.header}>
          <div className={styles.pill}>
            <HelpCircle size={14} aria-hidden="true" />
            <span>Common questions</span>
          </div>
          <h2 id="faq-heading" className={styles.heading}>
            Everything you need to know before automating.
          </h2>
          <p className={styles.subheading}>
            Answers to the questions we hear most from operators exploring AI workflows for the first time.
          </p>
        </header>

        <div className={styles.panel}>
          <div className={styles.list} role="list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const answerId = `faq-answer-${idx}`;
              const triggerId = `faq-trigger-${idx}`;

              return (
                <div key={idx} className={styles.item} role="listitem">
                  <button
                    id={triggerId}
                    className={styles.trigger}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}>
                    <span className={styles.question}>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={clsx(styles.answerWrap, isOpen && styles.answerWrapOpen)}>
                    <div className={styles.answerInner}>
                      <div className={styles.answer}>
                        <p className={styles.answerText}>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

import { remark } from 'remark';
import html from 'remark-html';

import styles from './style.module.css';

interface MarkdownViewerProps {
  markdown: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processedMarkdown = await remark().use(html).process(markdown);
  return processedMarkdown.toString();
}

export async function MarkdownViewer({ markdown }: MarkdownViewerProps) {
  const __html = await markdownToHtml(markdown);
  return <div className={styles.markdownViewer} dangerouslySetInnerHTML={{ __html }} />;
}

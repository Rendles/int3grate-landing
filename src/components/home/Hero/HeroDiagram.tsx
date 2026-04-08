import styles from './style.module.css';

/**
 * Hero diagram — three horizontal layers per spec §3.
 * Middle layer (Control plane) is visually emphasized.
 * No vendor logos — neutral text labels only.
 */
export const HeroDiagram = () => {
  return (
    <figure
      className={styles.diagram}
      role="img"
      aria-label="Three-layer architecture diagram: Experience layer on top, Control plane in the middle (highlighted), Runtime and tools at the bottom.">
      <div className={styles.diagramLayer}>
        <span className={styles.diagramLayerLabel}>Experience</span>
        <span className={styles.diagramLayerNote}>Surfaces users touch</span>
      </div>

      <div className={`${styles.diagramLayer} ${styles.diagramLayerEmphasized}`}>
        <span className={styles.diagramLayerLabel}>Control plane</span>
        <div className={styles.diagramLayerChips}>
          <span className={styles.diagramChip}>Agents</span>
          <span className={styles.diagramChip}>Policies</span>
          <span className={styles.diagramChip}>Approvals</span>
          <span className={styles.diagramChip}>Memory</span>
          <span className={styles.diagramChip}>Cost</span>
        </div>
      </div>

      <div className={styles.diagramLayer}>
        <span className={styles.diagramLayerLabel}>Runtime + tools</span>
        <span className={styles.diagramLayerNote}>Model providers, integrations, external systems</span>
      </div>
    </figure>
  );
};

import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Personal field notes on AI systems"
      description="Technical writing about shared knowledge, agent context, evidence, and human review."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Avinash Basavaraj / Field notes</span>
            <h1>Better context.<br /><em>Better decisions.</em></h1>
            <p>
              Practical thinking about how people and AI agents find knowledge,
              use evidence, and learn from correction.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryLink} to="/blog">
                Read the writing <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link className={styles.secondaryLink} to="/docs/intro">
                Explore the notes
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className={styles.diagram}>
            <span className={styles.diagramTitle}>A working model</span>
            <div className={styles.diagramTeam}>
              <span className={styles.diagramTeamLabel}>SHARED KNOWLEDGE</span>
              <span className={`${styles.diagramAgent} ${styles.agentOne}`}>Agent A</span>
              <span className={`${styles.diagramAgent} ${styles.agentTwo}`}>Agent B</span>
              <span className={styles.diagramEvidence}>Evidence</span>
            </div>
            <span className={styles.diagramFoot}>One knowledge space. Distinct scopes. Human review.</span>
          </div>
        </section>

        <section className={styles.featured}>
          <div>
            <span className={styles.eyebrow}>First essay</span>
            <h2>Shared knowledge is not agent context</h2>
            <p>
              A team may search broadly. An agent needs a narrower contract: a job,
              eligible sources, clear instructions, and a path for correction.
            </p>
          </div>
          <Link className={styles.featuredLink} to="/blog/shared-knowledge-agent-context">
            Read the essay <span aria-hidden="true">-&gt;</span>
          </Link>
        </section>

        <p className={styles.disclaimer}>
          Personal writing. Examples are fictional and do not describe an employer's systems or data.
        </p>
      </main>
    </Layout>
  );
}

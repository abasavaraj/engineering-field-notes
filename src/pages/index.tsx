import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Personal notes on integration engineering and AI systems"
      description="Technical writing about integration engineering, AI systems, and design patterns for reliable software."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Avinash Basavaraj / Field notes</span>
            <h1>Engineering the<br /><em>connections.</em></h1>
            <p>
              Notes on integration engineering, AI systems, and the design
              patterns that make complex software work together.
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
            <span className={styles.diagramTitle}>From the AI systems notebook</span>
            <div className={styles.diagramTeam}>
              <span className={styles.diagramTeamLabel}>SHARED KNOWLEDGE</span>
              <span className={`${styles.diagramAgent} ${styles.agentOne}`}>Agent A</span>
              <span className={`${styles.diagramAgent} ${styles.agentTwo}`}>Agent B</span>
              <span className={styles.diagramEvidence}>Evidence</span>
            </div>
            <span className={styles.diagramFoot}>One knowledge space. Distinct scopes. Human review.</span>
          </div>
        </section>

        <section aria-labelledby="topics-heading" className={styles.topics} id="topics">
          <span className={styles.eyebrow}>What lives here</span>
          <h2 id="topics-heading">Three threads, one practice.</h2>
          <div className={styles.topicGrid}>
            <article>
              <span>01 / AI systems</span>
              <h3>Context and evidence</h3>
              <p>How specialized agents find trustworthy knowledge and make their work inspectable.</p>
            </article>
            <article>
              <span>02 / Integration engineering</span>
              <h3>Systems in conversation</h3>
              <p>Contracts, identity, failure recovery, and the operational edges between services.</p>
            </article>
            <article>
              <span>03 / Design patterns</span>
              <h3>Reusable decisions</h3>
              <p>Tradeoffs and implementation patterns that hold up beyond a single project.</p>
            </article>
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

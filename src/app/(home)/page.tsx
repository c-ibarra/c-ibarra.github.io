import Link from 'next/link';

const bio = (
  <>
    Applied AI/ML work — an <strong>AI-based credit-scoring platform</strong> and a{' '}
    <strong>RAG/LLM compliance-automation assistant</strong> — built alongside a Master&apos;s in
    Data Science (UTEC Universidad Tecnológica / MIT Professional Education) and an MBA
    (Universidad ORT Uruguay). Backed by 20+ years as a Program and Release Manager across
    financial services and technology, now capitalizing that governance and delivery
    background into AI. Brings experience working within{' '}
    <strong>PCI DSS, SOC 2, and IAM frameworks</strong> across a fintech career that carries
    direct weight as AI systems move into regulated environments.
  </>
);

const quickFacts = [
  { label: 'Focus', value: 'Technology Program/Release Management and Governance, transitioning into Applied AI/ML' },
  { label: 'Main Stack', value: 'Python · FastAPI · Hexagonal Architecture · TDD' },
];

const stats = [
  { value: '20+ yrs', label: 'Technology program leadership' },
  {
    value: 'R² 0.998',
    label: 'MS thesis ML pipeline accuracy — 393K industrial time-series observations, AutoGluon ensemble',
  },
];

const skillGroups = [
  {
    title: 'Program & Governance',
    skills: [
      'IT Operations Coordination',
      'IT Governance & Vendor Management',
      'Project & Release Management (Agile/Scrum/Kanban)',
      'ITIL/ITOM',
      'Information Security (IAM, SSO, MFA, PCI DSS, SOC 2, ISMS)',
    ],
  },
  {
    title: 'ML & AI',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'LightGBM',
      'XGBoost',
      'CatBoost',
      'AutoGluon',
      'scikit-learn',
      'Optuna',
      'SHAP',
      'LangChain',
      'LangGraph',
      'RAG',
      'MCP',
      'Qdrant',
      'Weaviate',
      'Pinecone',
      'OpenTelemetry',
      'Arize Phoenix',
      'AWS SageMaker',
      'Azure ML',
      'MLflow',
      'DVC',
    ],
  },
  {
    title: 'Financial Systems & Architecture',
    skills: [
      'Financial Systems Architecture',
      'REST APIs',
      'Web Services',
      'Microservices',
      'Middleware/ETL',
      'Event-Driven Architecture',
      'ISO 8583',
      'SWIFT MT/MX',
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Linux',
      'Docker',
      'Kubernetes',
      'Windows Server',
      'SQL Server',
      'Oracle',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Snowflake',
      'Zabbix',
      'AppDynamics',
      'Elasticsearch',
      'Kafka',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['JIRA', 'MS Project', 'Azure DevOps', 'Rally', 'ServiceNow', 'Atlassian Suite', 'Miro', 'Power BI', 'Tableau'],
  },
];

const experience = [
  {
    role: 'Technical Program & Release Manager',
    company: 'Financial Services & Technology sector',
    period: '20+ yrs',
    bullets: [
      'Worked within PCI DSS, SOC 2, and IAM frameworks across a fintech career — a track record that carries direct weight as AI systems move into regulated environments.',
    ],
  },
  {
    role: 'Applied AI/ML — in progress',
    company: "MS Data Science (UTEC / MIT Professional Education) & MBA (Universidad ORT Uruguay)",
    period: 'Current',
    bullets: [
      'Delivered an AI-based credit-scoring platform.',
      'Built a RAG/LLM compliance-automation assistant.',
      'MS thesis: AutoGluon ensemble pipeline reaching R² 0.998 across 393K industrial time-series observations.',
    ],
  },
];

const ossProjects = [
  {
    domain: 'Context Engineering',
    title: 'ObsidianKnowledgeCurator',
    description:
      'Autonomous knowledge-lifecycle agent for Obsidian vaults — technical-density grading, offline graph indexing, zero token overhead.',
    tags: ['Python', 'Antigravity SDK', 'Gemini', 'Graphify'],
    impact: '13,000+ notes indexed',
    repoUrl: 'https://github.com/c-ibarra/ObsidianKnowledgeCurator',
    writeupUrl: '/docs/context-engineering',
  },
  {
    domain: 'Agentic Systems',
    title: 'RoleSherpa',
    description:
      'AI-native job-search copilot built as agent skills — isolated drafter/reviewer pass, anti-fabrication verification before any document reaches the user.',
    tags: ['Python', 'Hexagonal', 'TDD', 'Claude Agent SDK'],
    impact: '3 live portal connectors',
    repoUrl: 'https://github.com/c-ibarra/rolesherpa-portfolio',
    writeupUrl: '/docs/agentic-systems',
  },
  {
    domain: 'LLM Infrastructure',
    title: 'AIProviderRouter',
    description:
      'Hexagonal FastAPI router between LLM providers (Claude Agent SDK vs. Antigravity CLI) behind one OpenAI-compatible endpoint. An ADR for every non-obvious decision.',
    tags: ['Python', 'FastAPI', 'Hexagonal', 'ADRs'],
    impact: '35 tests passing',
    repoUrl: 'https://github.com/c-ibarra/AIProviderRouter',
    writeupUrl: '/docs/llm-infrastructure',
  },
];

const privateProjects = [
  {
    domain: 'Applied AI — Financial Services',
    title: 'AI-Based Credit-Scoring Platform',
    description: 'Credit-scoring platform built on applied ML, delivered in a regulated financial-services context.',
    tags: ['Machine Learning', 'Credit Risk'],
  },
  {
    domain: 'Applied AI — Governance',
    title: 'RAG/LLM Compliance-Automation Assistant',
    description: 'Retrieval-augmented assistant automating compliance workflows, grounded in the same governance discipline as the rest of this profile.',
    tags: ['RAG', 'LLM', 'Compliance'],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-fd-primary/15 blur-[120px]"
        />
        <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center gap-4 px-4 py-16 text-center md:px-8 md:py-24">
          <span className="rounded-full border border-fd-primary/30 px-3 py-1 text-xs font-medium tracking-wide text-fd-primary uppercase">
            AI Engineer · 20 Years in Technical Program Leadership
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">Carlos Ibarra</h1>
          <p className="max-w-2xl text-fd-muted-foreground">{bio}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8">
        {/* Stats */}
        <section aria-label="Key figures" className="pb-16">
          <div
            className="grid rounded-lg border border-fd-border"
            style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className={`p-6 ${i > 0 ? 'border-fd-border md:border-l' : ''}`}>
                <div className="font-mono text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-fd-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-fd-border py-14">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">01 · About</h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <p className="flex-[2] text-fd-muted-foreground">{bio}</p>
            <div className="flex-1 space-y-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-lg border border-fd-border bg-fd-card p-4">
                  <div className="text-xs text-fd-muted-foreground">{fact.label}</div>
                  <div className="mt-1 text-sm font-medium">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 border-t border-fd-border py-14">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">02 · Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-3 text-sm font-semibold">{group.title}</div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-fd-border px-2.5 py-1 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 border-t border-fd-border py-14">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">03 · Experience</h2>
          {experience.map((role, i) => (
            <div
              key={role.role}
              className={`flex flex-col gap-4 py-6 md:flex-row ${i > 0 ? 'border-t border-fd-border' : ''}`}
            >
              <div className="flex-1">
                <div className="font-semibold">{role.role}</div>
                <div className="mt-1 text-sm text-fd-muted-foreground">
                  {role.company} · {role.period}
                </div>
              </div>
              <ul className="flex-[2] space-y-1.5 text-sm text-fd-muted-foreground">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4 relative">
                    <span className="absolute left-0">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 border-t border-fd-border py-14">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">04 · Projects</h2>
          <p className="mb-8 max-w-2xl text-sm text-fd-muted-foreground">
            Three projects, one system: Context Engineering decides what the model sees, Agentic
            Systems decides how much autonomy it gets, LLM Infrastructure decides where it runs —
            held together by the same{' '}
            <Link href="/docs/engineering-discipline" className="underline">
              Engineering Discipline
            </Link>{' '}
            across all three.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ossProjects.map((project) => (
              <div key={project.title} className="rounded-lg border border-fd-border p-5">
                <div className="text-xs font-medium tracking-wide text-fd-muted-foreground uppercase">{project.domain}</div>
                <div className="mt-2 font-semibold">{project.title}</div>
                <p className="mt-2 text-sm text-fd-muted-foreground">{project.description}</p>
                <div className="mt-3 font-mono text-sm font-semibold text-fd-primary">{project.impact}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-fd-border px-2 py-0.5 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="underline">
                    Repo
                  </a>
                  <span className="text-fd-muted-foreground">·</span>
                  <Link href={project.writeupUrl} className="underline">
                    Write-up
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-12 mb-1 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">
            Additional Experience — Private / Employer Work
          </h3>
          <p className="mb-6 text-sm text-fd-muted-foreground">
            No public repo — described here, not independently verifiable like the projects above.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {privateProjects.map((project) => (
              <div key={project.title} className="rounded-lg border border-dashed border-fd-border p-5">
                <div className="text-xs font-medium tracking-wide text-fd-muted-foreground uppercase">{project.domain}</div>
                <div className="mt-2 font-semibold">{project.title}</div>
                <p className="mt-2 text-sm text-fd-muted-foreground">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-fd-border px-2 py-0.5 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-fd-muted-foreground">
            Also completing coursework in LLM engineering and AutoML —{' '}
            <Link href="/docs/learning-log" className="underline">
              see Learning Log
            </Link>
            .
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-fd-border py-16">
          <h2 className="mb-6 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">05 · Contact</h2>
          <h3 className="text-2xl font-bold">Let&apos;s talk</h3>
          <p className="mt-2 text-fd-muted-foreground">The fastest way to reach me is LinkedIn.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/c-ibarra"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/carlosibarra"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="border-t border-fd-border py-8 text-sm text-fd-muted-foreground">
          © {new Date().getFullYear()} Carlos Ibarra.
        </footer>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { gitConfig, linkedinUrl } from '@/lib/shared';
import { RoleSherpaFlow } from './rolesherpa-flow';

const githubProfileUrl = `https://github.com/${gitConfig.user}`;

const stats = [
  {
    value: '6–11 hours → 20 minutes',
    label: "to assess a company's credit risk, with an AI scoring system",
  },
  { value: '60% less', label: 'preparation time for ISO 9001 audits, with an AI assistant' },
  { value: '240 questions', label: "used to test an AI assistant's search, and pick the best method" },
];

const privateWorkNote = 'Happy to walk through the details in a conversation.';

const featuredProjects = [
  {
    title: 'Credit risk, scored in minutes',
    description:
      "I designed an AI credit-scoring system for a fintech company that advances cash to businesses. An AI model reads each company's balance sheet from PDF filings, and a risk model scores it using that data plus credit-bureau records. Assessment time fell from 6–11 hours to about 20 minutes, and risk prediction improved by 25%.",
    note: privateWorkNote,
    private: true,
  },
  {
    title: 'An AI assistant for ISO 9001 audits',
    description:
      'I built an AI assistant that checks how ready a company is for an ISO 9001 audit and finds where it falls short of the standard. Every answer is tied to a cited source, so the team can verify it. It cut assessment preparation time by 60% and turned preliminary evidence reviews from days into minutes.',
    note: privateWorkNote,
    private: true,
    tags: ['RAG', 'Hybrid search', 'Cited sources'],
  },
  {
    title: 'AI that must not act unchecked: RoleSherpa',
    description:
      "A job-search assistant where one AI drafts, a second AI reviews without seeing the first one's reasoning, and plain code verifies every claim before anything reaches the user.",
    note: 'The same safeguards a regulated team would ask for: independent review, verified claims, and a record of every decision.',
    showFlow: true,
    repoUrl: 'https://github.com/c-ibarra/rolesherpa-portfolio',
    writeupUrl: '/docs/agentic-systems',
  },
  {
    title: 'Support requests, sorted right the first time',
    description:
      'I led the delivery of an AI system that sorts incoming service requests by their nature and sends each one to the right team. It replaced older rule-based classifiers with a language-model system. To test it, I built synthetic test data and a second AI that judges answers on hard edge cases. The correct category is now the first choice 97% of the time, up from 35%. Resolution time fell from 24 hours to under 2 hours, and compliance with routing deadlines improved by 17%. It runs with automatic regression tests and response-time tracking.',
    note: privateWorkNote,
    private: true,
    tags: ['NLP', 'MLOps', 'Automated testing'],
  },
  {
    title: 'Support calls, in any language, in real time',
    description:
      "I led the adaptation of a two-way, real-time voice translation system to specialized vocabulary, and built an end-to-end proof of concept connected to the company's call-center and CRM tools. Translated audio comes back in under a second. Global support availability rose by 30%, and agents could be assigned by skill instead of by language or location.",
    note: privateWorkNote,
    private: true,
    tags: ['Speech AI', 'LLMs', 'Cloud integration'],
  },
];

const openProjects = [
  {
    title: 'MLOps Docs Agent',
    description: 'An assistant that answers from real documentation and shows its sources. Tested on 240 questions.',
    writeupUrl: '/docs/llm-infrastructure/articles/mlops-docs-agent',
  },
  {
    title: 'graphify-daemon',
    description: 'Many AI agents sharing one memory.',
    writeupUrl: '/docs/context-engineering/articles/graphify-daemon',
  },
  {
    title: 'AIProviderRouter',
    description: 'One interface for two AI providers, with every trade-off recorded.',
    writeupUrl: '/docs/llm-infrastructure',
  },
  {
    title: 'ObsidianKnowledgeCurator',
    description: 'Knowledge lifecycle automation for a vault of 13,000+ notes.',
    writeupUrl: '/docs/context-engineering',
  },
];

const approach = [
  {
    title: 'Start from the decision, not the model.',
    text: "What is the system allowed to do, and who answers when it's wrong?",
  },
  {
    title: 'Measure before adding complexity.',
    text: 'In my MLOps Docs Agent, a feature meant to improve search made results worse. I measured it, saw that, and left it off.',
  },
  {
    title: 'Keep a record.',
    text: 'Every important trade-off is written down, so the team can see why things are built the way they are.',
  },
];

const background = [
  {
    label: 'Digital banking channels',
    text: 'Led electronic banking channels, including home banking on web and mobile apps, for a global bank. A team of 20, on time and within scope.',
  },
  {
    label: 'E-wallets',
    text: 'Project manager and technical consultant on e-wallets built on checking and savings accounts and linked to credit cards, for banks.',
  },
  {
    label: 'Transaction engines',
    text: 'Architected a processing engine handling millions of daily transactions for major banks.',
  },
  {
    label: 'Card payments',
    text: 'Release governance on a global payments platform with a 99.9% availability commitment, including card processing and acquiring.',
  },
  {
    label: 'Security and compliance',
    text: 'Led PCI DSS and SOC 2 Type 2 certifications, and built identity and access systems for banks.',
  },
  {
    label: 'Education',
    text: "Master's in Data Science (in progress), UTEC / MIT Professional Education. MBA, Universidad ORT Uruguay.",
  },
];

function SectionHead({ number, children }: { number: string; children: string }) {
  return (
    <div className="mb-2 flex items-baseline gap-4 border-b-2 border-fd-foreground pb-2">
      <span className="font-mono text-xs text-fd-muted-foreground">{number}</span>
      <h2 className="home-serif text-2xl font-bold">{children}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home-accent flex flex-col flex-1">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        {/* Hero */}
        <section className="pt-14 pb-10 md:pt-24">
          <h1 className="home-serif text-4xl font-bold leading-[1.1] md:text-6xl">
            AI you can put in front of an auditor.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-fd-muted-foreground">
            I&apos;m Carlos, an AI engineer who builds with the people who run the business. After 20+
            years delivering financial technology, I know what regulated teams need from AI: answers
            that are correct, actions that are controlled, and decisions that can be checked.
          </p>
          <p className="mt-4 border-l-2 border-fd-primary pl-4 text-sm font-medium">
            Open to Forward Deployed AI Engineer and Applied AI roles in financial services.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#evidence"
              className="rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
            >
              See the evidence
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium"
            >
              Message me on LinkedIn ↗
            </a>
          </div>
        </section>

        {/* Results */}
        <section aria-label="Key results" className="pb-14">
          <dl className="border-t-2 border-fd-foreground">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="grid gap-1 border-b border-fd-border py-4 sm:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] sm:items-baseline sm:gap-6"
              >
                <dt className="home-serif text-3xl font-bold text-fd-primary">{stat.value}</dt>
                <dd className="text-sm text-fd-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Evidence */}
        <section id="evidence" className="scroll-mt-20 pb-14">
          <SectionHead number="01">Evidence — problems I&apos;ve solved</SectionHead>
          {featuredProjects.map((project, i) => (
            <article
              key={project.title}
              className="grid gap-3 border-b border-fd-border py-7 md:grid-cols-[9rem_1fr] md:gap-8"
            >
              <div className="flex flex-row items-baseline gap-3 md:flex-col md:gap-2">
                <span className="font-mono text-xs text-fd-muted-foreground">
                  Case {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-fd-primary uppercase">
                  {project.private ? 'Private work' : 'Public repository'}
                </span>
              </div>
              <div>
                <h3 className="home-serif text-xl font-bold">{project.title}</h3>
                <p className="mt-2 leading-relaxed text-fd-muted-foreground">{project.description}</p>
                <p className="mt-3 text-sm italic">{project.note}</p>
                {project.tags && (
                  <p className="mt-3 font-mono text-xs text-fd-muted-foreground">{project.tags.join(' · ')}</p>
                )}
                {project.showFlow && <RoleSherpaFlow />}
                {project.repoUrl && project.writeupUrl && (
                  <div className="mt-4 flex gap-3 text-sm font-medium">
                    <Link href={project.writeupUrl} className="text-fd-primary underline">
                      Read the case
                    </Link>
                    <span className="text-fd-muted-foreground">·</span>
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-fd-primary underline">
                      Repository
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}

          <h3 className="mt-10 mb-1 text-xs font-semibold tracking-widest text-fd-muted-foreground uppercase">
            Open projects you can inspect
          </h3>
          {openProjects.map((project) => (
            <div
              key={project.title}
              className="grid gap-1 border-b border-fd-border py-3 md:grid-cols-[15rem_1fr_auto] md:items-baseline md:gap-8"
            >
              <div className="font-semibold">{project.title}</div>
              <p className="text-sm text-fd-muted-foreground">{project.description}</p>
              <Link href={project.writeupUrl} className="text-sm font-medium text-fd-primary underline">
                Read the case
              </Link>
            </div>
          ))}

          <p className="mt-6 text-sm text-fd-muted-foreground">
            <span className="font-semibold text-fd-foreground">Master&apos;s thesis:</span> a
            machine-learning pipeline on 393,000 readings from a petrochemical plant, with average
            error under 0.25% on test data the model had not seen.
          </p>
        </section>

        {/* Approach */}
        <section id="approach" className="scroll-mt-20 pb-14">
          <SectionHead number="02">Approach — how I work</SectionHead>
          <ol>
            {approach.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-2 border-b border-fd-border py-5">
                <span className="home-serif text-4xl leading-none font-bold text-fd-primary">{i + 1}</span>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm text-fd-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Background */}
        <section id="background" className="scroll-mt-20 pb-14">
          <SectionHead number="03">Background — where I come from</SectionHead>
          <p className="py-4 text-fd-muted-foreground">
            20+ years building and delivering financial technology, from developer and architect to
            program lead.
          </p>
          <dl className="border-t border-fd-border">
            {background.map((item) => (
              <div key={item.label} className="grid gap-1 border-b border-fd-border py-3 md:grid-cols-[11rem_1fr] md:gap-6">
                <dt className="text-sm font-semibold">{item.label}</dt>
                <dd className="text-sm text-fd-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Closing */}
        <section id="contact" className="scroll-mt-20 border-t-2 border-fd-foreground py-12">
          <h2 className="home-serif text-3xl font-bold">Let&apos;s talk about a role.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
            >
              Message me on LinkedIn ↗
            </a>
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium"
            >
              See my code ↗
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

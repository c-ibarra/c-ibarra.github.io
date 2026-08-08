import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 gap-4 px-4">
      <h1 className="text-3xl font-bold">Carlos Ibarra</h1>
      <p className="text-fd-muted-foreground">Data Science & AI Engineer</p>
      <Link href="/docs" className="font-medium underline">
        View the case studies
      </Link>
      <div className="flex gap-4 text-sm text-fd-muted-foreground">
        <a
          href="https://github.com/c-ibarra"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/carlosibarra"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

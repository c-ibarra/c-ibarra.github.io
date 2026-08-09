'use client';

import { use, useId, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

function subscribeNoop() {
  return () => {};
}

function useMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

export function Mermaid({ chart }: { chart: string }) {
  const mounted = useMounted();

  if (!mounted) return null;
  return <MermaidContent chart={chart} />;
}

const cache = new Map<string, Promise<unknown>>();

function cachePromise<T>(key: string, setPromise: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  if (cached) return cached as Promise<T>;

  const promise = setPromise();
  cache.set(key, promise);
  return promise;
}

function MermaidContent({ chart }: { chart: string }) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const { default: mermaid } = use(cachePromise('mermaid', () => import('mermaid')));

  const isDark = resolvedTheme === 'dark';

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    fontFamily: 'inherit',
    // Mermaid's built-in dark theme edge labels (#ccc on #585858) fail WCAG AA
    // contrast (4.43:1, needs 4.5:1) — override with a higher-contrast pair.
    // Each selector needs its own rule block (no comma lists: Mermaid's themeCSS
    // scoping drops rules with multiple selectors) and !important (Mermaid emits
    // its own ID-scoped `#<svgId> span { color: #ccc }`, which outranks a plain
    // class selector on specificity).
    themeCSS: isDark
      ? 'margin: 1.5rem auto 0; .edgeLabel p { color: #f1f5f9 !important; } .edgeLabel { color: #f1f5f9 !important; background-color: #1e293b !important; } .labelBkg { background-color: #1e293b !important; }'
      : 'margin: 1.5rem auto 0;',
    theme: isDark ? 'dark' : 'default',
  });

  const { svg, bindFunctions } = use(
    cachePromise(`${chart}-${resolvedTheme}`, () => {
      return mermaid.render(id, chart);
    }),
  );

  return (
    <div
      ref={(container) => {
        if (container) bindFunctions?.(container);
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

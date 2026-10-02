import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig, linkedinUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: 'Evidence', url: '/#evidence' },
      { text: 'Approach', url: '/#approach' },
      { text: 'Background', url: '/#background' },
      { text: 'LinkedIn', url: linkedinUrl, external: true },
    ],
  };
}

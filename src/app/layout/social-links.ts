import { siGithub } from 'simple-icons';

export type SocialLink = { key: 'email' | 'linkedin' | 'github'; url: string; path: string };

// Shared by header (desktop) and footer (mobile)
export const socialLinks: readonly SocialLink[] = [
  {
    key: 'email',
    url: 'mailto:matthias.tausch@matthias-tausch.com',
    path: 'M3 5h18v1.5l-9 6-9-6V5Zm0 4 9 6 9-6v10H3V9Z',
  },
  {
    key: 'linkedin',
    url: 'https://www.linkedin.com/in/matthias-tausch-641234364/',
    path: 'M4 9h4v12H4V9Zm2-6a2.3 2.3 0 1 1 0 4.6A2.3 2.3 0 0 1 6 3Zm4.5 6h3.8v1.7c.6-1 2-2 3.9-2 3.4 0 3.8 2.2 3.8 5.1V21h-4v-6.4c0-1.5 0-3-1.8-3s-1.7 1.4-1.7 2.9V21h-4V9Z',
  },
  { key: 'github', url: 'https://github.com/BlissCrimson', path: siGithub.path },
];

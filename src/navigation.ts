import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Portfolio',
      href: '/#portfolio',
    },
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Contact',
      href: '/#contact',
    },
  ],
  actions: [
    {
      text: 'Resume',
      href: '/assets/resume-sam-lynskey.pdf',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © Copyright ${new Date().getFullYear()} - Sam Lynskey
  `,
};

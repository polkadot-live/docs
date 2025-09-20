import { defineConfig } from 'vocs';

export default defineConfig({
  description: 'Decentralised Polkadot notifications and chain interactions.',
  iconUrl: '/icon.ico',
  title: 'Polkadot Live',
  sidebar: [
    {
      text: 'Overview',
      link: '/overview',
    },
    {
      text: 'Installation',
      link: '/installation',
    },
    {
      text: 'Gallery',
      link: '/gallery',
    },
    {
      text: 'Concepts',
      collapsed: undefined,
      items: [
        { text: 'Accounts', link: '/overview/accounts' },
        { text: 'Notifications', link: '/overview/notifications' },
        { text: 'Transactions', link: '/overview/transactions' },
      ],
    },
    {
      text: 'Reference',
      collapsed: undefined,
      items: [
        { text: 'Extrinsics', link: '/reference/extrinsics' },
        { text: 'Settings', link: '/reference/settings' },
        { text: 'Subscriptions', link: '/reference/subscriptions' },
      ],
    },
    {
      text: 'Report Issue',
      link: '/issues',
    },
    {
      text: 'Links',
      collapsed: undefined,
      items: [
        {
          text: 'View on GitHub',
          link: 'https://github.com/polkadot-live/polkadot-live-app',
        },
      ],
    },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/polkadot-live',
    },
  ],
  topNav: [
    {
      text: 'Guide',
      link: '/overview',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/polkadot-live/polkadot-live-app',
    },
    {
      text: 'Latest Release',
      link: 'https://github.com/polkadot-live/polkadot-live-app/releases/latest',
    },
  ],
  theme: {
    variables: {
      color: {
        noteBackground: {
          light: '#cdcdcd',
          dark: '#2b292d',
        },
      },
    },
  },
});

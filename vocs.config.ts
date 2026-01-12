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
      items: [
        { text: 'Accounts', link: '/overview/accounts' },
        { text: 'Notifications', link: '/overview/notifications' },
        { text: 'Transactions', link: '/overview/transactions' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Extrinsics', link: '/reference/extrinsics' },
        { text: 'Settings', link: '/reference/settings' },
        {
          text: 'Subscriptions',
          items: [
            { text: 'Overview', link: '/reference/subscriptions' },
            { text: 'Automatic', link: '/reference/subscriptions/automatic' },
            { text: 'Chain Events', link: '/reference/subscriptions/chain' },
            { text: 'Interval', link: '/reference/subscriptions/interval' },
          ],
        },
      ],
    },
    {
      text: 'Report Issue',
      link: '/issues',
    },
    {
      text: 'Links',
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

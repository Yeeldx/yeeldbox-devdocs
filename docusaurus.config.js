/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'Yeeldx',
  tagline: 'DeFi made simple',
  url: 'https://docs.yeeldx.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yeeldx', // Usually your GitHub org/user name.
  projectName: 'yeeldbox-devdocs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY || 'UNKNOWN',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'UNKNOWN',
      appId: process.env.ALGOLIA_APP_ID || 'UNKNOWN',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/YFILogoGradient.jpg',
    metadata: [
      {
        name: 'twitter:card',
        content:
          'Yeeldx Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain.',
      },
      {
        name: 'git-url',
        content: 'https://github.com/Yeeldx/yeeldbox-devdocs'
      }
    ],
    navbar: {
      hideOnScroll: true,
      title: 'Yeeldx Finance',
      logo: {
        alt: 'YFI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'getting-started/intro',
          label: 'Getting Started',
        },
        {
          to: 'developers/v2/getting-started',
          label: 'Develop',
        },
        {
          to: '/vaults/smart-contracts/BaseStrategy',
          label: 'Smart Contracts',
        },
        {
          to: 'partners/introduction',
          label: 'Partner',
        },
        {
          to: 'contributing/contribute',
          label: 'Contribute',
        },
        {
          to: 'resources/faq',
          label: 'Resources',
        },
        {
          to: 'security/',
          label: 'Security',
        },
        {
          type: 'docsVersionDropdown',
          dropdownItemsBefore: [],
          position: 'right',
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Developers',
          items: [
            {
              label: 'Open Issues',
              href: 'https://contribute.yeeldx.rocks/',
            },
            {
              label: '#strategies - Discord',
              href: 'https://discord.gg/b8ENPNqG5c',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'yeeldx-vaults',
              href: 'https://github.com/yeeldx/yeeldx-vaults',
            },
            {
              label: 'brownie-strategy-mix',
              href: 'https://github.com/yeeldx/brownie-strategy-mix',
            },
            {
              label: 'brownie-wrapper-mix',
              href: 'https://github.com/yeeldx/brownie-wrapper-mix',
            },
            {
              label: 'yeeldx-watch',
              href: 'https://github.com/yeeldx/yeeldx-watch',
            },
            {
              label: 'yeeldx-finance-v3',
              href: 'https://github.com/yeeldx/yeeldx-finance-v3',
            },
            {
              label: 'yeeldx-security',
              href: 'https://github.com/yeeldx/yeeldx-security',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Vaults',
              href: 'https://yeeldx.finance/vaults',
            },
            {
              label: 'YFI Stats',
              href: 'https://www.yfistats.com/',
            },
            {
              label: 'Bowswap',
              href: 'https://bowswap.finance/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/b8ENPNqG5c',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/iearnfinance',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/yeeldxfinance/',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/iearn',
            },
            {
              label: 'Forum',
              href: 'https://gov.yeeldx.finance',
            },
            {
              label: 'Snapshot voting',
              href: 'https://snapshot.org/#/ybaby.eth',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'vaults',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          routeBasePath: 'vaults',
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          editUrl:
            'https://github.com/yeeldx/yeeldx-devdocs/edit/master/website/',
          includeCurrentVersion: false,
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developers',
        path: 'docs/developers',
        routeBasePath: 'developers',
        sidebarPath: require.resolve('./sidebars/sidebarsDevelopers.js'),
        showLastUpdateTime: true,
        sidebarCollapsed: false,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'getting-started',
        path: 'docs/getting-started',
        routeBasePath: 'getting-started',
        sidebarPath: require.resolve('./sidebars/sidebarsGettingStarted.js'),
        showLastUpdateTime: true,
        sidebarCollapsed: false,
        breadcrumbs: false,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'partners',
        path: 'docs/partners',
        routeBasePath: 'partners',
        sidebarPath: require.resolve('./sidebars/sidebarsPartners.js'),
        showLastUpdateTime: true,
        sidebarCollapsed: false,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contributing',
        path: 'docs/contributing',
        routeBasePath: 'contributing',
        sidebarPath: require.resolve('./sidebars/sidebarsContributing.js'),
        showLastUpdateTime: true,
        sidebarCollapsed: false,
        breadcrumbs: false,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'docs/resources',
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebars/sidebarsResources.js'),
        showLastUpdateTime: true,
        sidebarCollapsed: false,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'security',
        path: 'docs/security',
        routeBasePath: 'security',
        sidebarPath: require.resolve('./sidebars/sidebarsSecurity.js'),
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
  ],
}

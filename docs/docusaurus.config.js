module.exports = {
  title: 'vue-fast-admin',
  tagline: '基于 Vue 和 Element-ui，面向后端工程师的快速开发组件库',
  url: 'https://vuefastadmin.luzhenqian.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'luzhenqian', // Usually your GitHub org/user name.
  projectName: 'vue-fast-admin', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'vue-fast-admin',
      logo: {
        alt: 'vue-fast-admin Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        { to: 'blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/15753140326@163.com/vue-fast-admin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        // {
        //   title: '社区',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/15753140326@163.com/vue-fast-admin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} vue fast admin, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

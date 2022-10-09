/**
 * @type {import('@docusaurus/types').Config}
 */
module.exports = {
  title: "My Site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  /* Github Config */
  organizationName: "luobofe",
  projectName: "luobofe",

  presets: [
    [
      "classic",
      /**
       * @type {import('@docusaurus/preset-classic').Options}
       */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  /**
   * @type {import('@docusaurus/preset-classic').ThemeConfig}
   */
  themeConfig: {
    navbar: {
      title: "萝卜",
      items: [
        {
          type: "doc",
          docId: "greeting",
          position: "left",
          label: "测试",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
};

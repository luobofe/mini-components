/**
 * @type {import('@docusaurus/types').Config}
 */
module.exports = {
  title: "MC",
  url: "https://luobofe.github.io",
  baseUrl: "/mini-components/",

  /* Github Config */
  organizationName: "luobofe",
  projectName: "mini-components",
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /**
       * @type {import('@docusaurus/preset-classic').Options}
       */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars"),
        },
      }),
    ],
  ],
  /**
   * @type {import('@docusaurus/preset-classic').ThemeConfig}
   */
  themeConfig: {
    navbar: {
      title: "Mini-Components",
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Mini-Components, Inc. Built with Docusaurus.`,
    },
  },
};

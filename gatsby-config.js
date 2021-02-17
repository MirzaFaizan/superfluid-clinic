module.exports = {
  siteMetadata: {
    siteTitle: `Superfluid`,
    defaultTitle: `Superfluid`,
    siteTitleShort: `Superfluid`,
    siteDescription: `A review of superfluid react codebase and some recommendations`,
    siteUrl: `http://localhost:8000`,
    siteAuthor: `@`,
    siteImage: ``,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/mirzafaizan/superfluid`,
        baseDir: `changes`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Superfluid Clinic`,
        short_name: `Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

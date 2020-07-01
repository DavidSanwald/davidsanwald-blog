module.exports = {
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-171371797-1",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-171371797-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },

    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `David Sanwald | Blog`,
    siteUrl: `https://www.davidsanwald.net`,
    author: `David Sanwald`,
    description: `All things code.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/davidsanwald`,
      },
      {
        name: `github`,
        url: `https://github.com/davidsanwald`,
      },
    ],
  },
}

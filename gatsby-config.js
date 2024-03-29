require('dotenv').config()
console.log(process.env.GATSBY_API_URL)
module.exports = {
  siteMetadata: {
    title: `Blog Site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // The top level query type, can be anything you want!
        typeName: 'title',
        // The field you'll query against, can also be anything you want.
        fieldName: 'gcms',
        // Your API endpoint, available from the dashboard and settings window.
        url: process.env.GATSBY_API_URL,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

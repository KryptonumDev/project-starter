/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Project Starter`,
    description: 'Description Placeholder',
    siteUrl: `https://gatsby.url`,
    image: 'https://gatsby.url/social.jpg', // image used for og:image must be in static folder
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 70,
          backgroundColor: `transparent`,
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/resources/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          timeout: 3000000,
        },
        "url": "https://wp-url/graphql"
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-0000000",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-yoast-sitemap",
      options: {
        baseUrl : "https://wp-url",
        gatsbyUrl : 'https://gatsby.url',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby.url',
        sitemap: 'https://wp-url/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kryptonum Project Starter`,
        short_name: `Kryptonum PS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/resources/images/favicon.png` // This path is relative to the root of the site.
      },
    }
  ]
}
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `assignment-5-gatsby`,
    description: `Starter Gatsby project for Assignment 5`,
    course: `CSCI E-114`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [  
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     // Defaults used for gatsbyImageData and StaticImage
    //     defaults: {},
    //     path: `${__dirname}/src/images/`,
    //     // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
    //     failOn: `warning`,
    //   },
    // },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },

    //  `gatsby-plugin-sharp`,
    // FOR READING IMAGES FROM FILESYSTEM AND PROCESSING THROUGH THE IMAGE PLUGINS
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/quarter_back/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/quarter_back/images`,
      },
    },  
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
      },  
    }, 

    /*  FOR PROCESSING MARKDOWN FILES INTO HTML
        `gatsby-transformer-remark`,
    */

    // FOR PROCESSING LOCAL IMAGES REFERENCED IN MARKDOWN

    

    /* FOR PROCESSING REMOTE IMAGES REFERENCED BY URL
        nodeType is the top-level node type, so if you have an 'allPark' node in graphql, you'd put 'park' here
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: '[GRAPHQL_NODE_CONTAINING_IMAGE_URLS]',  
        imagePath: '[PATH TO IMAGE URL]]',  // navigating from the nodeType down
        name: 'localImages',  // name of property in graphql schema to contain the new, cached processed image
        silent: true   // ignore 404s
      },
    },*/


  ],
}

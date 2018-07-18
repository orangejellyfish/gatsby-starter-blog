module.exports = {
  siteMetadata: {
    title: 'Gatsby starter by orangejellyfish',
    blogBasePath: '/blog',
  },
  // Define mappings between Gatsby node fields. Mappings are computed
  // recursively after splitting on "." so we can map a field on any node to
  // any field on another node. The right hand side of the mapping identifies a
  // single field on a node but the entire matched node will be copied into the
  // field identified by the left hand side.
  mapping: {
    'MarkdownRemark.frontmatter.author': 'MarkdownRemark.fields.authorName',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
  ],
};

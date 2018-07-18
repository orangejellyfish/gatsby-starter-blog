const path = require('path');
const makeSlug = require('lodash.kebabcase');
const { createFilePath } = require('gatsby-source-filesystem');

// Map of path matchers to templates. This is used to determine which template
// to use when rendering a page, favouring convention (by file path) over
// configuration.
const pathMatchers = [
  {
    matcher: /\/content\/blog-posts\//,
    template: 'blog-post',
  },
];

// Gatsby hook for creating pages at build time. This is invoked after the
// GraphQL schema has been inferred so we can query the data in order to create
// pages from it. We query for all Markdown "page" nodes and create pages from
// them. By convention we expect all Markdown nodes within the "pages" directory
// to represent pages and all others to respresent content that will be pulled
// into other pages. We can therefore filter all the Markdown nodes by file
// path.
exports.createPages = ({
  boundActionCreators: { createPage },
  graphql,
}) => graphql(`
  {
    site {
      config: siteMetadata {
        blogBasePath
      }
    }
    markdown: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
         regex: "/\\/(pages|content)\\//",
        }
      }
    ) {
      edges {
        node {
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            categories
            tags
          }
        }
      }
    }
  }
`)
  .then((result) => { // eslint-disable-line consistent-return
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const categories = new Set();
    const tags = new Set();

    result.data.markdown.edges.forEach(({ node }) => {
      // Determine the template to use with the page. If we can't find a
      // template we skip the file.
      const match = pathMatchers.find(({ matcher }) =>
        matcher.test(node.fileAbsolutePath));

      if (!match) {
        return;
      }

      const { template } = match;

      // Add the categories of this post to the set of unique categories. The
      // set is used to produce a page for each category.
      if (template === 'blog-post') {
        node.frontmatter.categories.forEach(cat => categories.add(cat));
        node.frontmatter.tags.forEach(tag => tags.add(tag));
      }

      // Create a page at the given path. The context is used to provide
      // variable data to the GraphQL query used by the page.
      const pagePath = node.fields.slug;
      const context = {};

      if (node.fields && node.fields.slug) {
        context.slug = node.fields.slug;
      }

      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/${template}/index.js`),
        context,
      });
    });

    // Create category and tag pages containing all of the blog posts belonging
    // to the given category or tag.
    const { blogBasePath } = result.data.site.config;

    categories.forEach(category => createPage({
      path: `${blogBasePath}/categories/${makeSlug(category)}`,
      component: path.resolve('src/templates/blog-category/index.js'),
      context: {
        category,
      },
    }));

    tags.forEach(tag => createPage({
      path: `${blogBasePath}/tags/${makeSlug(tag)}`,
      component: path.resolve('src/templates/blog-tag/index.js'),
      context: {
        tag,
      },
    }));
  });

// Handle "createNode" events from Gatsby at build time. This runs for every
// node (basically everything in Gatsby is a "node") and allows us to add or
// modify data associated with a node dynamically. Any changes to nodes made
// here make it through to the GraphQL schema and can there be queried.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  // If the node is a blog post we create a slug for it from its file path. The
  // file path here is actually just the file name, so the slug for
  // "src/content/blog-posts/my-first-post.md" is "my-first-post".
  if (/\/content\/blog-posts\//.test(node.fileAbsolutePath)) {
    const value = `/blog${createFilePath({
      basePath: 'blog-posts',
      getNode,
      node,
    })}`;

    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }

  // If the node is an author metadata document we create a uniquely named field
  // front the author name to allow mapping to blog post frontmatter. This
  // approach allows us to use more semantically named keys in frontmatter.
  if (/\/content\/authors\//.test(node.fileAbsolutePath)) {
    createNodeField({
      name: 'authorName',
      value: node.frontmatter.name,
      node,
    });
  }
};

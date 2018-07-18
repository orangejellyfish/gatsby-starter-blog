import graphql from 'graphql';

/* eslint-disable import/prefer-default-export */
export const fragment = graphql`
  fragment BlogPostExcerpt on MarkdownRemarkEdge {
    node {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        author {
          frontmatter {
            image
            name
          }
        }
      }
      excerpt(pruneLength: 280)
      timeToRead
    }
  }
`;

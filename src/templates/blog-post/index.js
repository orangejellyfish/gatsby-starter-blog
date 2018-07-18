import React from 'react';
import graphql from 'graphql';

const BlogPostTemplate = ({ data: { post } }) => (
  <React.Fragment>
    <h2>{post.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    <hr />
    <p className="post-metadata">
      {post.frontmatter.author.frontmatter.name}, {post.frontmatter.date}
    </p>
  </React.Fragment>
);

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author {
          frontmatter {
            name
          }
        }
      }
    }
  }
`;

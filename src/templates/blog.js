import React from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql';
import { Container } from 'reactstrap';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <Container>
        <h1 className="display-3">{post.frontmatter.title}</h1>
      </Container>
      <Container dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`;

import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';

const AboutPage = ({ data }) => (
  <React.Fragment>
    <h1>{data.page.frontmatter.title}</h1>
    <p>This is the &quot;about&quot; page. <Link to="/">Back to home</Link>.</p>
  </React.Fragment>
);

export default AboutPage;

// Query for the content associated with this page. By convention we expect the
// content to be located in a file in the "src/content/about" directory, where
// the "about" part matches the directory of this page component.
export const query = graphql`
  query AboutPage {
    page: markdownRemark(
      fileAbsolutePath: {
        regex: "/\\/content\\/about\\//",
      }
    ) {
      frontmatter {
        title
      }
    }
  }
`;

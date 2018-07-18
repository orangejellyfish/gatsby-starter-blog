import graphql from 'graphql';

/* eslint-disable import/prefer-default-export */
export const fragment = graphql`
  fragment ConfigBlogBasePath on Site {
    config: siteMetadata {
      blogBasePath
    }
  }
`;

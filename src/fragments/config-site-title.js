import graphql from 'graphql';

/* eslint-disable import/prefer-default-export */
export const fragment = graphql`
  fragment ConfigSiteTitle on Site {
    config: siteMetadata {
      title
    }
  }
`;

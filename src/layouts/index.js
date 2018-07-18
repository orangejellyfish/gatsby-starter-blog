import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import { Container } from 'reactstrap';
import Navbar from '../components/navbar';

// Import Sass entry point. This is handled by Webpack, thanks to the Gatsby
// Sass plugin.
import '../styles/index.scss';

// Main layout component. All page components are rendered as children of an
// instance of this.
const Layout = ({ children, data }) => {
  const siteTitle = data.site.config.title;

  return (
    <div className="app">
      <Helmet title={siteTitle} />
      <Navbar title={siteTitle} />
      <Container>{children()}</Container>
    </div>
  );
};

export default Layout;

// Query for data associated with this layout.
export const query = graphql`
  query LayoutIndexQuery {
    site {
      ...ConfigSiteTitle
    }
  }
`;

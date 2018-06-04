import React from 'react';
import Link from 'gatsby-link';
import { Container } from 'reactstrap';

const AboutPage = () => (
  <Container>
    <h1>About us</h1>
    <p>This is the &quot;about&quot; page. <Link to="/">Back to home</Link>.</p>
  </Container>
);

export default AboutPage;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import makeSlug from 'lodash.kebabcase';
import { Badge } from 'reactstrap';

const BlogPostTag = ({ blogBasePath, tag }) => (
  <Badge className="blog-post-tag">
    <Link to={`${blogBasePath}/tags/${makeSlug(tag)}`}>{tag}</Link>
  </Badge>
);

BlogPostTag.propTypes = {
  blogBasePath: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

BlogPostTag.defaultProps = {
  blogBasePath: '',
};

export default BlogPostTag;

import React from 'react';
import graphql from 'graphql';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import BlogPostExcerpt from '../../components/blog-post-excerpt';

const BlogTagTemplate = ({ data, pathContext }) => (
  <React.Fragment>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={data.site.config.blogBasePath}>Blog</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={`${data.site.config.blogBasePath}/tags`}>Tags</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          {pathContext.tag}
        </BreadcrumbItem>
      </Breadcrumb>
      {data.posts.edges.map(({ node }) => (
        <BlogPostExcerpt key={node.fields.slug} post={node} />
      ))}
    </Container>
  </React.Fragment>
);

BlogTagTemplate.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogTagTemplate;

export const query = graphql`
  query AllPostsForTag($tag: String!) {
    site {
      ...ConfigBlogBasePath
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: {
            in: [$tag]
          }
        }
      }
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
    ) {
      edges {
        ...BlogPostExcerpt
      }
    }
  }
`;

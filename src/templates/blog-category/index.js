import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BlogCategoryTemplate = ({
  data,
  pathContext: {
    category,
  },
}) => (
  <React.Fragment>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/blog">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/blog">Blog</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/blog/categories">Categories</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        {category}
      </BreadcrumbItem>
    </Breadcrumb>
    {data.posts.edges.map(({ node }) => (
      <div key={node.fields.slug}>
        <h2>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        <p>{node.excerpt}</p>
        <p>
          <i>{node.frontmatter.author.frontmatter.name}, {node.frontmatter.date}</i>
        </p>
        <hr />
      </div>
    ))}
  </React.Fragment>
);

BlogCategoryTemplate.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCategoryTemplate;

export const query = graphql`
  query AllPostsForCategory($category: String!) {
    posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          categories: {
            in: [$category]
          }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            author {
              frontmatter {
                name
              }
            }
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;

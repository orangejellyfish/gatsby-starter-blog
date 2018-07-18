import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';
import makeSlug from 'lodash.kebabcase';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import BlogPostExcerpt from '../../components/blog-post-excerpt';

const BlogPage = ({ data }) => (
  <React.Fragment>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/blog">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        Blog
      </BreadcrumbItem>
    </Breadcrumb>
    Blog categories:
    <ul>
      {data.categories.group.map(({ fieldValue: category }) => {
        const slug = makeSlug(category);

        return (
          <li>
            <Link key={slug} to={`/blog/categories/${slug}`}>{category}</Link>
          </li>
        );
      })}
    </ul>
    {data.posts.edges.map(({ node }) => (
      <BlogPostExcerpt key={node.fields.slug} post={node} />
    ))}
  </React.Fragment>
);

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    categories: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/\\/content\\/blog-posts\\//"
        }
      }
    ) {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
         regex: "/\\/content\\/blog-posts\\//"
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

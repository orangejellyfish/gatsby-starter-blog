import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';
import makeSlug from 'lodash.kebabcase';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

const BlogCategoriesPage = ({ data }) => (
  <React.Fragment>
    <Container className="section">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={data.site.config.blogBasePath}>Blog</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Categories
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col md="8">
          <ul>
            {data.categories.group.map(({ fieldValue }) => (
              <li>
                <Link to={`${data.site.config.blogBasePath}/categories/${makeSlug(fieldValue)}`}>
                  {fieldValue}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default BlogCategoriesPage;

export const query = graphql`
  query BlogCategoriesPageQuery {
    site {
      ...ConfigBlogBasePath
    }
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
  }
`;

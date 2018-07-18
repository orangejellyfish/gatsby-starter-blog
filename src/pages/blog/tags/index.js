import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import BlogPostTag from '../../../components/blog-post-tag';

const BlogTagsPage = ({ data }) => (
  <React.Fragment>
    <Container className="section">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={data.site.config.blogBasePath}>Blog</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Tags
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col md="8">
          {data.tags.group.map(({ fieldValue }) => (
            <BlogPostTag
              blogBasePath={data.site.config.blogBasePath}
              tag={fieldValue}
            />
          ))}
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default BlogTagsPage;

export const query = graphql`
  query BlogTagsPageQuery {
    site {
      ...ConfigBlogBasePath
      ...ConfigSiteTitle
    }
    tags: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/\\/content\\/blog-posts\\//"
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;

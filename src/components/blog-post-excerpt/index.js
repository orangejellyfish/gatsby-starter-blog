import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const BlogPostExcerpt = ({ post }) => (
  <article key={post.fields.slug} className="blog-post">
    <div className="blog-post-metadata-wrapper">
      <div className="blog-post-metadata-photo">
        <img
          src={post.frontmatter.author.frontmatter.image}
          alt={post.frontmatter.author.frontmatter.name}
          className="photo"
        />
      </div>
      <div className="blog-post-metadata">
        <span className="blog-post-author">
          {post.frontmatter.author.frontmatter.name}
        </span>
        <div>
          <span>{post.frontmatter.date}</span>
          <span className="divider"> | </span>
          <span>{post.timeToRead} min read</span>
        </div>
      </div>
    </div>
    <h1>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h1>
    <p className="excerpt">{post.excerpt}</p>
    <div className="blog-post-actions">
      <Link to={post.fields.slug} className="read-more">Read more&hellip;</Link>
    </div>
  </article>
);

BlogPostExcerpt.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.object,
    excerpt: PropTypes.string,
    timeToRead: PropTypes.number,
  }).isRequired,
};

export default BlogPostExcerpt;

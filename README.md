# gatsby-starter-netlify-cms

A basic starter kit for [Gatsby][gatsby] following [orangejellyfish][oj]
JavaScript best practices. This kit is intended for the development of simple
static sites. If you have more complex requirements one of our alternative kits
might better suit your needs:

## Features

- React 16 support via [gatsby-plugin-react-next][gprn]
- Bootstrap 4 support via [reactstrap][rs]
- Unit testing with [Jest][jest] and [Enzyme][enz]
- Global styling with [Sass][sass]
- [Netlify CMS][ncms] support
- Blogging capability including support for
  - Images in blog post Markdown
  - Multiple authors
  - Blog post categories
  - Blog post tags

If you have more or less complex requirements one of our alternative kits, built
upon the same base, might better suit your needs:

- [gatsby-starter-base][gsbase] removes Netlify CMS support and is designed as a
  barebones static site generator.

- [gatsby-starter-netlify-cms][gsn] removes much of the blogging configuration
  but still includes the basic Netlify CMS setup.

## Usage

The kit requires Node (version 8 or above recommended) and npm (version 5.2 or
above recommended). If those are available on your system you can use [npx][npx]
to quickly scaffold a new site from the kit:

```sh
npx -p gatsby-cli gatsby new $DIR_NAME https://github.com/orangejellyfish/gatsby-starter-blog
cd $DIR_NAME
npm start
```

## Conventions

Gatsby is a very flexible tool. In order to reduce some of the configuration
overhead associated with such flexibility we favour the following conventions:

- A "layout" is viewed as a common parent to multiple pages. It is represented
  as a React component exported from a file in the `src/layouts` directory.

- A "template" is viewed as a blueprint for an individual page. It is represented
  as a React component exported from a file in the `src/templates` directory.

- A "page" is viewed as an individual web page. A page is represented as a
  React component exported from a file in the `src/pages` directory.

- Content may be placed inline within a page if it is not required to be
  editable via the CMS.

- In some cases, such as blog posts, each editable piece of content represents
  a page. In such situations editable content may be placed in the `src/pages`
  directory. For example, a blog post written in Markdown might be found in
  `src/pages/blog/my-post.md`. In this case the page will use a template
  component.

- Editable content is placed in a Markdown file in the `src/content` directory.

- The directory structures of the `src/pages` and `src/content` directories are
  used to map content to pages. This avoids the need to configure the
  relationship manually. The content for `src/pages/about/index.js` is expected
  to be found in `src/content/about/index.md`.

- Simple components (those that are not pages or layouts and generally receive
  data as props from ancestor components that pull in data from GraphQL) are
  placed in the `src/components` directory.

- GraphQL fragments are placed in the `src/fragments` directory. This means all
  fragments are co-located so you don't have to search through all of your
  components to find one.

## Blogging

This starter kits includes useful blogging functionality. Blog posts are placed
in subdirectories of `src/content/blog-posts`. Images and other attachments for
a given post should be placed alongside the post content itself. We use the
[gatsby-remark-images][gri] plugin to interpret file links within Markdown at
build time. For example, if you have an image `diagram.png` alongside `index.md`
in a blog post directory you could render that image in the post with Markdown:

```md
Take a look at the following diagram:

![This is the diagram alt text](diagram.png)
```

[gatsby]: https://www.gatsbyjs.org/
[oj]: https://orangejellyfish.com/
[gprn]: https://www.npmjs.com/package/gatsby-plugin-react-next
[rs]: https://reactstrap.github.io/
[jest]: https://facebook.github.io/jest/
[enz]: https://github.com/airbnb/enzyme
[sass]: https://sass-lang.com/
[ncms]: https://www.netlifycms.org/
[gsbase]: https://github.com/orangejellyfish/gatsby-starter-base
[gsn]: https://github.com/orangejellyfish/gatsby-starter-netlify-cms
[ncms]: https://www.netlifycms.org/
[npx]: https://www.npmjs.com/package/npx
[gri]: https://www.gatsbyjs.org/packages/gatsby-remark-images/

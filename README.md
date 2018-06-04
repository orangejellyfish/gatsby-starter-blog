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

If you have more or less complex requirements one of our alternative kits, built
upon the same base, might better suit your needs:

- [gatsby-starter-base][gsbase] removes Netlify CMS support and is designed as a
  barebones static site generator.

- [gatsby-starter-blog][gsb] builds upon the Netlify CMS starter to include a
  blogging framework.

## Usage

The kit requires Node (version 8 or above recommended) and npm (version 5.2 or
above recommended). If those are available on your system you can use [npx][npx]
to quickly scaffold a new site from the kit:

```sh
npx -p gatsby-cli gatsby new $DIR_NAME https://github.com/orangejellyfish/gatsby-starter-base
cd $DIR_NAME
npm start
```

## Conventions

Gatsby is a very flexible tool. In order to reduce some of the configuration
overhead associated with such flexibility we favour the following conventions:

- A "layout" is viewed as a common parent to multiple pages. It is represented
  as a React component exported from a file in the `src/layouts` directory.

- A "page" is viewed as an individual web page. A page is represented as a
  React component exported from a file in the `src/pages` directory.

- Content may be placed inline within a page if it is not required to be
  editable via the CMS.

- Editable content is placed in a Markdown file in the `src/content` directory.

- The directory structures of the `src/pages` and `src/content` directories are
  used to map content to pages. This avoids the need to configure the
  relationship manually. The content for `src/pages/about/index.js` is expected
  to be found in `src/content/about/index.md`.

- Simple components (those that are not pages or layouts and generally receive
  data as props from ancestor components that pull in data from GraphQL) are
  placed in the `src/components` directory.

[gatsby]: https://www.gatsbyjs.org/
[oj]: https://orangejellyfish.com/
[gprn]: https://www.npmjs.com/package/gatsby-plugin-react-next
[rs]: https://reactstrap.github.io/
[jest]: https://facebook.github.io/jest/
[enz]: https://github.com/airbnb/enzyme
[sass]: https://sass-lang.com/
[ncms]: https://www.netlifycms.org/
[gsbase]: https://github.com/orangejellyfish/gatsby-starter-base
[gsb]: https://github.com/orangejellyfish/gatsby-starter-blog
[ncms]: https://www.netlifycms.org/
[npx]: https://www.npmjs.com/package/npx

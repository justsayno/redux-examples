# Webpack Html Sass Starter

This is a very simple starter kit to get going with writing html and [Sass](http://sass-lang.com/) using [Webpack](https://webpack.github.io/),
[Sass](http://sass-lang.com/) and [Babel](https://babeljs.io/).

There are branches with different flavours of CSS frameworks. The master branch is just an empty project with a webpack build using `src/index.html`
as the template, `src/index.scss` as the main Sass file and `index.js` as the entry point for the app.

``` shell
git checkout materialize-css
```

## Quick start

> Required Node >= 4

### Install dependencies:

```
npm start
```

### Run for development

To run development mode on localhost:3000:

``` shell
npm start
```

You can then edit `src/index.hml`, `src/index.scss` and `src/index.js` to create your html app.

### Create a production version

To build to the public folder:

``` shell
npm run build
```

This will create a uglified, minified version of the app which will contain three files:

- index.hmlt
- index_bundle.js
- index_bundle.map.js


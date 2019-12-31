# Material UI Next.js Template

## Installation

Uses the Material UI Next.js example as a template cloned from the [Next.js example repo](https://github.com/mui-org/material-ui) downloaded:

```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/nextjs
cd nextjs
```

Install and run:

```sh
npm install
npm run dev
```

## Concept

* Create a fresh, new `ServerStyleSheets` instance on every request.
* Render the React tree with the server-side collector.
* Pull the CSS out.
* Pass the CSS along to the client.

Read Material UI [Server Rendering](https://material-ui.com/guides/server-rendering/#server-rendering).

# Next.js

[Next.js](https://github.com/zeit/next.js) is a framework for server-rendered React apps.

# Lesson 1

A unit testing workshop for Madgex front-end developers. Looks at NPM Workspaces, Vue, Vite, Vitest, Vue Test Utils and Mock Service Worker.

## npm workspaces

1. run `npm init -w api`
2. run `npm i express -w api`
3. create an `index.js` file in `/api`
4. add the following to your `/api/index.js` to create a simple hello world express app

```js
const express = require('express');
const app = express();
const port = 3000;

const jobs = [
  { id: 1, title: 'Web developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' },
  { id: 2, title: 'Senior Web developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '35,000.00' },
  { id: 3, title: 'Web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' },
  { id: 4, title: 'Senior Web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '35,000.00' },
  { id: 5, title: 'QA Tester', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.', salary: '25,000.00' }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/jobs', (req, res) => {

  if (req.query['jobCount']) {
    const jobSlice = jobs.slice(0, parseInt(req.query['jobCount'], 10));
    res.json({
      status: 'success',
      data: jobSlice,
    });
  }

  res.json({
    status: 'success',
    data: jobs,
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```

5. in `/api/package.json` define a start command

```json
  "scripts": {
    "start": "node index.js"
  },
```

6. in monorepo root, add a command to start the api workspace `npm run start -w api`

```json
  "scripts": {
      "start:api": "npm run start -w api"
  },
```

## vite + vue

-- vue js intro - who/what/when/where/why
-- vite build tool intro - who/what/when/where/why
-- vite config file - who/what/when/where/why

1. define an proxy for our api domain so that we can make requests using '/api'
-- add the following to the `/vite-project/vite.config.js`

```js
server: {
    proxy: {
      '/api': {
        target: '"http://localhost:3000"',
        changeOrigin: true,
      },
    },
  },
```

2. define an alias so that `@` resolves to the `/src` of our `/vite-project/src`
-- add the following to the `/vite-project/vite.config.js`

```js
  import { fileURLToPath, URL } from 'node:url';
```

```js
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
```

## vitest

-- test environment (jsdom)
-- test setup

## writing a unit test in a vue context

-- test files
-- vitest - expects
-- vitest - async nature of tests
-- vitest - beforeEach, afterEach
-- vue context - mount vs shallow mount
-- vue context - props and data
-- vue context - responding to events
-- vitest - spys
-- vue context - flushPromises()

## mock service worker

-- setup & how it works
-- mocking http requests/responses

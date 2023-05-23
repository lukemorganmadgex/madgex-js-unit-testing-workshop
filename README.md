# Madgex FED js unit testing workshop

A tooling workshop for Madgex front-end developers. Looks at NPM Workspaces, Vue, Vite, Vitest, Vue Test Utils and Mock Service Worker.

## Lesson 1 - npm workspaces

1. run `npm init -w api`
2. run `npm i express -w api`
3. create an `index.js` file in `/api`
4. add the following to your `/api/index.js` to create a simple hello world express app

```js
const express = require("express");
const app = express();
const port = 3000;

const jobs = [
  {
    id: 1,
    title: "Web developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.",
    salary: "25,000.00",
  },
  {
    id: 2,
    title: "Senior Web developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.",
    salary: "35,000.00",
  },
  {
    id: 3,
    title: "Web designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.",
    salary: "25,000.00",
  },
  {
    id: 4,
    title: "Senior Web designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.",
    salary: "35,000.00",
  },
  {
    id: 5,
    title: "QA Tester",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus lorem. Nam convallis porta augue sit amet aliquet. Aenean.",
    salary: "25,000.00",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jobs", (req, res) => {
  if (req.query["jobCount"]) {
    const jobSlice = jobs.slice(0, parseInt(req.query["jobCount"], 10));
    res.json({
      status: "success",
      data: jobSlice,
    });
  }

  res.json({
    status: "success",
    data: jobs,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
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

## Lesson 2 - vite + vue

[vue](https://vuejs.org/)
[vite](https://vitejs.dev/)

1. Create a vue project using: `npm create vite@latest`

2. define an proxy in our vite config file for our api domain so that we can make requests using '/api'

add the following to the `/vite-project/vite.config.js`

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

3. define an alias so that `@` resolves to the `/src` of our `/vite-project/src`

add the following to the `/vite-project/vite.config.js`

```js
import { fileURLToPath, URL } from "node:url";
```

```js
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
```

4. create an async hello world component that will speak to our api from lesson 01

```vue
<script setup>
import { ref } from "vue";
import axios from "axios";

const jobCount = ref(3);
const jobs = ref([]);

async function getJobs() {
  const res = await axios.get(`/api/jobs?jobCount=${jobCount.value}`);
  if (res.status === 200) {
    jobs.value = res.data.data;
  }
}
</script>

<template>
  <form style="margin-bottom: 2rem;" @submit.prevent>
    <div
      style="margin: 0 auto; width: 300px; margin-bottom: 2rem; display: flex; flex-direction: column;"
    >
      <label for="jobs" style="margin-bottom: 1rem;"
        >How Many Jobs Do you Want to See?</label
      >
      <input type="number" name="jobs" id="jobs" v-model="jobCount" />
    </div>
    <button type="submit" @click="getJobs()">Get jobs</button>
  </form>
  <div class="results">
    <div class="job" v-for="(job, index) in jobs" :key="index">
      <h3>{{ job.title }}</h3>
      <p>{{ job.description }}</p>
      <small>salrary: £{{ job.salary }} gbp p/a</small>
    </div>
  </div>
</template>

<style scoped></style>
```

5. Add a script to the monorepo root to start our vite project dev-server

```json
"scripts": {
    "dev:vite-project": "npm run dev -w vite-project",
  },
```

## Lesson 3 - vitest

[vitest](https://vitest.dev/)
[vue test utils](https://test-utils.vuejs.org/)

`cd ./packages/vite-project`

1. install vitest into the package you want to test `npm install -D vitest`.

2. install `jsdom` so we can mock a browser environment.

3. install vue test utils `npm install --save-dev @vue/test-utils`.

4. create a test spec file that will live next to our component `HelloWorld.spec.js`.

5. write a unit test that will check the text inside the h1 component matches the value passed into the component.

6. write a unit test that will trigger the button click and check the value of the `count` state ref.

7. write a unit test that will ensure the text inside the span with the id `counter-text` upates.

8. write an npm script that will run all our tests for us.

```json
"scripts": {
    "test:vite-project": "npm run vitest -w vite-project",
  },
```

## Lesson 5 - mock service worker

-- setup files for vitest
-- setup & how msw works
-- mocking RESTFUL http requests/responses

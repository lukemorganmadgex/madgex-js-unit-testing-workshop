# Lesson 1

## npm workspaces

1. run `npm init -w api`
2. run `npm i express -w api`
3. create an `index.js` file in `/api`
4. create a simple hello world express app
5. in `/api/package.json` define a start command
6. in monorepo root, add a command to start the api workspace `npm run start -w api`

## vite + vue

-- vue js intro - who/what/when/where/why
-- vite build tool intro - who/what/when/where/why
-- vite config file - who/what/when/where/why
-- alias in vite file

## vitest

-- test setup
-- test environment (jsdom)

## writing a unit test in a vue context

-- test files
-- vitest - async nature of tests
-- vitest - beforeEach, afterEach
-- vitest - expects
-- vue context - mount vs shallow mount
-- vue context - props and data
-- vue context - responding to events
-- vitest - spys
-- vue context - flushPromises()

## mock service worker

-- setup & how it works
-- mocking http requests/responses

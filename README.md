# douglas.de TypeScript Playwright  framework

## Overview

Sample framework built using Playwright test runner.

## How-to set up

Install dependencies:

- npm ci - install npm packages
- npm run setup - install playwright

## How-to run tests locally

- npm run test:all - run all tests
- npm run test:chrome - run tests on chromium browser
- npm run test:webkit - run tests on webkit browser

### Test Debugging

Will launch tests in debug mode. You can use the playwright dev tools to debug the tests.

- npm run test:debug:chrome - run tests on chromium browser
- npm run test:debug:webkit - run tests on webkit browser

### Test Reports

The project uses Line reporter for console output, built in Playwright reporter for generating HTML reports and Juin
reporter for generating reports that would bring more clarity to CI workflow.

The reporter will launch automatically during the local run if there are failed or flaky tests.

To generate a report manually, - npm run report

### Bug reports

I've added a couple of reproducable bugs that i've found in the application. You can find them in the `bugReport.txt`
file.

## Links

- [Playwright docs](https://playwright.dev/docs/intro)

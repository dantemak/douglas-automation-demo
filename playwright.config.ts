import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 35000,
  workers: 2,
  retries: 0,
  globalSetup: require.resolve("./global-setup.ts"),
  reporter: [["list"], ["html"], ["junit", { outputFile: "results.xml" }]],
  use: {
    baseURL: "https://www.douglas.de/",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    testIdAttribute: "data-testid",
    storageState: "state.json",
    trace: "on-first-retry",
    launchOptions: {
      slowMo: 70,
    },
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "webKit",
      use: { browserName: "webkit" },
    },
  ],
});

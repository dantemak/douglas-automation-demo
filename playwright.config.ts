import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 35000,
  workers: 2,
  retries: 1,
  globalSetup: require.resolve("./global-setup.ts"),
  reporter: [["list"], ["html"], ["junit", { outputFile: "results.xml" }]],
  use: {
    actionTimeout: 5000,
    baseURL: "https://www.douglas.de/",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    testIdAttribute: "data-testid",
    storageState: "state.json",
    trace: "on-first-retry",
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

import { chromium, FullConfig } from "@playwright/test";
import { HomePage } from "./src/pages";

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${baseURL}`);
  const homePage = new HomePage(page);
  await homePage.cookiesOverlay.acceptCookies();

  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshot.png" });

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;

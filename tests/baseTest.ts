import { test as base } from "@playwright/test";
import { HomePage, ProductListPage } from "../src/pages";

type MyFixtures = {
  homePage: HomePage;
  productListPage: ProductListPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  productListPage: async ({ page }, use) => {
    const productListPage = new ProductListPage(page);
    await use(productListPage);
  },
});
export { expect } from "@playwright/test";

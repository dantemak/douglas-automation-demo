import { expect, test } from "./baseTest";
import { NavMenuItems, testData } from "../src/data/constants";
import { pushTestCaseInfo, selectProductListFilters } from "../src/utils";

test.describe
  .parallel("Filtering tests for the Parfum product list section", () => {
  for (const data of testData.Sale) {
    test(`Test id ${data.id} Validate filtering in 'Sale' selection`, async ({
      homePage,
      productListPage,
    }, testInfo) => {
      await pushTestCaseInfo(testInfo, data);

      await test.step("Open Parfum section", async () => {
        await homePage.goto();
        await homePage.header.openNavMenuItem(NavMenuItems.parfum);
      });

      const products = await selectProductListFilters(productListPage, data);

      await test.step("Validate found products contain correct data", async () => {
        for (const product of products) {
          const categories = new RegExp(data.produktar.join("|"));
          const brands = new RegExp(data.marke.join("|"));

          await expect(await product.getProductCategory()).toHaveText(
            categories,
          );
          await expect(await product.getProductBrand()).toHaveText(brands);
          expect(await product.isSale()).toBeTruthy();
        }
      });
    });
  }

  for (const data of testData.Neu) {
    test(`Test id ${data.id} Validate filtering in 'Neu' selection`, async ({
      homePage,
      productListPage,
    }, testInfo) => {
      await pushTestCaseInfo(testInfo, data);

      await test.step("Open Parfum section", async () => {
        await homePage.goto();
        await homePage.header.openNavMenuItem(NavMenuItems.parfum);
      });

      const products = await selectProductListFilters(productListPage, data);

      await test.step("Validate found products contain correct data", async () => {
        for (const product of products) {
          const categories = new RegExp(data.produktar.join("|"));
          const brands = new RegExp(data.marke.join("|"));

          await expect(await product.getProductCategory()).toHaveText(
            categories,
          );
          await expect(await product.getProductBrand()).toHaveText(brands);
          expect(await product.isNeu()).toBeTruthy();
        }
      });
    });
  }

  for (const data of testData.Limitiert) {
    test(`Test id ${data.id} Validate filtering in 'Limitiert' selection`, async ({
      homePage,
      productListPage,
    }, testInfo) => {
      await pushTestCaseInfo(testInfo, data);

      await test.step("Open Parfum section", async () => {
        await homePage.goto();
        await homePage.header.openNavMenuItem(NavMenuItems.parfum);
      });

      const products = await selectProductListFilters(productListPage, data);

      await test.step("Validate found products contain correct data", async () => {
        for (const product of products) {
          const categories = new RegExp(data.produktar.join("|"));
          const brands = new RegExp(data.marke.join("|"));

          await expect(await product.getProductCategory()).toHaveText(
            categories,
          );
          await expect(await product.getProductBrand()).toHaveText(brands);
        }
      });
    });
  }
});

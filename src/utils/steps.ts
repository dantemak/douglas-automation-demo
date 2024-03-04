import { ProductListPage } from "../pages";
import { test, TestInfo } from "@playwright/test";
import { FilterDropdowns } from "../data/constants";
import { expect } from "playwright/test";
import { makeTestDoc } from "./utils";

interface Data {
  higlight: string;
  marke: string[];
  produktar: string[];
  furWen: string[];
  geschenkFur: string[];
}

export async function selectProductListFilters(
  productListPage: ProductListPage,
  testData: Data,
) {
  return await test.step(`Selecting filters for ${testData.higlight} option`, async () => {
    await productListPage.selectFilterOptions(
      FilterDropdowns.highlights,
      testData.higlight,
    );

    await productListPage.showMoreFilters();
    await productListPage.selectFilterOptions(
      FilterDropdowns.geschenkFur,
      ...testData.geschenkFur,
    );
    await productListPage.selectFilterOptions(
      FilterDropdowns.produktart,
      ...testData.produktar,
    );
    await productListPage.selectFilterOptions(
      FilterDropdowns.furWen,
      ...testData.furWen,
    );
    await productListPage.selectFilterOptions(
      FilterDropdowns.marke,
      ...testData.marke,
    );

    const expectedProductCount =
      await productListPage.getProductsCountFromHeader();

    const products = await productListPage.getProducts();

    expect(products.length, "Product Count is incorrect").toBe(
      expectedProductCount,
    );
    return products;
  });
}

export async function pushTestCaseInfo(testInfo: TestInfo, testData: Data) {
  makeTestDoc(
    testInfo,
    `Navigate to Parfum section and select category ${testData.higlight}
  with filters: product type: ${testData.produktar.join(", ")},
  brand: ${testData.marke.join(", ")},
  for whom: ${testData.furWen.join(", ")},
  gift for: ${testData.geschenkFur.join(", ")}.
  
  Validate that found products are equal to the count in the heading
  and contain correct data.`,
  );
}

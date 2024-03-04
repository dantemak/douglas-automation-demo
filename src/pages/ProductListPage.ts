import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";
import { FilterDropdowns } from "../data/constants";
import { Product } from "./components";
import { buildElementsArray, isEmpty } from "../utils";

export class ProductListPage extends BasePage {
  private product: Locator;

  constructor(page: Page) {
    super(page);
    this.product = this.page.getByTestId("product-tile");
  }

  async getPageHeading() {
    return await this.page.locator(".product-overview__headline").textContent();
  }

  async showMoreFilters() {
    await this.page.locator(".facet-list__show-more").click();
  }

  async selectFilterOptions(
    filterDropdown: FilterDropdowns,
    ...options: string[]
  ) {
    if (isEmpty(options)) {
      return;
    }

    for (const option of options) {
      await this.page.getByTestId(filterDropdown).waitFor({ state: "visible" });
      await this.page.getByTestId(filterDropdown).click();

      const optionElement = this.page.getByRole("checkbox", {
        name: option,
      });
      await optionElement.click();
      await this.page.waitForLoadState("domcontentloaded", {
        timeout: 5000,
      });

      await this.page.waitForTimeout(1000);
      await this.page.keyboard.press("Escape");
    }
  }

  async getProductsCountFromHeader() {
    const optionText = await this.page
      .locator(".product-overview__headline-wrapper")
      .textContent();
    return parseInt(optionText.match(/\d+/)![0], 10);
  }

  async getProducts() {
    await this.product.first().waitFor({ state: "visible" });
    return buildElementsArray(this.product, Product);
  }
}

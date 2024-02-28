import { BaseComponent } from "./BaseComponent";
import { Locator } from "@playwright/test";

export class Product extends BaseComponent {
  constructor(wrapper: Locator) {
    super(wrapper);
  }

  async getProductCategory() {
    return this.wrapper.locator(".category");
  }

  async getProductBrand() {
    return this.wrapper.locator(".top-brand");
  }

  async isSale() {
    return this.wrapper.getByText("Sale").isVisible();
  }

  async isNeu() {
    return this.wrapper.getByText("Neu").isVisible();
  }
}

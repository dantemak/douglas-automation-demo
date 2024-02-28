import { BaseComponent } from "./BaseComponent";
import { Page } from "@playwright/test";

export class CookiesOverlay extends BaseComponent {
  constructor(page: Page) {
    super(page.locator(".uc-overlay"));
  }

  async acceptCookies() {
    await this.wrapper.waitFor({ state: "visible" });
    await this.wrapper
      .locator(".uc-list-button__accept-all")
      .click({ force: true });
  }
}

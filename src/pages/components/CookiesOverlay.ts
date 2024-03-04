import { BaseComponent } from "./BaseComponent";
import { Page } from "@playwright/test";

export class CookiesOverlay extends BaseComponent {
  constructor(page: Page) {
    super(page.locator(".uc-overlay"));
  }

  async acceptCookies() {
    const acceptAllButton = this.wrapper.locator(".uc-list-button__accept-all");
    await acceptAllButton.waitFor({ state: "visible" });
    await acceptAllButton.click({ force: true });
  }
}

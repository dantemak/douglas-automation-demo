import { Page } from "@playwright/test";
import { CookiesOverlay, Header } from "./components";

export class BasePage {
  protected constructor(protected page: Page) {}

  get cookiesOverlay() {
    return new CookiesOverlay(this.page);
  }

  get header() {
    return new Header(this.page);
  }

  async goto(url = "/") {
    const waitForLoadState = this.page.waitForLoadState("load");
    await this.page.goto(url);
    await waitForLoadState;
  }
}

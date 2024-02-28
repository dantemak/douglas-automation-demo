import { BaseComponent } from "./BaseComponent";
import { Page } from "@playwright/test";
import { NavMenuItems } from "../../data/constants";

export class Header extends BaseComponent {
  constructor(page: Page) {
    super(page.locator("header"));
  }

  async openNavMenuItem(menuItem: NavMenuItems) {
    await this.wrapper.locator(`[data-uid="${menuItem}"]`).click();
  }
}

import { Locator } from "@playwright/test";

export abstract class BaseComponent {
  protected constructor(protected wrapper: Locator) {}
}

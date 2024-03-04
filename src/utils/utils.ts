import { Locator, TestInfo } from "@playwright/test";
import { BaseComponent } from "../pages/components/BaseComponent";

export async function buildElementsArray<T extends BaseComponent>(
  locator: Locator,
  ElClass: new (l: Locator) => T,
): Promise<Array<T>> {
  const arr = [];
  for (const element of await locator.all()) {
    arr.push(new ElClass(element));
  }
  return arr;
}

export function isEmpty(options: string | string[]) {
  return (
    !options ||
    options.length === 0 ||
    (options.length === 1 && options[0] === "")
  );
}

const formatDocumentation = (title: string, description: string) =>
  `${title}\n\n${description}`;

export const makeTestDoc = (testInfo: TestInfo, description: string) => {
  const doc = formatDocumentation(testInfo.title, description);
  const body = Buffer.from(doc);
  testInfo.attachments.push({
    name: "scenario",
    contentType: "text/plain",
    body,
  });
};

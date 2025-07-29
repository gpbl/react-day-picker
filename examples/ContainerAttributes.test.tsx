import React from "react";

import { app } from "@/test/elements";
import { render } from "@/test/render";

import { ContainerAttributes } from "./ContainerAttributes";

beforeEach(() => {
  render(
    <div role="application">
      <ContainerAttributes />
    </div>,
  );
});

test('should have the "id" attribute', () => {
  expect(app().firstChild).toHaveAttribute("id", "testId");
});

test('should have the "title" attribute', () => {
  expect(app().firstChild).toHaveAttribute("title", "foo_title");
});

test('should have the "lang" attribute', () => {
  expect(app().firstChild).toHaveAttribute("lang", "it");
});

test("should have the data set attribute", () => {
  expect(app().firstChild).toHaveAttribute("data-test", "testData");
});

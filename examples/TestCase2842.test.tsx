import React from "react";
import { render } from "@/test/render";
import { TestCase2842 } from "./TestCase2842";

describe("when clicking the today button", () => {
  beforeEach(async () => {
    render(<TestCase2842 />);
  });

  test('the Today button has aria-disabled="true" but is not disabled', () => {});
});

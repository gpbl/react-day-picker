import React from "react"

import { nextButton, previousButton } from "@/test/elements.js"
import { render } from "@/test/render.js"
import { user } from "@/test/user.js"

import { Nav } from "./Nav.js"

describe("when clicking the next button", () => {
  test("should call the onNextClick callback", async () => {
    const onNextClick = jest.fn();
    render(<Nav />, { onNextClick });
    await user.click(nextButton());
    expect(onNextClick).toHaveBeenCalled();
  });
});

describe("when clicking the previous button", () => {
  test("should call the onPrevClick callback", async () => {
    const onPrevClick = jest.fn();
    render(<Nav />, { onPrevClick });
    await user.click(previousButton());
    expect(onPrevClick).toHaveBeenCalled();
  });
});

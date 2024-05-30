import React from "react";

import { nextButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { Nav } from "./Nav";

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
    await user.click(nextButton());
    expect(onPrevClick).toHaveBeenCalled();
  });
});

/**
 * @jest-environment node
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { DayPicker } from "./DayPicker";

describe("useAnimation on the server", () => {
  // React < 19 logs a warning for every `useLayoutEffect` call on the server.
  // React 19 no longer warns, so this asserts the call itself.
  test("does not call useLayoutEffect", () => {
    const useLayoutEffect = jest.spyOn(React, "useLayoutEffect");

    renderToString(<DayPicker />);

    expect(useLayoutEffect).not.toHaveBeenCalled();
  });
});

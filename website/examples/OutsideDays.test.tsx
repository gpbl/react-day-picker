import { screen } from "@testing-library/react";
import { renderApp } from "react-day-picker/test";

import { OutsideDays } from "./OutsideDays";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<OutsideDays />);
});

describe("when displaying a month with outside days", () => {
  test("should display the outside day", () => {
    // TODO: verify this test actually works
    expect(screen.getByRole("gridcell", { name: "31" })).toBeInTheDocument();
  });
});

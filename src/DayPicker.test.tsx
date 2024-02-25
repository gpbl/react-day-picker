import { renderApp } from "@/test/renderApp";
import { DayPicker } from "./DayPicker";
import { app } from "@/test/elements";

jest.useFakeTimers().setSystemTime(new Date("2023-12-10"));

test("should render a date picker component", () => {
  renderApp(<DayPicker />);
  expect(app()).toMatchSnapshot();
});

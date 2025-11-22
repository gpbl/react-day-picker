import { screen } from "@testing-library/react";
import { addDays } from "date-fns";
import React from "react";
import { dateButton } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { RangeResetSelection } from "./RangeResetSelection";

const today = new Date(2022, 8, 12);

setTestTime(today);
beforeEach(() => render(<RangeResetSelection />));

const getFrom = () => screen.getByTestId("from");
const getTo = () => screen.getByTestId("to");

test("select same day range", async () => {
  await user.click(dateButton(today));
  expect(getFrom()).toHaveTextContent("from: 2022-09-12");
  expect(getTo()).toHaveTextContent("to:");
  await user.click(dateButton(today));
  expect(getFrom()).toHaveTextContent("from: 2022-09-12");
  expect(getTo()).toHaveTextContent("to: 2022-09-12");
});

test("start range after click on day with range selected", async () => {
  await user.click(dateButton(today));
  expect(getFrom()).toHaveTextContent("from: 2022-09-12");
  expect(getTo()).toHaveTextContent("to:");
  await user.click(dateButton(addDays(today, 1)));
  expect(getFrom()).toHaveTextContent("from: 2022-09-12");
  expect(getTo()).toHaveTextContent("to: 2022-09-13");
  await user.click(dateButton(addDays(today, 4)));
  expect(getFrom()).toHaveTextContent("from: 2022-09-16");
  expect(getTo()).toHaveTextContent("to:");
  await user.click(dateButton(today));
  expect(getFrom()).toHaveTextContent("from: 2022-09-12");
  expect(getTo()).toHaveTextContent("to: 2022-09-16");
});

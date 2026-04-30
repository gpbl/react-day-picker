import { addDays } from "date-fns";
import React from "react";
import { dateButton } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { RangeResetSelection } from "./RangeResetSelection";

const today = new Date(2022, 8, 12);

setTestTime(today);
beforeEach(() => render(<RangeResetSelection />));

const getFrom = () => screen.getByTestId("from");
const getTo = () => screen.getByTestId("to");

describe("when selecting the same day range", () => {
  beforeEach(async () => {
    await user.click(dateButton(today));
  });

  test("sets the from date", () => {
    expect(getFrom()).toHaveTextContent("2022-09-12");
  });

  test("leaves the to date empty", () => {
    expect(getTo()).toHaveTextContent("");
  });

  describe("when clicking the day again", () => {
    beforeEach(async () => {
      await user.click(dateButton(today));
    });

    test("keeps the from date", () => {
      expect(getFrom()).toHaveTextContent("2022-09-12");
    });

    test("sets the to date", () => {
      expect(getTo()).toHaveTextContent("—2022-09-12");
    });
  });
});

describe("when starting a range from an existing range", () => {
  beforeEach(async () => {
    await user.click(dateButton(today));
    await user.click(dateButton(addDays(today, 1)));
  });

  test("keeps the first selected day as the from date", () => {
    expect(getFrom()).toHaveTextContent("2022-09-12");
  });

  test("sets the second selected day as the to date", () => {
    expect(getTo()).toHaveTextContent("—2022-09-13");
  });

  describe("when clicking a later day", () => {
    beforeEach(async () => {
      await user.click(dateButton(addDays(today, 4)));
    });

    test("starts a new range from the later day", () => {
      expect(getFrom()).toHaveTextContent("2022-09-16");
    });

    test("clears the to date", () => {
      expect(getTo()).toHaveTextContent("");
    });

    describe("when clicking the original first day", () => {
      beforeEach(async () => {
        await user.click(dateButton(today));
      });

      test("sets the original first day as the from date", () => {
        expect(getFrom()).toHaveTextContent("2022-09-12");
      });

      test("sets the later day as the to date", () => {
        expect(getTo()).toHaveTextContent("—2022-09-16");
      });
    });
  });
});

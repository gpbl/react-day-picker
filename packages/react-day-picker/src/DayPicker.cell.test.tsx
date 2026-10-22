import React from "react";
import { act, fireEvent, render, screen, within } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { DayButton } from "./components/DayButton.js";
import { DayContent } from "./components/DayContent.js";
import { DayPicker } from "./DayPicker.js";
import { enUS } from "./locale/en-US.js";

const today = new Date(2026, 8, 30);
setTestTime(today);
const cell = (day: number) =>
  screen.getByRole("gridcell", { name: String(day) });
const help =
  "Use arrow keys to navigate dates. Press Enter or Space to select.";

// Component tests: exercise the rendered grid and real focus/selection hooks.
describe("default button interaction", () => {
  const CustomDayButton = jest.fn(DayButton);
  beforeEach(() => {
    render(
      <DayPicker
        mode="single"
        autoFocus
        components={{ DayButton: CustomDayButton }}
      />,
    );
  });
  test("keeps focus on the button", () => {
    expect(
      screen.getByRole("button", {
        name: "Today, Wednesday, September 30th, 2026",
      }),
    ).toHaveFocus();
  });
  test("keeps weekday headers hidden", () => {
    expect(screen.queryAllByRole("columnheader")).toHaveLength(0);
  });
  test("keeps custom DayButton implementations", () => {
    expect(CustomDayButton).toHaveBeenCalled();
  });
});

describe("cell interaction", () => {
  beforeEach(() => {
    render(
      <DayPicker
        mode="single"
        dayInteraction="cell"
        autoFocus
        selected={today}
      />,
    );
  });
  test("focuses the cell", () => {
    expect(cell(30)).toHaveFocus();
  });
  test("has no nested date buttons", () => {
    expect(
      within(screen.getByRole("grid")).queryAllByRole("button"),
    ).toHaveLength(0);
  });
  test("has one date in the tab order", () => {
    expect(
      screen
        .getAllByRole("gridcell")
        .filter((element) => element.tabIndex === 0),
    ).toHaveLength(1);
  });
  test("exposes weekday headers", () => {
    expect(screen.getAllByRole("columnheader")).toHaveLength(7);
  });
  test("exposes today through ARIA", () => {
    expect(cell(30)).toHaveAttribute("aria-current", "date");
  });
  test("exposes selection through ARIA without adding it to the name", () => {
    expect(cell(30)).toHaveAttribute("aria-selected", "true");
  });
  test("names the grid after the month caption", () => {
    expect(screen.getByRole("grid")).toHaveAccessibleName("September 2026");
  });
  describe("after an arrow key", () => {
    beforeEach(async () => {
      await user.keyboard("{ArrowLeft}");
    });
    test("focuses the previous date", () => {
      expect(cell(29)).toHaveFocus();
    });
  });
  describe("after crossing a month boundary", () => {
    beforeEach(async () => {
      await user.keyboard("{ArrowRight}");
    });
    test("focuses the first date of the next month", () => {
      expect(cell(1)).toHaveFocus();
    });
    test("updates the grid name", () => {
      expect(screen.getByRole("grid")).toHaveAccessibleName("October 2026");
    });
  });
});

describe.each([
  "single",
  "multiple",
  "range",
] as const)("%s selection in cell mode", (mode) => {
  describe.each(["click", "Enter", " "])("using %s", (activation) => {
    const onSelect = jest.fn();
    beforeEach(() => {
      render(
        <DayPicker
          mode={mode}
          required={false}
          dayInteraction="cell"
          onSelect={onSelect}
        />,
      );
      if (activation === "click") fireEvent.click(cell(21));
      else fireEvent.keyDown(cell(21), { key: activation, shiftKey: true });
    });
    test("selects the date once", () => {
      expect(onSelect).toHaveBeenCalledTimes(1);
    });
    test("reports the activated date", () => {
      expect(onSelect.mock.calls[0][1]).toEqual(new Date(2026, 8, 21));
    });
    if (activation !== "click") {
      test("preserves modifier keys in the selection event", () => {
        expect(onSelect.mock.calls[0][3].shiftKey).toBe(true);
      });
    }
  });
});

describe("repeated activation keys", () => {
  const onSelect = jest.fn();
  beforeEach(() => {
    render(
      <DayPicker mode="single" dayInteraction="cell" onSelect={onSelect} />,
    );
    fireEvent.keyDown(cell(21), { key: "Enter", repeat: true });
  });
  test("does not select repeatedly", () => {
    expect(onSelect).not.toHaveBeenCalled();
  });
});

describe("disabled dates", () => {
  const onSelect = jest.fn();
  beforeEach(() => {
    render(
      <DayPicker
        mode="single"
        dayInteraction="cell"
        disabled={new Date(2026, 8, 29)}
        onSelect={onSelect}
        autoFocus
      />,
    );
  });
  test("exposes disabled state", () => {
    expect(cell(29)).toHaveAttribute("aria-disabled", "true");
  });
  describe("during navigation", () => {
    beforeEach(async () => {
      await user.keyboard("{ArrowLeft}");
    });
    test("skips the disabled date", () => {
      expect(cell(28)).toHaveFocus();
    });
  });
  describe("on direct activation", () => {
    beforeEach(() => {
      fireEvent.click(cell(29));
      fireEvent.keyDown(cell(29), { key: "Enter" });
      fireEvent.keyDown(cell(29), { key: " " });
    });
    test("does not select the disabled date", () => {
      expect(onSelect).not.toHaveBeenCalled();
    });
  });
});

describe("hidden dates", () => {
  beforeEach(() => {
    render(<DayPicker mode="single" dayInteraction="cell" hidden={today} />);
  });
  test("does not expose the hidden date content", () => {
    expect(screen.queryByRole("gridcell", { name: "30" })).toBeNull();
  });
});

describe("without selection or click handling", () => {
  beforeEach(() => {
    render(<DayPicker dayInteraction="cell" />);
  });
  test("keeps dates outside the tab order", () => {
    expect(
      screen
        .getAllByRole("gridcell")
        .every((element) => !element.hasAttribute("tabindex")),
    ).toBe(true);
  });
});

describe.each([
  "labelGridcell",
  "labelDayButton",
] as const)("custom %s", (label) => {
  beforeEach(() => {
    render(
      <DayPicker
        mode="single"
        dayInteraction="cell"
        labels={{ [label]: (date: Date) => `Custom date ${date.getDate()}` }}
      />,
    );
  });
  test("overrides the short cell name", () => {
    expect(
      screen.getByRole("gridcell", { name: "Custom date 30" }),
    ).toBeInTheDocument();
  });
});

describe("hidden weekday headers", () => {
  beforeEach(() => {
    render(<DayPicker mode="single" dayInteraction="cell" hideWeekdays />);
  });
  test("includes the weekday in the date name", () => {
    expect(
      screen.getByRole("gridcell", { name: "Wednesday, September 30th, 2026" }),
    ).toBeInTheDocument();
  });
});

describe.each([
  "label",
  "dropdown",
] as const)("%s captions", (captionLayout) => {
  beforeEach(() => {
    render(
      <>
        <DayPicker
          mode="single"
          dayInteraction="cell"
          captionLayout={captionLayout}
          numberOfMonths={2}
        />
        <DayPicker
          mode="single"
          dayInteraction="cell"
          captionLayout={captionLayout}
        />
      </>,
    );
  });
  test("assigns unique caption references across calendars and months", () => {
    expect(
      new Set(
        screen
          .getAllByRole("grid")
          .map((grid) => grid.getAttribute("aria-labelledby")),
      ).size,
    ).toBe(3);
  });
  test("associates the second month with its caption", () => {
    expect(
      screen.getByRole("grid", { name: "October 2026" }),
    ).toHaveAccessibleName("October 2026");
  });
});

describe("custom grid label", () => {
  beforeEach(() => {
    render(
      <DayPicker
        mode="single"
        dayInteraction="cell"
        labels={{ labelGrid: () => "Booking dates" }}
      />,
    );
  });
  test("takes precedence over caption association", () => {
    expect(screen.getByRole("grid")).toHaveAccessibleName("Booking dates");
  });
});

describe("custom cell content", () => {
  const CustomDayContent = jest.fn(DayContent);
  const CustomDayButton = jest.fn(DayButton);
  beforeEach(() => {
    render(
      <DayPicker
        mode="single"
        dayInteraction="cell"
        components={{
          DayContent: CustomDayContent,
          DayButton: CustomDayButton,
        }}
      />,
    );
  });
  test("renders DayContent", () => {
    expect(CustomDayContent).toHaveBeenCalled();
  });
  test("does not render DayButton", () => {
    expect(CustomDayButton).not.toHaveBeenCalled();
  });
  test("retains day_button styling on the content", () => {
    expect(cell(30).firstElementChild).toHaveClass("rdp-day_button");
  });
});

describe("keyboard help", () => {
  describe("when entering the grid", () => {
    beforeEach(() => {
      render(<DayPicker mode="single" dayInteraction="cell" autoFocus />);
    });
    test("waits before announcing help", () => {
      expect(screen.queryByText(help)).toBeNull();
    });
    describe("after the delay", () => {
      beforeEach(() => {
        act(() => jest.advanceTimersByTime(200));
      });
      test("announces the instructions", () => {
        expect(screen.getByText(help)).toHaveAttribute("aria-live", "polite");
      });
      describe("when navigating within the grid", () => {
        beforeEach(async () => {
          await user.keyboard("{ArrowLeft}");
        });
        test("keeps the message unchanged", () => {
          expect(screen.getByText(help)).toBeInTheDocument();
        });
      });
    });
    describe("when leaving before the delay", () => {
      beforeEach(() => {
        act(() =>
          screen.getByRole("button", { name: /Go to the Next Month/i }).focus(),
        );
        act(() => jest.advanceTimersByTime(200));
      });
      test("cancels the announcement", () => {
        expect(screen.queryByText(help)).toBeNull();
      });
      describe("when reentering", () => {
        beforeEach(() => {
          act(() => cell(30).focus());
          act(() => jest.advanceTimersByTime(200));
        });
        test("announces help again", () => {
          expect(screen.getByText(help)).toBeInTheDocument();
        });
      });
    });
  });

  describe("with localized help", () => {
    beforeEach(() => {
      render(
        <DayPicker
          mode="single"
          dayInteraction="cell"
          autoFocus
          locale={{
            ...enUS,
            labels: { labelKeyboardHelp: "Localized keyboard help" },
          }}
        />,
      );
      act(() => jest.advanceTimersByTime(200));
    });
    test("uses the locale label", () => {
      expect(screen.getByText("Localized keyboard help")).toBeInTheDocument();
    });
  });
  describe("with custom help", () => {
    beforeEach(() => {
      render(
        <DayPicker
          mode="single"
          dayInteraction="cell"
          autoFocus
          locale={{ ...enUS, labels: { labelKeyboardHelp: "Locale help" } }}
          labels={{ labelKeyboardHelp: () => "Custom help" }}
        />,
      );
      act(() => jest.advanceTimersByTime(200));
    });
    test("prefers the explicit label", () => {
      expect(screen.getByText("Custom help")).toBeInTheDocument();
    });
  });
  describe("with help disabled", () => {
    beforeEach(() => {
      render(
        <DayPicker
          mode="single"
          dayInteraction="cell"
          autoFocus
          labels={{ labelKeyboardHelp: () => "" }}
        />,
      );
      act(() => jest.advanceTimersByTime(200));
    });
    test("does not announce default instructions", () => {
      expect(screen.queryByText(help)).toBeNull();
    });
  });
});

describe.each([
  "single",
  "multiple",
  "range",
] as const)("uncontrolled %s selection", (mode) => {
  beforeEach(async () => {
    render(
      <DayPicker
        mode={mode}
        required={false}
        dayInteraction="cell"
        autoFocus
      />,
    );
    await user.keyboard("{Enter}");
  });
  test("marks the date selected", () => {
    expect(cell(30)).toHaveAttribute("aria-selected", "true");
  });
});

describe("a controlled month that does not accept navigation", () => {
  beforeEach(async () => {
    render(
      <DayPicker mode="single" dayInteraction="cell" month={today} autoFocus />,
    );
    await user.keyboard("{ArrowRight}");
  });
  test("keeps focus in the displayed month", () => {
    expect(cell(30)).toHaveFocus();
  });
});

describe("visible outside dates", () => {
  beforeEach(() => {
    render(<DayPicker mode="single" dayInteraction="cell" showOutsideDays />);
  });
  test("names the outside date with its actual month", () => {
    expect(
      screen.getByRole("gridcell", { name: "Monday, August 31st, 2026" }),
    ).toBeInTheDocument();
  });
});

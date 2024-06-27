import React from "react";

import { grid, nav } from "@/test/elements.js";
import { render } from "@/test/render.js";

import { Calendar } from "./Calendar.js";

it("should render the navigation and month grids", () => {
  render(<Calendar />);

  expect(nav()).toBeInTheDocument();
  expect(grid()).toBeInTheDocument();
});

it("should apply classnames and style according to props", () => {
  const { container } = render(<Calendar />, {
    className: "custom-class",
    numberOfMonths: 2,
    showWeekNumber: true,
    style: { color: "red" }
  });

  expect(container.firstChild).toHaveClass("rdp-calendar");
  expect(container.firstChild).toHaveClass("rdp-has_multiple_months");
  expect(container.firstChild).toHaveClass("rdp-has_week_numbers");
  expect(container.firstChild).toHaveClass("custom-class");
  expect(container.firstChild).toHaveStyle({ color: "red" });
});

it("should use custom components", () => {
  const { container } = render(<Calendar />, {
    footer: "foo",
    components: {
      Nav: () => <div>Custom Navigation</div>,
      Month: () => <div>Custom Month</div>,
      Months: (props) => (
        <div {...props}>
          Custom Months<div>{props.children}</div>
        </div>
      ),
      Footer: () => <div>Custom Footer</div>
    }
  });

  expect(container).toHaveTextContent("Custom Navigation");
  expect(container).toHaveTextContent("Custom Months");
  expect(container).toHaveTextContent("Custom Month");
  expect(container).toHaveTextContent("Custom Footer");
});

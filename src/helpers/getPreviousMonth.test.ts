import { getPreviousMonth } from "./getPreviousMonth";

it("should return undefined if navigation is disabled", () => {
  const firstDisplayedMonth = new Date(2022, 0, 1); // January 2022
  const props = {
    disableNavigation: true,
    pagedNavigation: false,
    numberOfMonths: 1,
    startMonth: new Date(2022, 0, 1)
  };

  const result = getPreviousMonth(firstDisplayedMonth, props);

  expect(result).toBeUndefined();
});

it("should return the previous month if startMonth is not provided", () => {
  const firstDisplayedMonth = new Date(2022, 1, 1); // February 2022
  const props = {
    disableNavigation: false,
    pagedNavigation: false,
    numberOfMonths: 1,
    startMonth: undefined
  };

  const result = getPreviousMonth(firstDisplayedMonth, props);

  expect(result).toEqual(new Date(2022, 0, 1)); // January 2022
});

it("should return undefined if the previous month is before the startMonth", () => {
  const firstDisplayedMonth = new Date(2022, 0, 1); // January 2022
  const props = {
    disableNavigation: false,
    pagedNavigation: false,
    numberOfMonths: 1,
    startMonth: new Date(2022, 0, 1)
  };

  const result = getPreviousMonth(firstDisplayedMonth, props);

  expect(result).toBeUndefined();
});

it("should return the correct previous month when pagedNavigation is true", () => {
  const firstDisplayedMonth = new Date(2022, 2, 1); // March 2022
  const props = {
    disableNavigation: false,
    pagedNavigation: true,
    numberOfMonths: 2,
    startMonth: new Date(2022, 0, 1)
  };

  const result = getPreviousMonth(firstDisplayedMonth, props);

  expect(result).toEqual(new Date(2022, 0, 1)); // January 2022
});

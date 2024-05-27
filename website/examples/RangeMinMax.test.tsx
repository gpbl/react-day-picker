import { mockDate, renderApp } from "../test-v8";

import { RangeMinMax } from "./RangeMinMax";

const today = new Date(2022, 8, 25);
mockDate(today);

beforeEach(() => renderApp(<RangeMinMax />).container);

// eslint-disable-next-line jest/no-disabled-tests
test.skip("when the first day is clicked", () => {
  // TODO: Implement test
});

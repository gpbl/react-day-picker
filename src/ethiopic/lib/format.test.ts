import { toGreg } from "../utils/ethiopicDateUtils.js";

import { format } from "./format";

describe("format", () => {
  test("Should format date in Ethiopian calendar", () => {
    // Ethiopian date: 06/07/2016 (dd/mm/yyyy)
    const date = toGreg({ Year: 2016, Month: 7, Day: 6 });
    expect(format(date, "yyyy-MM-dd")).toBe("2016-07-06");
    expect(format(date, "d")).toBe("6");
    expect(format(date, "yyyy-MM")).toBe("2016-07");
  });

  test("Should format Ethiopian month names correctly", () => {
    // Ethiopian date: 06 መጋቢት 2016
    const date = toGreg({ Year: 2016, Month: 7, Day: 6 });
    expect(format(date, "LLLL yyyy")).toBe("መጋቢት 2016");
    expect(format(date, "LLLL")).toBe("መጋቢት");
    expect(format(date, "PPP")).toBe(" መጋቢት 6, 2016");
  });

  test("Should format time components correctly", () => {
    // Ethiopian date: 06 መጋቢት 2016, 14:30
    const date = toGreg({ Year: 2016, Month: 7, Day: 6 });
    date.setHours(14, 30);
    expect(format(date, "hh:mm a")).toBe("2:30 PM");
  });

  test("Should format full date with Ethiopian day names", () => {
    // Ethiopian date: ዓርብ, 06 መጋቢት 2016
    const date = toGreg({ Year: 2016, Month: 7, Day: 6 });
    expect(format(date, "PPPP")).toBe("ዓርብ, መጋቢት 6, 2016");
    expect(format(date, "cccc")).toBe("ዓርብ");
    expect(format(date, "cccccc")).toBe("ዓ");
  });
});

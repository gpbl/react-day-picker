import { enUSJalali, faIRJalali } from "./locale.js";

describe("Jalali locales", () => {
  test("faIRJalali exposes DayPicker labels", () => {
    expect(faIRJalali.labels).toBeDefined();
    expect(typeof faIRJalali.labels?.labelDayButton).toBe("function");
    expect(typeof faIRJalali.labels?.labelWeekday).toBe("function");
  });

  test("enUSJalali exposes DayPicker labels", () => {
    expect(enUSJalali.labels).toBeDefined();
    expect(typeof enUSJalali.labels?.labelDayButton).toBe("function");
    expect(typeof enUSJalali.labels?.labelWeekday).toBe("function");
  });
});

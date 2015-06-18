import { expect } from "chai";
import LocaleUtils from "../src/LocaleUtils";

describe("LocaleUtils", () => {

  if (!global.Intl) {
    global.Intl = require("intl");
  }

  describe("formatMonthTitle", () => {
    it("should return month and day as string", () => {
      const date = new Date("2015-12-20");
      const formattedDate = LocaleUtils.formatMonthTitle(date);
      expect(formattedDate).to.equal("December 2015");
      const formattedDate_IT = LocaleUtils.formatMonthTitle(date, "it");
      expect(formattedDate_IT).to.equal("dicembre 2015");
    });
  });

  describe("formatWeekdayShort", () => {
    it("should return the short day name as string", () => {
      expect(LocaleUtils.formatWeekdayShort(0)).to.equal("Su");
      expect(LocaleUtils.formatWeekdayShort(0, "it")).to.equal("L");
    });
  });

  describe("formatWeekdayLong", () => {
    it("should return the long day name as string", () => {
      expect(LocaleUtils.formatWeekdayLong(0)).to.equal("Sunday");
      expect(LocaleUtils.formatWeekdayLong(0, "it")).to.equal("Lunedì");
    });
  });

  describe("getFirstDayOfWeek", () => {
    it("should return monday for it locale", () => {
      expect(LocaleUtils.getFirstDayOfWeek("it")).to.equal(1);
    });
    it("should return sunday for en locale", () => {
      expect(LocaleUtils.getFirstDayOfWeek()).to.equal(0);
    });
  });

});

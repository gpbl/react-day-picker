import { expect } from "chai";
import * as MomentLocaleUtils from "../../src/addons/MomentLocaleUtils";

describe("MomentLocaleUtils", () => {

  describe("formatMonthTitle", () => {
    it("should return month and day as string", () => {
      const date = new Date("2015-12-20");
      const formattedDate = MomentLocaleUtils.formatMonthTitle(date);
      expect(formattedDate).to.equal("December 2015");
      const formattedDate_IT = MomentLocaleUtils.formatMonthTitle(date, "it");
      expect(formattedDate_IT).to.equal("dicembre 2015");
    });
  });

  describe("formatWeekdayShort", () => {
    it("should return the short day name as string", () => {
      expect(MomentLocaleUtils.formatWeekdayShort(0)).to.equal("Su");
      expect(MomentLocaleUtils.formatWeekdayShort(0, "it")).to.equal("Lu");
    });
  });

  describe("formatWeekdayLong", () => {
    it("should return the long day name as string", () => {
      expect(MomentLocaleUtils.formatWeekdayLong(0)).to.equal("Sunday");
      expect(MomentLocaleUtils.formatWeekdayLong(0, "it")).to.equal("Lunedì");
    });
  });

  describe("getFirstDayOfWeek", () => {
    it("should return monday for it locale", () => {
      expect(MomentLocaleUtils.getFirstDayOfWeek("it")).to.equal(1);
    });
    it("should return sunday for en locale", () => {
      expect(MomentLocaleUtils.getFirstDayOfWeek()).to.equal(0);
    });
  });

  describe("getMonths", () => {
    it("return twelve months for it locale", () => {
      const months = MomentLocaleUtils.getMonths("it");
      expect(months).to.have.length(12);
      expect(months[0]).to.equal("gennaio");
    });
    it("return twelve months for default locale", () => {
      expect(MomentLocaleUtils.getMonths()).to.have.length(12);
    });

  });

});

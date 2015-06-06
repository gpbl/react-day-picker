
import { expect } from "chai";
import Utils from "../src/Utils";

describe("Utils", () => {

  describe("clone", () => {
    it("should clone a date", () => {
      const date = new Date();
      const newDate = Utils.clone(date);
      expect(newDate).to.not.equal(date);
    });
  });

  describe("addMonths", () => {
    it("should add a month", () => {
      const date = new Date();
      const newDate = Utils.addMonths(date, 1);
      expect(newDate.getMonth()).to.equal(date.getMonth() + 1);
    });
    it("should remove two months", () => {
      const date = new Date();
      const newDate = Utils.addMonths(date, -2);
      expect(newDate.getMonth()).to.equal(date.getMonth() - 2);
    });
  });

  describe("startOfMonth", () => {
    it("should set a date as start of its month", () => {
      const date = new Date("1979-09-19");
      const newDate = Utils.startOfMonth(date);

      expect(newDate.getFullYear()).to.equal(1979);
      expect(newDate.getMonth()).to.equal(8);
      expect(newDate.getDate()).to.equal(1);
      expect(newDate.getHours()).to.equal(0);
      expect(newDate.getMinutes()).to.equal(0);
      expect(newDate.getSeconds()).to.equal(0);
      expect(newDate.getMilliseconds()).to.equal(0);

    });
  });

  describe("getFirstDayOfMonth", () => {
    it("should get the first day of the month", () => {
      const date1 = new Date("1979-09-19");
      expect(Utils.getFirstDayOfMonth(date1).getDate()).to.equal(1);
      const date2 = new Date("1979-09-01");
      expect(Utils.getFirstDayOfMonth(date2).getDate()).to.equal(1);
    });
  });

  describe("getDaysInMonth", () => {
    it("should get the correct number of days", () => {
      const date = new Date("2015-02-10");
      expect(Utils.getDaysInMonth(date)).to.equal(28);
      const date1 = new Date("2016-03-10");
      expect(Utils.getDaysInMonth(date1)).to.equal(31);
      const date2 = new Date("2016-04-10");
      expect(Utils.getDaysInMonth(date2)).to.equal(30);
    });
    it("should get the correct number of days in a leap month", () => {
      const date = new Date("2016-02-10");
      expect(Utils.getDaysInMonth(date)).to.equal(29);
    });
  });

  describe("getWeekArray", () => {

    it("should work with a month starting on sunday (en)", () => {
      const weeks = Utils.getWeekArray(new Date("2015-11-01"));
      expect(weeks).to.have.length(5);
      expect(weeks[0][0].getDay()).to.equal(0);
      expect(weeks[0][0].getDate()).to.equal(1);
      expect(weeks[0][0].getMonth()).to.equal(10);
      expect(weeks[0][0].getFullYear()).to.equal(2015);
    });

    it("should add days from the previous month to the first week (en)", () => {
      const weeks = Utils.getWeekArray(new Date("2015-05-10"));

      expect(weeks).to.have.length(6);

      // should go back to april
      const firstDay = weeks[0][0];
      expect(firstDay.getDay()).to.equal(0);
      expect(firstDay.getDate()).to.equal(26);
      expect(firstDay.getMonth()).to.equal(3);
      expect(firstDay.getFullYear()).to.equal(2015);
    });

    it("should add days from the next month to the last week (en)", () => {
      const weeks = Utils.getWeekArray(new Date("2015-09-19"));

      expect(weeks).to.have.length(5);
       // go to october
      const lastDay = weeks[4][6];
      expect(lastDay.getDate()).to.equal(3);
      expect(lastDay.getMonth()).to.equal(9);
      expect(lastDay.getFullYear()).to.equal(2015);
    });

    it("should add days from the next month to the last week (it)", () => {
      const weeks = Utils.getWeekArray(new Date("2015-09-19"), "it");

      expect(weeks).to.have.length(5);

      const lastDay = weeks[4][6];
      expect(lastDay.getDate()).to.equal(4);
      expect(lastDay.getMonth()).to.equal(9);
      expect(lastDay.getFullYear()).to.equal(2015);
    });
  });

  describe("getModifiersForDay", () => {
    it("should return an array of modifiers", () => {

      const modifierFunctions = {
        yes() { return true; },
        no() { return false; },
        maybe(d) { return d.getMonth() === 8; }
      };
      let modifiers = Utils.getModifiersForDay(new Date("2015-09-19"), modifierFunctions);
      expect(modifiers).to.have.length(2);
      expect(modifiers.indexOf("yes")).to.be.above(-1);
      expect(modifiers.indexOf("maybe")).to.be.above(-1);
      expect(modifiers.indexOf("no")).to.equal(-1);

      modifiers = Utils.getModifiersForDay(new Date("2015-10-19"), modifierFunctions);
      expect(modifiers).to.have.length(1);
      expect(modifiers.indexOf("yes")).to.be.above(-1);
      expect(modifiers.indexOf("maybe")).to.equal(-1);
      expect(modifiers.indexOf("no")).to.equal(-1);
    });
  });

  describe("isDayOutsideMonth", () => {
    it("should consider the day as outside of the month", () => {
      const isOutside = Utils.isDayOutsideMonth(new Date("2015-11-30"), new Date("2015-12-01"));
      expect(isOutside).to.be.true;
    });
    it("should not consider the day as outside of the month", () => {
      const isOutside = Utils.isDayOutsideMonth(new Date("2015-12-30"), new Date("2015-12-01"));
      expect(isOutside).to.be.false;
    });
  });

  describe("isSameDay", () => {
    it("should return true if two days differ only by time", () => {
      let day1 = new Date(2015, 10, 11, 5, 25);
      let day2 = new Date(2015, 10, 11, 7, 40);
      const isSameDay = Utils.isSameDay(day1, day2);
      expect(isSameDay).to.be.true;
    });
    it("should return false for different days", () => {
      let day1 = new Date(2015, 8, 12);
      let day2 = new Date(2015, 5, 11);
      const isSameDay = Utils.isSameDay(day1, day2);
      expect(isSameDay).to.be.false;
    });
  });


});

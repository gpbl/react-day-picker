import { jsdom } from "jsdom";
import chai, { expect } from "chai";

import sinon from "sinon";
import sinonChai from "sinon-chai";

import DayPicker from "../src/DayPicker";

chai.use(sinonChai);

let React;
let TestUtils;

describe("DayPicker", () => {

  beforeEach(() => {
    // See http://stackoverflow.com/questions/30039655 for using jsdom with mocha and React 0.13+
    for (let key in require.cache) {
      if (key.match(/\/node_modules\/react\//)) {
        delete require.cache[key];
      }
    }

    global.document = jsdom("<html><head><script></script></head><body></body></html>");
    global.window = document.parentWindow;
    global.navigator = {
      userAgent: "node.js"
    };

    React = require("react/addons");
    TestUtils = React.addons.TestUtils;
  });

  it("should have the default props properly set", () => {
    const dayPicker = <DayPicker />;
    const now = new Date();
    expect(dayPicker.props.initialMonth.getMonth()).to.equal(now.getMonth());
    expect(dayPicker.props.initialMonth.getYear()).to.equal(now.getYear());
    expect(dayPicker.props.numberOfMonths).to.equal(1);
    expect(dayPicker.props.locale).to.equal("en");
    expect(dayPicker.props.enableOutsideDays).to.equal(false);
  });

  it("should have a `DayPicker` class", () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<DayPicker />);

    const dayPicker = shallowRenderer.getRenderOutput();
    expect(dayPicker.props.className).to.equal("DayPicker");
  });

  it("should render the number of months as specified by `initialMonth`", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-06")} numberOfMonths={3} />
    );
    const months = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Month");
    expect(months).to.have.length(3);
  });

  it("should render a navigation bar for each month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")} numberOfMonths={4} />
    );

    const navBar = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavBar");
    expect(navBar).to.have.length(4);

  });

  it("should render the navigation buttons", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")} />
    );

    const prevButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");
    expect(prevButton).to.not.be.undefined;

    const nextButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");
    expect(nextButton).to.not.be.undefined;

  });

  it("should update its state when clicking the next button", () => {

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")} />
    );
    const nextButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--next");

    TestUtils.Simulate.click(nextButton);

    expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2016);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(0);
    expect(dayPickerEl.state.currentMonth.getDate()).to.equal(1);

  });


  it("should call `onPrevMonthClick` when clicking the previous month button", () => {
    const SyntheticEvent = require("react/lib/SyntheticEvent");
    const handlePrevMonthClick = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")} onPrevMonthClick={handlePrevMonthClick} />
    );
    const prevButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");
    TestUtils.Simulate.click(prevButton);

    expect(handlePrevMonthClick).to.have.been.calledWith(

        sinon.match((prevMonth) => {
          return prevMonth.getFullYear() === 2015 &&
            prevMonth.getMonth() === 10 &&
            prevMonth.getDate() === 1;
        }, "prevMonth"),

        sinon.match((e) => {
          return e instanceof SyntheticEvent && e.target !== null;
        }, "e")

    );

  });


  it("should call `onNextMonthClick` when clicking the next month button", () => {
    const SyntheticEvent = require("react/lib/SyntheticEvent");
    const handleNextMonthClick = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")} onNextMonthClick={handleNextMonthClick} />
    );
    const nextButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--next");
    TestUtils.Simulate.click(nextButton);

    expect(handleNextMonthClick).to.have.been.calledWith(

        sinon.match((nextMonth) => {
          return nextMonth.getFullYear() === 2016 &&
            nextMonth.getMonth() === 0 &&
            nextMonth.getDate() === 1;
        }, "nextMonth"),

        sinon.match((e) => {
          return e instanceof SyntheticEvent && e.target !== null;
        }, "e")

    );

  });

  it("should render the weekday names", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")} />
    );

    const weekdaysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Weekdays");
    expect(weekdaysEl).to.not.be.undefined;

    const weekdayEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Weekday");
    expect(weekdayEl).to.have.length(7);

  });


  it("should render the week elements for a month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-07-01")} />
    );

    const weeksEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Week");
    expect(weeksEl).to.have.length(5);
  });

  it("should render the day elements for a month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-07-01")} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(days).to.have.length(35);

  });

  it("should not print outside days as required", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-07-01")} enableOutsideDays={false} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(React.findDOMNode(days[0]).innerHTML).to.equal("");
    expect(React.findDOMNode(days[1]).innerHTML).to.equal("");
    expect(React.findDOMNode(days[2]).innerHTML).to.equal("");
  });

  it("should print outside days as required", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-07-01")} enableOutsideDays={true} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(React.findDOMNode(days[0]).innerHTML).to.equal("28");
    expect(React.findDOMNode(days[1]).innerHTML).to.equal("29");
    expect(React.findDOMNode(days[2]).innerHTML).to.equal("30");
  });

  it("should add an `outside` modifier to outside days", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-07-01")} enableOutsideDays={true} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(React.findDOMNode(days[0]).innerHTML).to.equal("28");
  });

  it("should add a `today` modifier to the today's element", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker />
    );
    const today = new Date();
    const todayEl = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-Day--today");
    expect(React.findDOMNode(todayEl).innerHTML).to.equal(`${today.getDate()}`);
  });

  it("should properly add custom modifiers", () => {
    const modifiers = {
      firstDayOfMonth(day) {
        return day.getDate() === 1;
      },
      all() {
        return true;
      },
      none() {
        return false;
      }
    };
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-07-01")}
        modifiers={modifiers}
        enableOutsideDays={true} />
    );
    const firstDaysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day--firstDayOfMonth");
    expect(React.findDOMNode(firstDaysEl[0]).innerHTML).to.equal("1");
    expect(React.findDOMNode(firstDaysEl[1]).innerHTML).to.equal("1");

    const allEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day--all");
    expect(allEl).to.have.length(35);

    const noneEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day--none");
    expect(noneEl).to.have.length(0);

  });

  it("should call the mouse event handlers for a day element", () => {

    React.initializeTouchEvents(true);
    require("react-tap-event-plugin")();

    function isFirstDay(d) {
      return d.getFullYear() === 2015 &&
        d.getMonth() === 11 &&
        d.getDate() === 1;
    }

    const modifiers = {
      firstDay: isFirstDay
    };

    const SyntheticEvent = require("react/lib/SyntheticEvent");
    const handleClick = sinon.spy();
    const handleMouseEnter = sinon.spy();
    const handleMouseLeave = sinon.spy();
    const handleTouchTap = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")}
        modifiers={modifiers}
        onDayClick={handleClick}
        onDayMouseEnter={handleMouseEnter}
        onDayMouseLeave={handleMouseLeave}
        onDayTouchTap={handleTouchTap} />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[2];

    const handlerCallback = [
        sinon.match(isFirstDay, "d"),
        sinon.match((mods) => {
          return mods instanceof Array && mods[0] === "firstDay";
        }, "modifiers"),
        sinon.match((e) => {
          return e instanceof SyntheticEvent && e.target !== null;
        }, "e")
    ];

    TestUtils.Simulate.click(dayEl);
    expect(handleClick).to.have.been.calledWith(...handlerCallback);

    // See https://github.com/facebook/react/issues/1297 for testing enter/leave
    // events
    TestUtils.SimulateNative.mouseOver(dayEl);
    expect(handleMouseEnter).to.have.been.calledWith(...handlerCallback);

    TestUtils.SimulateNative.mouseOut(dayEl);
    expect(handleMouseLeave).to.have.been.calledWith(...handlerCallback);

    TestUtils.Simulate.touchTap(dayEl);
    expect(handleTouchTap).to.have.been.calledWith(...handlerCallback);

  });

  it("should *not* call mouse events on outside days", () => {

    React.initializeTouchEvents(true);
    require("react-tap-event-plugin")();

    const handleClick = sinon.spy();
    const handleMouseEnter = sinon.spy();
    const handleMouseLeave = sinon.spy();
    const handleTouchTap = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date("2015-12-05")}
        enableOutsideDays={false}
        onDayClick={handleClick}
        onDayMouseEnter={handleMouseEnter}
        onDayMouseLeave={handleMouseLeave}
        onDayTouchTap={handleTouchTap} />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[0];

    TestUtils.Simulate.click(dayEl);
    expect(handleClick).to.not.have.been.called;

    TestUtils.SimulateNative.mouseOver(dayEl);
    expect(handleMouseEnter).to.not.have.been.called;

    TestUtils.SimulateNative.mouseOut(dayEl);
    expect(handleMouseLeave).to.not.have.been.called;

    TestUtils.Simulate.touchTap(dayEl);
    expect(handleTouchTap).to.not.have.been.called;

  });

});

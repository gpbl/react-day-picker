
import testDom from "testdom";
import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
require("react-tap-event-plugin")();

testDom("<html><body></body></html>");
const React = require("react");
const ReactDOM = require("react-dom");
const ExecutionEnvironment = require("exenv");
ExecutionEnvironment.canUseDOM = true;

const TestUtils = require("react-addons-test-utils");

const DayPicker = require("../src/DayPicker").default;

const keys = {
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
  SPACE: 32
};

describe("DayPicker", () => {

  it("has the default props properly set", () => {
    const dayPicker = <DayPicker />;
    const now = new Date();
    expect(dayPicker.props.initialMonth.getMonth()).to.equal(now.getMonth());
    expect(dayPicker.props.initialMonth.getYear()).to.equal(now.getYear());
    expect(dayPicker.props.numberOfMonths).to.equal(1);
    expect(dayPicker.props.locale).to.equal("en");
    expect(dayPicker.props.enableOutsideDays).to.equal(false);
    expect(dayPicker.props.canChangeMonth).to.equal(true);
    expect(dayPicker.props.tabIndex).to.equal(0);
    expect(dayPicker.props.style).to.be.undefined;
    expect(dayPicker.props.className).to.be.undefined;
  });

  it("has a DayPicker class (with locale)", () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<DayPicker />);

    const dayPicker = shallowRenderer.getRenderOutput();
    expect(dayPicker.props.className).to.contain("DayPicker");
    expect(dayPicker.props.className).to.contain("DayPicker--en");
    expect(dayPicker.props.className).to.contain("DayPicker--interactionDisabled");
  });

  it("has a role attribute", () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<DayPicker />);

    const dayPicker = shallowRenderer.getRenderOutput();
    expect(dayPicker.props.role).to.equal("widget");
  });

  it("has a tabIndex attribute", () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<DayPicker tabIndex={10} />);

    const dayPicker = shallowRenderer.getRenderOutput();
    expect(dayPicker.props.tabIndex).to.equal(10);
  });

  it("should spread the rest of the props to the container", () => {
    const focus = sinon.spy();
    const blur = sinon.spy();
    const dayPicker = TestUtils.renderIntoDocument(<DayPicker
      style={{ color: "red" }}
      onFocus={focus}
      onBlur={blur} />);
    const node = ReactDOM.findDOMNode(dayPicker);

    TestUtils.Simulate.focus(node);
    expect(focus.calledOnce).to.be.true;

    TestUtils.Simulate.blur(node);
    expect(blur.calledOnce).to.be.true;

    expect(node.style.color).to.equal("red");
  });

  it("does not contain a interactionEnabled modifier", () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<DayPicker interactionEnabled={false} />);

    const dayPicker = shallowRenderer.getRenderOutput();
    expect(dayPicker.props.className).to.not.contain("DayPicker--interactionEnabled");
  });

  it("uses the `className` prop", () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<DayPicker className="custom-class" />);

    const dayPicker = shallowRenderer.getRenderOutput();
    expect(dayPicker.props.className).to.contain("custom-class");
    expect(dayPicker.props.className).to.contain("DayPicker");
  });

  // RENDERING

  it("renders the number of months as specified by initialMonth", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 6)} numberOfMonths={3} />
    );
    const months = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Month");
    expect(months).to.have.length(3);
  });

  it("renders a caption for each month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} numberOfMonths={4} />
    );

    const captionEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Caption");
    expect(captionEl).to.have.length(4);
    expect(ReactDOM.findDOMNode(captionEl[0]).innerHTML).to.equal("December 2015");
    expect(ReactDOM.findDOMNode(captionEl[1]).innerHTML).to.equal("January 2016");
  });

  it("renders a custom caption", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker captionElement={ <div className="greeting">Ciao</div> } />
    );
    const captionEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "greeting");
    const oldCaptionEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Caption");
    expect(captionEl).to.have.length(1);
    expect(oldCaptionEl).to.have.length(0);
  });

  it("renders the navigation buttons", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} tabIndex={5} />
    );

    const prevButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");
    expect(prevButton).to.not.be.undefined;

    const nextButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--next");
    expect(nextButton).to.not.be.undefined;

  });

  it("does not render the navigation buttons when canChangeMonth is false", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker canChangeMonth={false} initialMonth={new Date(2015, 11, 5)} />
    );

    const prevButton = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");
    expect(prevButton).to.have.length(0);

    const nextButton = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");
    expect(nextButton).to.have.length(0);

    expect(dayPickerEl.props.tabIndex).to.equal(0);
    expect(dayPickerEl.props.onKeyDown).to.be.undefined;

  });

  it("renders the weekday names", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} />
    );

    const weekdaysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Weekdays");
    expect(weekdaysEl).to.not.be.undefined;

    const weekdayEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Weekday");
    expect(weekdayEl).to.have.length(7);

  });

  it("renders the weeks elements in a month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 6)} />
    );

    const weeksEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Week");
    expect(weeksEl).to.have.length(5);
  });

  it("renders the days element in a month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 6)} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(days).to.have.length(35);

  });

  it("does not render outside days", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 6)} enableOutsideDays={false} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(ReactDOM.findDOMNode(days[0]).innerHTML).to.equal("");
    expect(ReactDOM.findDOMNode(days[1]).innerHTML).to.equal("");
    expect(ReactDOM.findDOMNode(days[2]).innerHTML).to.equal("");
  });

  it("renders outside days when required", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 6)} enableOutsideDays={true} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    expect(ReactDOM.findDOMNode(days[0]).innerHTML).to.equal("28");
    expect(ReactDOM.findDOMNode(days[1]).innerHTML).to.equal("29");
    expect(ReactDOM.findDOMNode(days[2]).innerHTML).to.equal("30");
  });

  it("does not render the prev navigation button when the current month is the first allowed month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 9)} fromMonth={new Date(2015, 9)} />
    );
    const prev = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavButton--prev");
    expect(prev).to.have.length(0);
  })

  it("does not render the prev navigation button when the first displayed month is the first allowed month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 5)} fromMonth={new Date(2015, 5)} numberOfMonths={3} />
    );
    const prev = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavButton--prev");
    expect(prev).to.have.length(0);
  })

  it("does not render the next navigation button when the current month is the last allowed month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 9)} toMonth={new Date(2015, 9)} />
    );
    const next = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavButton--next");
    expect(next).to.have.length(0);
  })

  it("does not render the next navigation button when the last displayed month is the last allowed month", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 7)} toMonth={new Date(2015, 9)} numberOfMonths={3} />
    );
    const next = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-NavButton--next");
    expect(next).to.have.length(0);
  })

  // MODIFIERS

  it("adds an `outside` modifier to outside days", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 6)} enableOutsideDays={true} />
    );

    const days = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day DayPicker-Day--outside");
    expect(ReactDOM.findDOMNode(days[0]).innerHTML).to.equal("28");
  });

  it("adds a `today` modifier to today date", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker />
    );
    const today = new Date();
    const todayEl = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-Day--today");
    expect(ReactDOM.findDOMNode(todayEl).innerHTML).to.equal(`${today.getDate()}`);
  });

  it("adds custom modifiers", () => {
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
      <DayPicker initialMonth={new Date(2015, 6)}
        modifiers={modifiers}
        enableOutsideDays={true} />
    );
    const firstDaysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day--firstDayOfMonth");
    expect(ReactDOM.findDOMNode(firstDaysEl[0]).innerHTML).to.equal("1");
    expect(ReactDOM.findDOMNode(firstDaysEl[1]).innerHTML).to.equal("1");

    const allEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day--all");
    expect(allEl).to.have.length(35);

    const noneEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day--none");
    expect(noneEl).to.have.length(0);

  });

  describe("showNextMonth", () => {
    it("shows the next month", () => {
      const callback = sinon.spy();
      const handleMonthChange = sinon.spy();
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker
          initialMonth={new Date(2015, 7, 1)}
          enableOutsideDays={false}
          onMonthChange={handleMonthChange}
          numberOfMonths={2}
        />
      );
      dayPickerEl.showNextMonth(callback);

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(8);
      expect(dayPickerEl.state.currentMonth.getDate()).to.equal(1);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
      expect(callback).to.have.been.called;
      expect(handleMonthChange).to.have.been.called;
    });

    it("does not show a month after `toMonth`", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 10)} toMonth={new Date(2015, 10)} />
      );
      dayPickerEl.showNextMonth();
      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(10);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    });

    it("is called when right key is pressed", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 5)}/>
      );
      const showNextMonth = sinon.spy(dayPickerEl, "showNextMonth");
      TestUtils.Simulate.keyDown(ReactDOM.findDOMNode(dayPickerEl), {
        keyCode: keys.RIGHT
      });
      expect(showNextMonth).to.be.called;
    });

    it("is not called if another key is pressed", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 5)}/>
      );
      const showNextMonth = sinon.spy(dayPickerEl, "showNextMonth");
      TestUtils.Simulate.keyDown(ReactDOM.findDOMNode(dayPickerEl), {
        keyCode: keys.ENTER
      });
      expect(showNextMonth).to.not.be.called;
    });
  });

  describe("showPreviousMonth", () => {
    it("shows the previous month", () => {
      const callback = sinon.spy();
      const handleMonthChange = sinon.spy();
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker
          initialMonth={new Date(2015, 7, 1)}
          enableOutsideDays={false}
          onMonthChange={handleMonthChange}
          numberOfMonths={2}
        />
      );
      dayPickerEl.showPreviousMonth(callback);

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(6);
      expect(dayPickerEl.state.currentMonth.getDate()).to.equal(1);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
      expect(callback).to.have.been.called;
      expect(handleMonthChange).to.have.been.called;
    });

    it("does not show a month before `fromMonth`", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 10)} fromMonth={new Date(2015, 10)} />
      );
      dayPickerEl.showPreviousMonth();
      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(10);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    });

    it("is called when left key is pressed over the root node", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 5)} />
      );
      const showPreviousMonth = sinon.spy(dayPickerEl, "showPreviousMonth");
      TestUtils.Simulate.keyDown(ReactDOM.findDOMNode(dayPickerEl), {
        keyCode: keys.LEFT
      });
      expect(showPreviousMonth).to.be.called;
    });

    it("is not called if another key is pressed", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 5)} />
      );
      const showPreviousMonth = sinon.spy(dayPickerEl, "showPreviousMonth");
      TestUtils.Simulate.keyDown(ReactDOM.findDOMNode(dayPickerEl), {
        keyCode: keys.ENTER
      });
      expect(showPreviousMonth).to.not.be.called;
    });
  });

  describe("showMonth", () => {
    it("shows the specified month", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 6)} enableOutsideDays={false} />
      );
      dayPickerEl.showMonth(new Date(2016, 8));

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(8);
      expect(dayPickerEl.state.currentMonth.getDate()).to.equal(1);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2016);
    });

    it("does not show the month if after `toMonth`", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 6)} toMonth={new Date(2015, 6)} />
      );
      dayPickerEl.showMonth(new Date(2016, 8));

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(6);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    });

    it("does not show the month if before `fromMonth`", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 6)} fromMonth={new Date(2015, 6)} />
      );
      dayPickerEl.showMonth(new Date(2013, 1));

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(6);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    });

    it("can show the first allowed month, `fromMonth`", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 6)} fromMonth={new Date(2015, 4)} />
      );
      dayPickerEl.showMonth(new Date(2015, 4));

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(4);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    });

    it("can show the last allowed month, `toMonth`", () => {
      const dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 6)} toMonth={new Date(2015, 8)} />
      );
      dayPickerEl.showMonth(new Date(2015, 8));

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(8);
      expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    });
  });

  it("displays a modified state upon changing initialMonth prop", (done) => {
    // http://jaketrent.com/post/test-react-componentwillreceiveprops/
    const TestParent = React.createFactory(React.createClass({
      getInitialState() {
        return {
          month: 11
        };
      },
      render() {
        const { month } = this.state;
        return (
          <DayPicker ref="daypicker"
            initialMonth={ new Date(2015, month, 10) } />
        );
      }
    }));

    const parent = TestUtils.renderIntoDocument(TestParent());
    const daypicker = parent.refs.daypicker;

    expect(daypicker.props.initialMonth.getMonth()).to.equal(11);

    parent.setState({
      month: 8
    }, () => {
      expect(daypicker.state.currentMonth.getDate()).to.equal(1);
      expect(daypicker.state.currentMonth.getMonth()).to.equal(8);
      done();
    });
  });

  it("displays the same state when changing another prop", (done) => {
    const TestParent = React.createFactory(React.createClass({
      getInitialState() {
        return {
          className: "customClass"
        };
      },
      render() {
        const { className } = this.state;
        return (
          <DayPicker ref="daypicker" className={className} />
        );
      }
    }));

    const parent = TestUtils.renderIntoDocument(TestParent());
    const daypicker = parent.refs.daypicker;

    expect(daypicker.props.initialMonth.getMonth()).to.equal((new Date()).getMonth());

    parent.setState({
      className: "otherCustomClass"
    }, () => {
      expect(daypicker.state.currentMonth.getMonth()).to.equal((new Date()).getMonth());
      done();
    });
  });

  // EVENTS

  it("updates its state when clicking to the next month button", () => {

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} />
    );
    const nextButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--next");

    TestUtils.Simulate.click(nextButton);

    expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2016);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(0);
    expect(dayPickerEl.state.currentMonth.getDate()).to.equal(1);

  });

  it("updates its state when clicking to the previous month button", () => {

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} />
    );
    const prevButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--prev");

    TestUtils.Simulate.click(prevButton);

    expect(dayPickerEl.state.currentMonth.getFullYear()).to.equal(2015);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(10);
    expect(dayPickerEl.state.currentMonth.getDate()).to.equal(1);

  });

  it("calls onMonthChange", () => {
    const handleMonthChange = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} onMonthChange={handleMonthChange} />
    );
    const nextButton = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-NavButton DayPicker-NavButton--next");
    TestUtils.Simulate.click(nextButton);

    expect(handleMonthChange).to.have.been.calledWith(
        sinon.match((nextMonth) => {
          return nextMonth.getFullYear() === 2016 &&
            nextMonth.getMonth() === 0 &&
            nextMonth.getDate() === 1;
        }, "nextMonth"),

    );

  });

  it("calls event handlers on caption", () => {
    const SyntheticEvent = require("react/lib/SyntheticEvent");
    const handleCaptionClick = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker onCaptionClick={handleCaptionClick} />
    );
    const caption = TestUtils.findRenderedDOMComponentWithClass(dayPickerEl,
      "DayPicker-Caption");

    TestUtils.Simulate.click(caption);

    expect(handleCaptionClick).to.have.been.calledWith(
      sinon.match((e) => {
        return e instanceof SyntheticEvent && e.target !== null;
      }, "e"),
      sinon.match((currentMonth) => {
        const today = new Date();
        return currentMonth.getFullYear() === today.getFullYear() &&
          currentMonth.getMonth() === today.getMonth();
      }, "currentMonth")
    );

  });

  it("calls event handlers on a day cell", () => {



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
      <DayPicker initialMonth={new Date(2015, 11, 5)}
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
      sinon.match((e) => {
        return e instanceof SyntheticEvent && e.target !== null;
      }, "e"),
      sinon.match(isFirstDay, "d"),
      sinon.match((mods) => {
        return mods instanceof Array && mods[0] === "firstDay";
      }, "modifiers")
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
    expect(handleTouchTap).to.have.been.called;

  });

  it("calls touch-tap event handler on a day cell", () => {



    const handleTouchTap = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)}
        onDayTouchTap={handleTouchTap} />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[2];

    TestUtils.Simulate.touchTap(dayEl);
    expect(handleTouchTap).to.have.been.called;

  });

  it("does not call event handlers on a day cell without event prop", () => {

    const handleClick = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)} />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[2];

    TestUtils.Simulate.click(dayEl);
    expect(handleClick).to.not.have.been.called;

  });

  it("does not call mouse events on disabled outside days", () => {



    const handleClick = sinon.spy();
    const handleMouseEnter = sinon.spy();
    const handleMouseLeave = sinon.spy();
    const handleTouchTap = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 11, 5)}
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

  it("changes the month when tapping on enabled outside days", () => {



    const handleTouchTap = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker
        initialMonth={new Date(2015, 6, 5)}
        enableOutsideDays={true}
        onDayTouchTap={handleTouchTap}
      />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[0];

    TestUtils.Simulate.touchTap(dayEl);
    expect(handleTouchTap).to.have.been.called;
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(5);
  });

  it("shows the previous month when clicking on (enabled) outside days", () => {

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker
        numberOfMonths={1}
        initialMonth={new Date(2015, 6, 5)}
        enableOutsideDays={true}
        onDayClick={Function()}
      />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[0]; // get the first outside day from the previous month

    TestUtils.Simulate.click(dayEl);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(5);

  });


  it("shows the next month when clicking on (enabled) outside days", () => {

    const handleClick = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker
        initialMonth={new Date(2015, 6, 5)}
        enableOutsideDays={true}
        onDayClick={handleClick}
      />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[daysEl.length - 1]; // get last outside day
    TestUtils.Simulate.click(dayEl);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(7);

  });

  it("does not show the next month when clicking on outside days after the `toMonth` month", () => {

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker
        initialMonth={new Date(2015, 6)}
        toMonth={new Date(2015, 6)}
        enableOutsideDays={true}
        onDayClick={ () => {} }
      />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl, "DayPicker-Day");
    const dayEl = daysEl[daysEl.length - 1]; // get last outside day
    TestUtils.Simulate.click(dayEl);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(6);

  });

  it("does not show the next month when clicking on an outside days of the first of 2 months", () => {



    const handleClick = sinon.spy();

    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker
        numberOfMonths={2}
        initialMonth={new Date(2015, 6, 5)} // july 2015
        enableOutsideDays={true}
        onDayClick={handleClick}
      />
    );

    const daysEl = TestUtils.scryRenderedDOMComponentsWithClass(dayPickerEl,
      "DayPicker-Day");
    const dayEl = daysEl[34]; // last day cell on the first month
    TestUtils.Simulate.click(dayEl);
    expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(6);

  });

  it("calls onDayClick when enter key is pressed on a day cell", () => {
    const handleDayClick = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker onDayClick={handleDayClick} />
    );
    const node = ReactDOM.findDOMNode(dayPickerEl);
    const dayNode = node.querySelector(".DayPicker-Day:not(.DayPicker-Day--outside)");
    TestUtils.Simulate.keyDown(dayNode, {
      keyCode: keys.ENTER
    });
    expect(handleDayClick).to.be.called;
  });

  it("calls onDayClick when space key is pressed on a day cell", () => {
    const handleDayClick = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker onDayClick={handleDayClick} />
    );
    const node = ReactDOM.findDOMNode(dayPickerEl);
    const dayNode = node.querySelector(".DayPicker-Day:not(.DayPicker-Day--outside)");
    TestUtils.Simulate.keyDown(dayNode, {
      keyCode: keys.SPACE
    });
    expect(handleDayClick).to.be.called;
  });

  it("calls onDayTouchTap when enter key is pressed on a day cell", () => {
    const handleDayTouchTap = sinon.spy();
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker onDayTouchTap={handleDayTouchTap} />
    );
    const node = ReactDOM.findDOMNode(dayPickerEl);
    const dayNode = node.querySelector(".DayPicker-Day:not(.DayPicker-Day--outside)");
    TestUtils.Simulate.keyDown(dayNode, {
      keyCode: keys.ENTER
    });
    expect(handleDayTouchTap).to.be.called;
  });


  it("calls focusPreviousDay when left key is pressed", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 5)} />
    );
    const node = ReactDOM.findDOMNode(dayPickerEl);
    const dayNode = node.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)")[0];
    const focusPreviousDay = sinon.spy(dayPickerEl, "focusPreviousDay");
    TestUtils.Simulate.keyDown(dayNode, {
      keyCode: keys.LEFT
    });
    expect(focusPreviousDay).to.be.called;
  });

  it("calls focusNextDay when right key is pressed", () => {
    const dayPickerEl = TestUtils.renderIntoDocument(
      <DayPicker initialMonth={new Date(2015, 5)} />
    );
    const node = ReactDOM.findDOMNode(dayPickerEl);
    const dayNode = node.querySelector(".DayPicker-Day:not(.DayPicker-Day--outside)");
    const focusNextDay = sinon.spy(dayPickerEl, "focusNextDay");
    TestUtils.Simulate.keyDown(dayNode, {
      keyCode: keys.RIGHT
    });
    expect(focusNextDay).to.be.called;
  });

  describe("handleKeyDown", () => {

    it("should handle keydown event", () => {
      const spy = sinon.spy();
      const dayPicker = TestUtils.renderIntoDocument(<DayPicker onKeyDown={spy} />);
      const node = ReactDOM.findDOMNode(dayPicker);
      TestUtils.Simulate.keyDown(node);
      expect(spy).to.be.calledOnce;
    });

    it("should handle keydown event when cannot change month", () => {
      const spy = sinon.spy();
      const dayPicker = TestUtils.renderIntoDocument(
        <DayPicker canChangeMonth={false} onKeyDown={ spy } />
      );
      const node = ReactDOM.findDOMNode(dayPicker);
      TestUtils.Simulate.keyDown(node);
      expect(spy).to.be.calledOnce;
    });

  });

  describe("Keyboard navigation", () => {

    let dayPickerEl, body;

    function getDayNode(monthBody, weekIndex, dayIndex) {
      return monthBody.childNodes[weekIndex].childNodes[dayIndex];
    }

    beforeEach(() => {
      dayPickerEl = TestUtils.renderIntoDocument(
        <DayPicker initialMonth={new Date(2015, 5)} />
      );
      body = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(dayPickerEl, "DayPicker-Body"));
    });

    it("focuses the previous day of the same month", () => {
      const focusedNode = getDayNode(body, 0, 2);
      const previousNode = getDayNode(body, 0, 1);
      expect(focusedNode.innerHTML).to.equal("2");
      expect(previousNode.innerHTML).to.equal("1");
      dayPickerEl.focusPreviousDay(focusedNode);
      expect(document.activeElement.innerHTML).to.equal("1");
      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(5);
    });

    it("focuses the last day of the previous week", () => {
      const focusedNode = getDayNode(body, 1, 0);
      const previousNode = getDayNode(body, 0, 6);

      expect(focusedNode.innerHTML).to.equal("7");
      expect(previousNode.innerHTML).to.equal("6");

      dayPickerEl.focusPreviousDay(focusedNode);
      expect(document.activeElement.innerHTML).to.equal("6");

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(5);
    });

    it("focuses the last day of the previous month", () => {
      const focusedNode = getDayNode(body, 0, 1);
      expect(focusedNode.innerHTML).to.equal("1");

      dayPickerEl.focusPreviousDay(focusedNode);
      expect(document.activeElement.innerHTML).to.equal("31");

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(4);

    });

    it("focuses the next day of the same month", () => {
      const focusedNode = getDayNode(body, 0, 2);
      const nextNode = getDayNode(body, 0, 3);
      expect(focusedNode.innerHTML).to.equal("2");
      expect(nextNode.innerHTML).to.equal("3");
      dayPickerEl.focusNextDay(focusedNode);
      expect(document.activeElement.innerHTML).to.equal("3");
      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(5);
    });

    it("focuses the first day of the next week", () => {
      const focusedNode = getDayNode(body, 0, 6);
      const nextNode = getDayNode(body, 1, 0);

      expect(focusedNode.innerHTML).to.equal("6");
      expect(nextNode.innerHTML).to.equal("7");

      dayPickerEl.focusNextDay(focusedNode);
      expect(document.activeElement.innerHTML).to.equal("7");

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(5);
    });

    it("focuses the first day of the next month", () => {
      const focusedNode = getDayNode(body, 4, 2);
      expect(focusedNode.innerHTML).to.equal("30");

      dayPickerEl.focusNextDay(focusedNode);
      expect(document.activeElement.innerHTML).to.equal("1");

      expect(dayPickerEl.state.currentMonth.getMonth()).to.equal(6);

    });

  });

});

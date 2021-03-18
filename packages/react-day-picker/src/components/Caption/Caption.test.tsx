import tk from 'timekeeper';

const FrozenDate = new Date(1979, 8);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

describe('when navigation is disabled', () => {
  test.todo('should display the caption label');
  test.todo('should not render the drop-downs');
  test.todo('should not render the navigation');
});

describe('when navigation is enabled', () => {
  describe('when the caption layout is "drop-down"', () => {
    test.todo('should apply the `caption_drop-downs` class name');
    test.todo('should apply the `caption_drop-downs` style');
    test.todo('should render the months drop-down');
    test.todo('should render the years drop-down');
    describe('when a month is selected from the month drop-down', () => {
      test.todo('should go to the selected month');
      test.todo('should cal the `onMonthChange` callback');
    });
    describe('when a year is selected from the year drop-down', () => {
      test.todo('should go to the selected month');
      test.todo('should cal the `onMonthChange` callback');
    });
  });
  describe('when the caption layout is "buttons"', () => {
    test.todo('should display the caption label');
    test.todo('should display the navigation');
    describe('when rendering multiple months', () => {
      describe('if is not the last month', () => {
        test.todo('should hide the next button');
      });
      describe('if is not the first month', () => {
        test.todo('should hide the previous button');
      });
    });
    describe('when clicking the previous button', () => {
      test.todo('should go to the previous month');
      test.todo('should call the `onMonthChange` callback');
      describe('if no previous month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
      describe('if no next month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
    });
    describe('when clicking the next button', () => {
      test.todo('should go to the next month');
      test.todo('should call the `onMonthChange` callback');
      describe('if no next month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
      describe('if no next month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
    });
  });
});

tk.reset();

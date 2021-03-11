test.todo('should apply the `caption` classname');
test.todo('should apply the `caption` style');

describe('when navigation is disabled', () => {
  test.todo('should display the caption label');
  test.todo('should not render the dropdowns');
  test.todo('should not render the navigation');
});

describe('when navigation is enabled', () => {
  describe('when the caption layout is "dropdown"', () => {
    test.todo('should apply the `caption_dropdowns` classname');
    test.todo('should apply the `caption_dropdowns` style');
    test.todo('should render the months dropdown');
    test.todo('should render the years dropdown');
    describe('when a month is selected from the month dropdown', () => {
      test.todo('should go to the selected month');
      test.todo('should cal the `onMonthChange` callback');
    });
    describe('when a year is selected from the year dropdown', () => {
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

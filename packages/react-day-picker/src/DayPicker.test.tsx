describe('when the first day of the month is focused', () => {
  describe('when the arrow up key is pressed', () => {
    test.todo('should focus a day in the previous month');
    describe('if the previous month is not displayed', () => {
      test.todo('should stay in the same month');
    });
    describe('if the previous day is disabled', () => {
      test.todo('should focus the day before');
    });
  });
  describe('when the arrow down key is pressed', () => {
    test.todo('should focus the day in the next week');
    describe('if the day in the next week is disabled', () => {
      test.todo('should focus the day after');
    });
  });
  describe('when the arrow left key is pressed', () => {
    test.todo('should focus a day in the previous month');
    describe('if the day in the previous week is disabled', () => {
      test.todo('should focus the day before');
    });
  });
  describe('when the arrow right key is pressed', () => {
    test.todo('should focus the next day');
    describe('if the day in the next day is disabled', () => {
      test.todo('should focus the day after');
    });
  });
});

describe('when the last day of the month is focused', () => {
  describe('when the arrow down key is pressed', () => {
    test.todo('should focus the day in the next month');
    describe('if the next month is not displayed', () => {
      test.todo('should stay in the same month');
    });
    describe('if the day in the next week is disabled', () => {
      test.todo('should focus the day after');
    });
  });
  describe('when the arrow right key is pressed', () => {
    test.todo('should focus a day in the next month');
    describe('if the next month is not displayed', () => {
      test.todo('should stay in the same month');
    });
    describe('if the day in the next week is disabled', () => {
      test.todo('should focus the day after');
    });
  });
});

import { labelWeekNumberHeader } from './labelWeekNumberHeader';

test('should return the label', () => {
  expect(labelWeekNumberHeader()).toEqual('Week Number');
});

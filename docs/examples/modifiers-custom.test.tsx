import { app, gridcell, renderApp, user } from '../../test';
import Example from './modifiers-custom';

const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];
const bookedStyle = {
  border: '2px solid currentColor'
};

beforeEach(() => {
  renderApp(<Example />);
});

test.each(bookedDays)('%s should have the booked style', (day) => {
  expect(gridcell(day)).toHaveStyle(bookedStyle);
});

describe('when the booked day is clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(bookedDays[1]));
  });
  test('the footer should be updated', () => {
    expect(app()).toHaveTextContent('This day is already booked!');
  });
});

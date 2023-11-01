import { screen } from '@testing-library/react';
import { axe, freezeTime, renderApp, user } from '../../test';
import { app, grid } from '../../test/po';
import { Controlled } from './Controlled';

freezeTime(new Date(2022, 5, 10));

beforeEach(() => {
  renderApp(<Controlled />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when the "Go to today" button is clicked', () => {
  const todayButton = () => screen.getByRole('button', { name: 'Go to Today' });
  beforeEach(async () => {
    await user.click(todayButton());
  });
  test('the button should be disabled', async () => {
    expect(todayButton()).toBeDisabled();
  });
  test('should display the current month', () => {
    expect(grid()).toHaveAccessibleName('June 2022');
  });
});

import { screen } from '@testing-library/react';

import { grid } from '../test/elements';
import { Controlled } from './Controlled';
import { renderApp } from '../test/renderApp';
import { user } from '../test/user';

jest.useFakeTimers().setSystemTime(new Date(2022, 5, 10));

describe('when the "Go to today" button is clicked', () => {
  const todayButton = () => screen.getByRole('button', { name: 'Go to Today' });
  beforeEach(async () => {
    renderApp(<Controlled />);
    await user.click(todayButton());
  });
  test('the button should be disabled', async () => {
    expect(todayButton()).toBeDisabled();
  });
  test('should display the current month', () => {
    expect(grid()).toHaveAccessibleName('June 2022');
  });
});

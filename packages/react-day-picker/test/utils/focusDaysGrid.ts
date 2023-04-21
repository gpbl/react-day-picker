import { fireEvent } from '@testing-library/dom';
import { act } from '@testing-library/react';

import { getFocusedElement } from '../selectors';
import { type UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

export async function focusDaysGrid(user: UserEvent) {
  // Make sure nothing is focused
  await act(() => fireEvent.blur(getFocusedElement()));
  // By pressing tab 3 times
  await act(() => user.tab());
  await act(() => user.tab());
  await act(() => user.tab());
}

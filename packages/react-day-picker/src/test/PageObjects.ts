import { fireEvent, screen } from '@testing-library/react';

import { formatCaption } from '../contexts/DayPickerContext/formatters';

export class PageObjects {
  today: Date;

  /**
   * Initialize the page objects for the DayPicker elements. Use the objects in
   * this class to access to the elements to test.
   *
   * @param today The date to use as today. Usually the one froze with
   * timekeeper.
   */
  constructor(today: Date) {
    this.today = today;
  }

  get iconPrevious(): HTMLElement {
    return screen.getByTestId('iconPrevious');
  }

  get iconDropdown(): HTMLElement {
    return screen.getByTestId('iconDropdown');
  }

  get iconNext(): HTMLElement {
    return screen.getByTestId('iconNext');
  }

  get table(): HTMLTableElement {
    return screen.getByRole('table') as HTMLTableElement;
  }

  get footer(): ChildNode | null {
    return this.table.querySelector('tfoot')?.children[0].firstChild ?? null;
  }

  get button(): HTMLButtonElement {
    return screen.getByRole('button') as HTMLButtonElement;
  }

  /** The drop-down to choose the month from. */
  get monthDropdown(): HTMLSelectElement {
    return screen.queryByRole('combobox', {
      name: /month/i
    }) as HTMLSelectElement;
  }

  /** The drop-down to choose the year from. */
  get yearDropdown(): HTMLSelectElement {
    return screen.queryByRole('combobox', {
      name: /year/i
    }) as HTMLSelectElement;
  }

  /** The label of the caption element. */
  get captionLabel(): HTMLSpanElement {
    return screen.getByText(formatCaption(this.today)) as HTMLSpanElement;
  }

  /** The previous month button in the navigation. */
  get previousButton(): HTMLButtonElement {
    return screen.queryByRole('button', {
      name: /previous/i
    }) as HTMLButtonElement;
  }

  /** The next month button in the navigation. */
  get nextButton(): HTMLButtonElement {
    return screen.queryByRole('button', {
      name: /next/i
    }) as HTMLButtonElement;
  }

  runSelectMonth(newMonth: Date): void {
    fireEvent.change(this.monthDropdown, {
      target: { value: newMonth.getMonth() }
    });
  }

  runSelectYear(newMonth: Date): void {
    fireEvent.change(this.yearDropdown, {
      target: { value: newMonth.getFullYear() }
    });
  }
}

import { formatCaption } from '@src/contexts/DayPicker/formatters';
import { fireEvent, screen } from '@testing-library/react';

/**
 * @deprecated Use po.ts instead.
 */
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

  /** The icon for the left button. */
  get iconLeft(): HTMLElement {
    return screen.getByTestId('iconLeft');
  }

  /** The icon for the dropdown. */
  get iconDropdown(): HTMLElement {
    return screen.getByTestId('iconDropdown');
  }

  /** The icon for the right button. */
  get iconRight(): HTMLElement {
    return screen.getByTestId('iconRight');
  }

  /** Get the table element. */
  get table(): HTMLTableElement {
    return screen.getByRole('table') as HTMLTableElement;
  }

  /** Get the content of the footer. */
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
  getCaptionLabel(date: Date): HTMLSpanElement {
    return screen.getByText(formatCaption(date)) as HTMLSpanElement;
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

  /** Select the month from the drop-down. */
  runSelectMonth(month: Date): void {
    fireEvent.change(this.monthDropdown, {
      target: { value: month.getMonth() }
    });
  }

  /** Click the previous month button. */
  runPreviousClick(): boolean {
    return fireEvent.click(this.previousButton);
  }

  /** Click the next month button. */
  runNextClick(): boolean {
    return fireEvent.click(this.nextButton);
  }

  /** Select the year from the drop-down. */
  runSelectYear(year: Date): void {
    fireEvent.change(this.yearDropdown, {
      target: { value: year.getFullYear() }
    });
  }
}

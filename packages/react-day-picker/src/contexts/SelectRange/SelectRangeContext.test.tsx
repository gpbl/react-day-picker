import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { addDays, subDays } from 'date-fns';

import { DayPickerRangeProps } from 'types/DayPickerRange';
import { DateRange } from 'types/Matchers';

import {
  createDisabled,
  SelectRangeModifiers,
  SelectRangeProvider
} from './SelectRangeContext';
import { useSelectRange } from './useSelectRange';

describe('SelectRangeProvider', () => {
  it('should render with children', () => {
    render(
      <SelectRangeProvider initialProps={{}}>
        <div data-testid="test" />
      </SelectRangeProvider>
    );
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});

describe('disabled', () => {
  const fromDate = new Date(2021, 10, 15);
  const toDate = addDays(fromDate, 3);

  describe('with max', () => {
    it('handles dates outside max limit', async () => {
      const disabled = createDisabled(fromDate, toDate, undefined, 5);
      expect(disabled(subDays(fromDate, 1))).toEqual(false); // Inside lower range
      expect(disabled(subDays(fromDate, 2))).toEqual(true); // Outside lower range
      expect(disabled(addDays(toDate, 1))).toEqual(false); // Inside upper range
      expect(disabled(addDays(toDate, 2))).toEqual(true); // Outside upper range
    });
  });

  describe('with min', () => {
    it('handles dates inside min limit with two dates selected', () => {
      const disabled = createDisabled(fromDate, toDate, 2);
      expect(disabled(addDays(fromDate, 1))).toEqual(true); // Inside min limit
      expect(disabled(subDays(fromDate, 1))).toEqual(false); // Outside min limit
      expect(disabled(subDays(toDate, 2))).toEqual(true); // Inside min limit
      expect(disabled(subDays(toDate, 1))).toEqual(false); // Outside min limit
      expect(disabled(addDays(toDate, 1))).toEqual(false); // Outside min limit
    });

    it('handles dates inside min limit starting with one date selected', async () => {
      const disabled = createDisabled(fromDate, fromDate, 2);
      expect(disabled(subDays(fromDate, 1))).toEqual(true); // Within min range
      expect(disabled(addDays(fromDate, 1))).toEqual(true); // Within min range
      expect(disabled(addDays(fromDate, 2))).toEqual(false); // Outside min range
      expect(disabled(subDays(fromDate, 2))).toEqual(false); // Outside min range
    });
  });
});

describe('useSelectRange', () => {
  const renderSelectRangeHook = function (initialProps: DayPickerRangeProps) {
    type wrapperProps = {
      children: React.ReactNode;
      initialProps: DayPickerRangeProps;
    };
    const wrapper = ({ children }: wrapperProps) => (
      <SelectRangeProvider initialProps={initialProps}>
        {children}
      </SelectRangeProvider>
    );
    return renderHook(() => useSelectRange(), { wrapper });
  };

  it('should return the context object with defaults', async () => {
    const { result } = await waitFor(() =>
      renderSelectRangeHook({ mode: 'range' })
    );
    expect(result.current.selected).toEqual(undefined);
    expect(result.current.modifiers).toEqual({
      range_start: [],
      range_end: [],
      range_middle: [],
      disabled: []
    });
  });

  describe('when given "from" and "to" date', () => {
    let selected: DateRange | undefined,
      modifiers: SelectRangeModifiers,
      onDayClick: (date: Date) => void;
    const fromDate = new Date(2021, 10, 15);
    const toDate = addDays(fromDate, 3);
    const onSelect = jest.fn();

    beforeEach(async () => {
      const {
        result: { current }
      } = await waitFor(() =>
        renderSelectRangeHook({
          mode: 'range',
          selected: {
            from: fromDate,
            to: toDate
          },
          min: 2,
          max: 5,
          onSelect
        })
      );

      selected = current.selected;
      modifiers = current.modifiers;
      onDayClick = current.onDayClick as (date: Date) => void;
    });

    it('should return the correct modifiers', () => {
      expect(selected).toEqual({ from: fromDate, to: toDate });
      expect(modifiers.range_start).toEqual([fromDate]);
      expect(modifiers.range_middle).toEqual([
        {
          after: fromDate,
          before: toDate
        }
      ]);
      expect(modifiers.range_end).toEqual([toDate]);
    });

    describe('when given no "to" date', () => {
      it('should return correct modifier when given undefined "to" date', async () => {
        const fromDate = new Date(2021, 10, 15);
        const toDate = undefined;

        const { result } = await waitFor(() =>
          renderSelectRangeHook({
            mode: 'range',
            selected: {
              from: fromDate,
              to: toDate
            },
            min: 1,
            max: 5
          })
        );

        expect(result.current.selected).toEqual({
          from: fromDate,
          to: undefined
        });
        expect(result.current.modifiers.range_start).toEqual([fromDate]);
        expect(result.current.modifiers.range_middle).toEqual([
          {
            after: fromDate,
            before: fromDate
          }
        ]);
        expect(result.current.modifiers.range_end).toEqual([fromDate]);
      });
    });

    describe('onDayClick', () => {
      it('does not call onSelect inside min limit', async () => {
        onDayClick(addDays(fromDate, 1));
        expect(onSelect).not.toHaveBeenCalled();
      });

      it('does not call onSelect when dates outside the max limit', async () => {
        onDayClick(subDays(fromDate, 2)); // Outside lower range
        onDayClick(addDays(toDate, 2)); // Outside upper range
        expect(onSelect).not.toHaveBeenCalled();
      });

      it('calls onSelect when dates inside the max limit before "from" date', async () => {
        onDayClick(subDays(fromDate, 1)); // Inside lower range
        expect(onSelect).toHaveBeenCalled();
      });

      it('calls onSelect when dates inside the max limit after "to" date', async () => {
        onDayClick(addDays(toDate, 1)); // Inside upper range
        expect(onSelect).toHaveBeenCalled();
      });

      it('calls onSelect when selecting a selected day', async () => {
        onDayClick(fromDate);
        expect(onSelect).toHaveBeenCalled();
      });

      it('calls onSelect when selecting day between selected dates', async () => {
        onDayClick(addDays(fromDate, 1));
        expect(onSelect).toHaveBeenCalled();
      });
    });
  });
});

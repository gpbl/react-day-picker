import * as React from 'react';

import { enGB, enUS } from 'date-fns/locale';
import { customRender, PageObjects } from 'test';

import { Table } from './Table';

const po = new PageObjects(new Date());

describe('It should render weeks at the boundaries of years correctly', () => {
  test('If the first days of the month start at week 52 from the previous year, week 52 should be rendered on the 1st row', () => {
    customRender(<Table displayMonth={new Date(2022, 0)} />, { locale: enGB });
    const week1 = po.weeks[0].querySelectorAll('td');
    const day6 = week1[5];
    const day7 = week1[6];
    expect(day6).toHaveTextContent('11st January (Saturday)');
    expect(day7).toHaveTextContent('22nd January (Sunday)');
  });

  test('If there is a week 53, and we show week 1 afterwards, week 1 should be rendered on the 6th row', () => {
    customRender(<Table displayMonth={new Date(2022, 11)} />, {
      locale: enUS,
      showOutsideDays: true,
      fixedWeeks: true
    });
    const week6 = po.weeks[5].querySelectorAll('td');
    const day36 = week6[0];
    const day37 = week6[1];
    expect(day36).toHaveTextContent('11st January (Sunday)');
    expect(day37).toHaveTextContent('22nd January (Monday)');
  });

  test('If the last week of the year is 1, it should be rendered on the 5th row', () => {
    customRender(<Table displayMonth={new Date(2021, 11)} />, {
      locale: enUS
    });
    const week5 = po.weeks[4].querySelectorAll('td');
    const day29 = week5[0];
    const day30 = week5[1];
    expect(day29).toHaveTextContent('2626th December (Sunday)');
    expect(day30).toHaveTextContent('2727th December (Monday)');
  });
});

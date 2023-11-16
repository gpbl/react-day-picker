import { Calendar } from './Calendar';
import { renderWithContext } from '../../../test/render';
import { grid, nav } from '../../../test';

it('should render the navigation and month grids', () => {
  renderWithContext(<Calendar />);

  expect(nav()).toBeInTheDocument();
  expect(grid()).toBeInTheDocument();
});

// it('should focus the focus target when initialFocus is passed in', () => {
//   const { getByTestId } = render(<Calendar initialFocus />);

//   expect(getByTestId('focus-target')).toHaveFocus();
// });

it('should apply classnames and style according to props', () => {
  const { container } = renderWithContext(<Calendar />, {
    className: 'custom-class',
    numberOfMonths: 2,
    contrast: 'more',
    colorScheme: 'dark',
    showWeekNumber: true,
    style: { color: 'red' }
  });

  expect(container.firstChild).toHaveClass('rdp');
  expect(container.firstChild).toHaveClass('multiple_months');
  expect(container.firstChild).toHaveClass('contrast_more');
  expect(container.firstChild).toHaveClass('dark');
  expect(container.firstChild).toHaveClass('with_weeknumber');
  expect(container.firstChild).toHaveClass('custom-class');
  expect(container.firstChild).toHaveStyle({ color: 'red' });
});

it('should use custom components', () => {
  const { container } = renderWithContext(<Calendar />, {
    footer: 'foo',
    components: {
      Nav: () => <div>Custom Navigation</div>,
      MonthGrid: () => <div>Custom MonthGrid</div>,
      Months: (props) => (
        <div {...props}>
          Custom Months<div>{props.children}</div>
        </div>
      ),
      Footer: () => <div>Custom Footer</div>
    }
  });

  expect(container).toHaveTextContent('Custom Navigation');
  expect(container).toHaveTextContent('Custom Months');
  expect(container).toHaveTextContent('Custom MonthGrid');
  expect(container).toHaveTextContent('Custom Footer');
});

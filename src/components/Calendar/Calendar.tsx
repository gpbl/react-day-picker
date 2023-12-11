import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { Footer as DefaultFooter } from '../Footer';
import { MonthGrid as DefaultMonthGrid } from '../MonthGrid';
import { Months as DefaultMonths } from '../Months';
import { Nav as DefaultNav } from '../Nav';

/**
 * Render the container with navigation and the month grids.
 */
export function Calendar() {
  const {
    captionLayout,
    className,
    classNames,
    colorScheme,
    contrast,
    components,
    dataAttributes,
    dir,
    footer,
    hideNavigation,
    id,
    lang,
    nonce,
    numberOfMonths,
    showWeekNumber,
    style,
    styles,
    title
  } = useDayPicker();
  const calendar = useCalendar();

  // const dayPicker = useDayPicker();
  // const focusContext = useFocusContext();
  // const navigation = useNavigation();

  // const [hasInitialFocus, setHasInitialFocus] = useState(false);

  // // Focus the focus target when initialFocus is passed in
  // useEffect(() => {
  //   if (!props.initialFocus) return;
  //   if (!focusContext.focusTarget) return;
  //   if (hasInitialFocus) return;

  //   focusContext.focus(focusContext.focusTarget);
  //   setHasInitialFocus(true);
  // }, [
  //   props.initialFocus,
  //   hasInitialFocus,
  //   focusContext.focus,
  //   focusContext.focusTarget,
  //   focusContext
  // ]);

  // Apply classnames according to props
  const cssClassNames = [classNames.rdp];
  if (className) {
    cssClassNames.push(className);
  }
  if (numberOfMonths > 1) {
    cssClassNames.push(classNames.multiple_months);
  }
  if (contrast) {
    cssClassNames.push(classNames[`contrast_${contrast}`]);
  }
  if (colorScheme) {
    cssClassNames.push(classNames[`color_${colorScheme}`]);
  }
  if (showWeekNumber) {
    cssClassNames.push(classNames.with_weeknumber);
  }

  const Nav = components?.Nav ?? DefaultNav;
  const Months = components?.Months ?? DefaultMonths;
  const MonthGrid = components?.MonthGrid ?? DefaultMonthGrid;
  const Footer = components?.Footer ?? DefaultFooter;

  return (
    <div
      className={cssClassNames.join(' ')}
      style={{ ...styles?.rdp, ...style }}
      dir={dir}
      id={id}
      lang={lang}
      nonce={nonce}
      title={title}
      {...dataAttributes}
    >
      {captionLayout !== 'dropdown' && !hideNavigation && <Nav />}
      <Months
        className={classNames.months_wrapper}
        style={styles?.months_wrapper}
      >
        {calendar.months.map((month, i) => (
          <MonthGrid aria-labelledby={id} key={i} index={i} month={month} />
        ))}
      </Months>
      {footer && (
        <Footer className={classNames.footer} style={styles?.footer}>
          {footer}
        </Footer>
      )}
    </div>
  );
}

import { DayPickerClassNames, DayPickerProps } from 'types';

import { defaultProps } from '../DayPicker';
import { getCaptionComponent } from './getCaptionComponent';

describe('getCaptionComponent', () => {
  it('return the container props', () => {
    const classNames: DayPickerClassNames = {
      Caption: 'caption-foo'
    };
    const props: DayPickerProps = {
      ...defaultProps,
      classNames
    };
    const expected = {
      rootProps: {
        className: 'caption-foo'
      }
    };
    const result = getCaptionComponent(props);
    expect(result).toMatchObject(expected);
  });
});

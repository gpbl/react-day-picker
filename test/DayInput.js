import React from 'react';
import PropTypes from 'prop-types';

import { isElement } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import DayInput from '../src/DayInput';

describe('DayInput', () => {
  it('should have default props', () => {
    const dayPicker = <DayInput />;
    expect(dayPicker.props.dayPickerProps).to.eql({});
    expect(dayPicker.props.value).to.equal('');
    expect(dayPicker.props.format).to.equal('L');
    expect(dayPicker.props.hideOnDayClick).to.equal(true);
    expect(dayPicker.props.component).to.equal('input');
  });
});

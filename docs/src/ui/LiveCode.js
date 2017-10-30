import React from 'react';
import PropTypes from 'prop-types';

import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

function transformCode(code) {
  return code
    .replace(/import.*\n?/g, '')
    .replace(/export default[\n\s\t ]*/, '');
}

export default function LiveCode({ children }) {
  return (
    <LiveProvider
      noInline
      mountStylesheet={false}
      code={children}
      transformCode={transformCode}
      scope={{ DayPicker, DayPickerInput, DateUtils, moment }}
    >
      <div>
        <LivePreview css={{ textAlign: 'center', marginBottom: '2em' }} />
        <div
          css={{
            borderTop: '1px solid #999',
            borderBottom: '1px dashed #999',
            textTransform: 'uppercase',
            fontSize: 11,
            padding: '.3em .5em',
            letterSpacing: 0.6,
          }}
        >
          Live Code Editor
        </div>
        <LiveEditor
          css={{
            maxHeight: 600,
            marginTop: `0 !important`,
            outline: 'none',
          }}
        />
      </div>
      <pre>
        <LiveError
          css={{ backgroundColor: 'red', color: 'white', padding: '1em' }}
        />
      </pre>
    </LiveProvider>
  );
}

LiveCode.propTypes = {
  children: PropTypes.node,
};

LiveCode.defaultProps = {
  children: '',
};

import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '../constants/color';
import { WIDE_SCREEN } from '../constants/mediaSelector';

export default function Grid({ children, separeColumns = false }) {
  const css = {
    margin: '20px 0',
    [WIDE_SCREEN]: {
      display: 'flex',
      '& > div:not(:first-child)': {
        paddingLeft: 10,
      },
      '& > div:not(:last-child)': {
        paddingRight: 10,
        borderRight: separeColumns ? `1px solid ${colors.BORDER}` : undefined,
      },
    },
  };
  return <div css={css}>{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.node,
  separeColumns: PropTypes.bool,
};

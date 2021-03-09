import React from 'react';

import { SelectSingleContextValue } from 'types';

import { SelectSingleContext } from './SelectSingleContext';

/** Return the context for controlling the selections in the single selection mode. */
export function useSelectSingle(): SelectSingleContextValue {
  const context = React.useContext(SelectSingleContext);
  if (!context) {
    throw new Error(
      'useSelectSingle must be used within a SelectSingleProvider'
    );
  }
  return context;
}

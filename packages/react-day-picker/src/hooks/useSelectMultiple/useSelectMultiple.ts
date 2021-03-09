import React from 'react';

import { SelectMultipleContextValue } from 'types';

import { SelectMultipleContext } from './SelectMultipleContext';

/** Return the context for controlling the selections in the multiple selection mode. */
export function useSelectMultiple(): SelectMultipleContextValue {
  const context = React.useContext(SelectMultipleContext);
  if (!context) {
    throw new Error(
      'useSelectMultiple must be used within a SelectMultipleProvider'
    );
  }
  return context;
}

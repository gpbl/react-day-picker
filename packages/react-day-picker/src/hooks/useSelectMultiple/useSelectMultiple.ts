import React from 'react';

import { SelectMultiple, SelectMultipleContext } from './SelectMultipleContext';

/** Return the context for controlling the selections in the multiple selection mode. */
export function useSelectMultiple(): SelectMultiple {
  const context = React.useContext(SelectMultipleContext);
  if (!context) {
    throw new Error(
      'useSelectMultiple must be used within a SelectMultipleProvider'
    );
  }
  return context;
}

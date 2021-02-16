import React from 'react';

import {
  NavigationContext,
  NavigationContextValue
} from '../../components/DayPicker';

export function useNavigation(): NavigationContextValue {
  return React.useContext(NavigationContext);
}

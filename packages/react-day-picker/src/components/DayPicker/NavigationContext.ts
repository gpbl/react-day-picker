import React from 'react';

import { defaultNavigationContext } from './defaults/defaultNavigationContext';

/**
 * Context to consume navigation values (such as the current month) in the
 * DayPicker internal components.
 */
export const NavigationContext = React.createContext(defaultNavigationContext);

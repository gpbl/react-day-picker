import { createContext, PropsWithChildren, useContext, useId } from 'react';

import { DayPickerProps } from '../../DayPicker';

import { getClassNames } from './utils/getClassNames';
import { getLabels } from './utils/getLabels';
import { getFormatters } from './utils/getFormatters';
import { getDataAttributes } from './utils/getDataAttributes';
import { DefaultProps, getDefaultProps } from './defaultProps';

/**
 * The `DayPickerProps` with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerContext = DayPickerProps &
  DefaultProps & { dataAttributes: Record<string, unknown> };

export const dayPickerContext = createContext<DayPickerContext | null>(null);

/**
 * The provider for the `dayPickerContext`, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function DayPickerProvider(props: PropsWithChildren<DayPickerProps>) {
  const id = useId();

  const context = {
    ...getDefaultProps(id, props),
    ...props,
    classNames: getClassNames(props),
    labels: getLabels(props),
    formatters: getFormatters(props),
    dataAttributes: getDataAttributes(props)
  } as unknown as DayPickerContext;

  return (
    <dayPickerContext.Provider value={context}>
      {props.children}
    </dayPickerContext.Provider>
  );
}

/**
 * Use this hook to access to the DayPicker context within custom components.
 */
export function useDayPicker() {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(
      'useDayPicker must be used within a `<dayPickerContext.Provider/>`.'
    );

  return context;
}

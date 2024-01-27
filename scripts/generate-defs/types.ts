import * as dayPickerExports from 'react-day-picker';

import { EnumDef } from './createEnumDef.ts';
import { InterfaceDef } from './createInterfaceDef.ts';
import { TypeAliasDef } from './createTypeAliasDef.ts';
import { VariableDef } from './createVariableDef.ts';
import { FunctionDef } from './createFunctionDef.ts';

export { EnumDef };
export { InterfaceDef };
export { TypeAliasDef };
export { VariableDef };
export { FunctionDef };

export type ApiDef =
  | InterfaceDef
  | TypeAliasDef
  | EnumDef
  | VariableDef
  | FunctionDef;

export type ApiDefs = Record<string, ApiDef | undefined>;
export type DayPickerExports = keyof typeof dayPickerExports;

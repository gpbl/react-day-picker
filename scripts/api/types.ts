export interface NodeDef {
  endLine: number;
  filePath: string;
  startLine: number;
  text: string;
}

export interface JSDocDef {
  description: string;
  descriptionJsx: string;
  deprecated: string | false;
  see: (string | undefined)[] | undefined;
}

export interface PropDef extends NodeDef, JSDocDef {
  name: string;
  defaultValue: string | boolean | undefined;
  required: boolean;
  type: string;
  typeSimple: string;
}

export interface InterfaceDef extends NodeDef, JSDocDef {
  name: string;
  extend: string[];
  inherit: string[];
  props: PropDef[];
}

export interface TypeAliasDef extends NodeDef, JSDocDef {
  name: string;
}

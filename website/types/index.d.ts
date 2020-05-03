declare module '*.css' {
  export interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module '*.svg' {
  export = React.Component;
}

declare module '*.png' {
  export = string;
}

declare module '*.jpg' {
  export = string;
}

type DocComment = {
  shortText: string | undefined;
  text: string | undefined;
};

declare module '@mdx-js/react' {
  import * as React from 'react';
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul';
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>;
  };
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

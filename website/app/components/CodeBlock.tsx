// import { CSSProperties, useEffect, useState } from 'react';
// import { codeToHtml } from 'shikiji';

// export function CodeBlock({
//   children: code,
//   language,
//   style
// }: {
//   children: string;
//   language?: string;
//   style?: CSSProperties;
// }) {
//   const [highlightedCode, setHighlightedCode] = useState('');

//   useEffect(() => {
//     async function highlight() {
//       const html = await codeToHtml(code, {
//         lang: 'javascript',
//         theme: 'vitesse-dark'
//       });
//       setHighlightedCode(html);
//     }

//     highlight();
//   }, [code, language]);

//   return (
//     <div
//       style={style}
//       className="code-block"
//       dangerouslySetInnerHTML={{ __html: highlightedCode }}
//     />
//   );
// }
import { PropsWithChildren } from 'react';

export function CodeBlock(props: PropsWithChildren) {
  return (
    <pre>
      <code>{props.children}</code>
    </pre>
  );
}

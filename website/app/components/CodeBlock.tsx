import { useEffect, useState } from 'react';
import { codeToHtml } from 'shikiji';

export function CodeBlock({
  children: code,
  language
}: {
  children: string;
  language: string;
}) {
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(code, {
        lang: 'javascript',
        theme: 'vitesse-dark'
      });
      setHighlightedCode(html);
    }

    highlight();
  }, [code, language]);

  return (
    <div
      className="code-block"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}

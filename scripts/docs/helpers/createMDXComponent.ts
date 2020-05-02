import ReactDOMServer from 'react-dom/server';
//@ts-ignore
import MDXC from 'mdxc';

var mdxc = new MDXC({
  linkify: true,
  typographer: true
});

export function createMDXComponent(name: string, mdxSrc: string): string {
  const source = mdxc.render(mdxSrc);
  return source;
}

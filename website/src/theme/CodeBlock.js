import * as React from 'react';

import InitialCodeBlock from '@theme-init/CodeBlock';

import { CodeOutput } from './CodeOutput';

const styles = {
  container: {},
  output: {
    position: 'relative',
    padding: '1.25em 1em 0em 1em'
  }
};

export default function CodeBlock(props) {
  const { children, showOutput, reverse = false, open } = props;
  const [isMounted, setMount] = React.useState(false);
  const [detailsOpen, toggleOpen] = React.useState(open === 'yes');
  React.useEffect(() => {
    setMount(true);
  }, []);
  let content = [];
  content.push(<InitialCodeBlock {...props} key="code" />);
  if (showOutput) {
    const handleToggle = () => {
      toggleOpen((prevOpen) => !prevOpen);
    };
    let outputContent = <CodeOutput code={children} key="output" />;
    if (typeof open === 'string') {
      outputContent = (
        <details
          key="output"
          open={detailsOpen}
          onToggle={isMounted ? handleToggle : undefined}
        >
          <summary>
            <strong>Show Output</strong>
          </summary>
          {detailsOpen && <CodeOutput code={children} key="output" />}
        </details>
      );
      content.push(outputContent);
    } else {
      content.push(<CodeOutput code={children} key="output" />);
    }
  }
  if (reverse) content = content.reverse();
  return content;
}

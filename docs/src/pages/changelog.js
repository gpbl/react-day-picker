import React from 'react';
import ReactMarkdown from 'react-markdown';

import DocPage from '../containers/DocPage';

const changelog = require(`!raw-loader!../../../CHANGELOG.md`);

export default function ChangeLog() {
  return (
    <DocPage title="Changelog">
      <ReactMarkdown>{changelog}</ReactMarkdown>
    </DocPage>
  );
}

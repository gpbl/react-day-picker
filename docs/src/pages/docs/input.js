import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import CodeBlock from '../../ui/CodeBlock';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <DocPage title="Using the input field">
    <p>
      The package includes <code>{`<DayPickerInput />`}</code>, a component
      rendering an input field and displaying react-day-picker in an overlay.
    </p>
    <h3>Add moment.js dependency</h3>
    <p>
      <a href="http://momentjs.com">moment.js</a> is required as it is used to
      validate and format the date typed by the user. Make sure you have
      installed it in your dependencies:
    </p>
    <CodeBlock language="bash">{`npm install moment --save
# or with yarn
yarn add moment`}</CodeBlock>
    <h3>Import the component</h3>
    <CodeBlock
    >{`import DayPickerInput from 'react-day-picker/DayPickerInput';`}</CodeBlock>
    <p>
      If you are using <a href="https://unpkg.com/">unpkg</a>, the component is
      available as <code>DayPicker.Input</code> global variable:
    </p>

    <CodeBlock
    >{`<script src="https://unpkg.com/moment@2/min/moment.min.js"></script>
<script src="https://unpkg.com/react-day-picker/lib/daypicker.min.js"></script>
<script type="text/javascript">
  DayPickerInput = DayPicker.Input;
</script>`}</CodeBlock>

    <h3>Example</h3>
    <CodeSample name="input-01" />

    <h2>Customizing the DayPicker</h2>
    <p>
      To change how the DayPicker appears in the overlay, use the{' '}
      <code>dayPickerProps</code>
      which accepts all the <Link to="/api/DayPicker">DayPicker props</Link>:
    </p>
    <CodeSample name="input-02" />

    <h2>Localization</h2>
    <p>
      You can use the locale and format methods of moment.js to format the value
      displayed in the input field. Remember to add the <code>locale</code>{' '}
      value to the <code>dayPickerProps</code>.
    </p>
    <p>For example, this implementation display the input field in Italian:</p>
    <CodeSample name="input-03" />
  </DocPage>
);

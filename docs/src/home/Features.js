import React from 'react';

import { css } from 'glamor';

import Grid from '../ui/Grid';
import GridColumn from '../ui/GridColumn';

import { WIDE_SCREEN } from '../constants/mediaSelector';
import imgModifiers from '../images/demo-modifiers.png';
import imgInput from '../images/demo-input.png';
import imgI18n from '../images/demo-localization.png';
import imgRange from '../images/demo-range.png';

const cssFeatures = css({
  padding: '1em 0',
  [WIDE_SCREEN]: {
    display: 'flex',
  },
  '& h3': {
    textAlign: 'center',
  },
  '& picture': {
    display: 'block',
    textAlign: 'center',
  },
});

export default function Features() {
  return (
    <div css={cssFeatures}>
      <Grid separeColumns>
        <GridColumn>
          <h3>Style days with modifiers</h3>
          <picture>
            <a href="/examples/modifiers.html">
              <img alt="Modifiers" src={imgModifiers} css={{ width: 200 }} />
            </a>
          </picture>
          <p>
            Define the disabled or selected days and change the aspect of each
            day cell with <a href="/docs/modifiers.html">modifiers</a>.
          </p>
        </GridColumn>
        <GridColumn>
          <h3>Works with input fields</h3>
          <picture>
            <a href="/examples/input-advanced.html">
              <img alt="Input field" src={imgInput} css={{ width: 200 }} />
            </a>
          </picture>
          <p>
            Display the date picker in an overlay using the{' '}
            <a href="/docs/input.html">DayPickerInput</a> component.
            <br />
            <small>
              (requires <a href="https://momentjs.com/">moment.js</a>)
            </small>
          </p>
        </GridColumn>
        <GridColumn>
          <h3>Localizable</h3>
          <picture>
            <a href="/examples/localization.html">
              <img alt="Localization" src={imgI18n} css={{ width: 200 }} />
            </a>
          </picture>
          <p>
            Use your own translation strings or import those from moment.js (if
            you use it).
          </p>
        </GridColumn>
        <GridColumn>
          <h3>Select range of days</h3>
          <picture>
            <a href="/examples/selecting-range.html">
              <img alt="Range of days" src={imgRange} width="200" />
            </a>
          </picture>
          <p>
            Specify which days should be selected in your component’s state.
          </p>
          <p>
            ...and <a href="/examples">much more</a>!
          </p>
        </GridColumn>
      </Grid>
    </div>
  );
}

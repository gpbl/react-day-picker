import { customRender } from '@test/render';
import React from 'react';
import { Root } from './Root';

function setup() {
  customRender(<Root />);
}

beforeEach(() => {
  setup();
});

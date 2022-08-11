import React, { StrictMode } from 'react';

/** Root file used by the Sandpack */
import 'react-day-picker/dist/style.css';
import { render } from 'react-dom';

import App from './App';
import './styles.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

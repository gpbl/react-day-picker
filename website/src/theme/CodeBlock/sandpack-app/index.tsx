import React, { StrictMode } from 'react';

/** Root file used by the Sandpack */
import 'react-day-picker/dist/style.css';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

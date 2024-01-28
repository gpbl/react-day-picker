import { Application } from 'typedoc';
import { MyTypedocTheme } from './theme';

import registerCustomHelpers from './resources/helpers/customHelpers';

export function load(app: Application) {
  app.renderer.defineTheme('custom-theme', MyTypedocTheme);
  registerCustomHelpers();
}

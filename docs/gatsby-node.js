const path = require('path');

exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;
  const redirects = [
    { fromPath: `/docs`, toPath: `/docs/getting-started` },
    { fromPath: `/docs/`, toPath: `/docs/getting-started` },
    { fromPath: `/docs/index.html`, toPath: `/docs/getting-started` },
    { fromPath: `/docs/basics.html`, toPath: `/docs/basic-concepts` },
    { fromPath: `/docs/modifiers.html`, toPath: `/docs/matching-days` },
    { fromPath: `/docs/input.html`, toPath: `/docs/input` },
    { fromPath: `/docs/styling.html`, toPath: `/docs/styling` },
    { fromPath: `/docs/localization.html`, toPath: `/docs/localization` },
    { fromPath: `/docs/api-daypicker.html`, toPath: `/api/DayPicker` },
    { fromPath: `/docs/api-input.html`, toPath: `/api/DayPickerInput` },
    { fromPath: `/docs/utils-date.html`, toPath: `/api/DateUtils` },
    { fromPath: `/docs/utils-locale.html`, toPath: `/api/LocaleUtils` },
    { fromPath: `/docs/utils-modifiers.html`, toPath: `/api/ModifiersUtils` },
    { fromPath: `/api`, toPath: `/api/DayPicker` },
    { fromPath: `/api/`, toPath: `/api/DayPicker` },
    { fromPath: `/examples/index.html`, toPath: `/examples/basic` },
    { fromPath: `/examples`, toPath: `/examples/basic` },
    { fromPath: `/examples/`, toPath: `/examples/basic` },
  ];

  redirects.forEach(({ fromPath, toPath }) => {
    createRedirect({
      fromPath,
      toPath,
      redirectInBrowser: true,
    });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.merge({
        resolve: {
          alias: {
            'react-day-picker$': path.resolve(__dirname, '../src/DayPicker.js'),
            'react-day-picker/lib/style.css$': path.resolve(
              __dirname,
              '../src/style.css'
            ),
            'react-day-picker/DayPickerInput$': path.resolve(
              __dirname,
              '../src/DayPickerInput.js'
            ),
            'react-day-picker/moment$': path.resolve(
              __dirname,
              '../src/addons/MomentLocaleUtils.js'
            ),
          },
        },
      });
      break;

    case 'build-css':
      break;

    case 'build-html':
      break;

    case 'build-javascript':
      break;

    default:
  }

  return config;
};

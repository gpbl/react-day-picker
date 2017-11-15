exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;
  const redirects = [
    { fromPath: `/docs`, toPath: `/docs/getting-started` },
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
    { fromPath: `/examples/index.html`, toPath: `/examples/basic` },
    { fromPath: `/examples`, toPath: `/examples/basic` },
  ];

  redirects.forEach(({ fromPath, toPath }) => {
    createRedirect({
      fromPath,
      toPath,
      redirectInBrowser: true,
    });
    console.log(`Redirecting %s to %s`, fromPath, toPath);
  });
};

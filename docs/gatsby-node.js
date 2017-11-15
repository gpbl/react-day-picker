exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;
  const redirects = [
    { fromPath: `/docs`, toPath: `/docs/getting-started` },
    { fromPath: `/api`, toPath: `/api/DayPicker` },
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

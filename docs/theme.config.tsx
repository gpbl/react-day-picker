import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <strong>📆 React DayPicker v9</strong>,
  docsRepositoryBase: `https://github.com/gpbl/react-day-picker/tree/${process.env.GIT_BRANCH}/docs`,
  // primaryHue: 43,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – React DayPicker',
      openGraph: {
        images: [{ url: `/img/og-image.png` }],
        siteName: 'React DayPicker'
      }
    };
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  project: {
    link: 'https://github.com/gpbl/react-day-picker'
  }
};

export default config;

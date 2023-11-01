import { DocsThemeConfig } from 'nextra-theme-docs';
import { Pre as NextraPre } from 'nextra/components';
import { SourceCode } from './components/SourceCode';

const config: DocsThemeConfig = {
  logo: <strong>🚧 9️⃣ React DayPicker v9 </strong>,
  docsRepositoryBase: `https://github.com/gpbl/react-day-picker/tree/next/docs`,
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
  components: {
    pre: (props: any) => {
      if (props['data-language'] === 'include-example') {
        // Use props.filename to get the example to include
        return (
          <SourceCode
            src={props.filename}
            showLineNumbers={props.showLineNumbers}
            hasCopyCode={props.hasCopyCode}
            filename={undefined} // Use the default `App.tsx`
            theme={props['data-theme']}
            lang={props['data-lang']}
          />
        );
      }
      return <NextraPre {...props} />;
    }
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
    link: 'https://github.com/gpbl/react-day-picker/tree/next'
  }
};

export default config;

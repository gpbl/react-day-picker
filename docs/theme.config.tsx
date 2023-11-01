import { DocsThemeConfig } from 'nextra-theme-docs';
import { Pre as NextraPre } from 'nextra/components';
import { SourceCode } from './components/SourceCode';

const config: DocsThemeConfig = {
  logo: <strong>🚧 9️⃣ React DayPicker v9 </strong>,
  docsRepositoryBase: `https://github.com/gpbl/react-day-picker/tree/next/docs`,
  // primaryHue: 43,
  useNextSeoProps() {
    return {
      defaultTitle: 'React DayPicker',
      titleTemplate: '%s – React DayPicker',
      openGraph: {
        images: [{ url: `/img/og-image.png` }],
        siteName: 'React DayPicker',
        title: 'React DayPicker',
        description: 'Flexible date picker component for React.',
        type: 'website',
        locale: 'en_US',
        url: 'https://react-day-picker.dev'
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

  footer: {
    text: (
      <span>
        Under{' '}
        <a href="/license" style={{ textDecoration: 'underline' }}>
          MIT licence
        </a>
        . {new Date().getFullYear()} ©{' '}
        <a href="mailto:io@gpbl.dev" style={{ textDecoration: 'underline' }}>
          gpbl
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/gpbl/react-day-picker/graphs/contributors"
          style={{ textDecoration: 'underline' }}
        >
          contributors
        </a>
        .
      </span>
    )
  },
  project: {
    link: 'https://github.com/gpbl/react-day-picker/tree/next'
  },
  banner: {
    key: '9.0-pre-release',
    text: (
      <a
        href="https://github.com/gpbl/react-day-picker/tree/next"
        target="_blank"
      >
        🚧 This is the branch for the next version of DayPicker, not released
        yet. 🚧
      </a>
    )
  },
  feedback: {
    content: <>Open an issue on GitHub →</>
  },
  editLink: {
    text: <>Edit this page →</>
  }
};

export default config;

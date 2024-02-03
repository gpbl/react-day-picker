import { Section } from '@radix-ui/themes';
import styles from './DocsPageWrapper.module.css';

export const DocsPageWrapper = ({
  children
}: {
  children?: React.ReactNode;
}) => (
  <div className={styles.DocsPageWrapper}>
    <Section
      width="100%"
      px={{ initial: '5', xs: '6', sm: '7', md: '9' }}
      size={{ initial: '2', md: '3' }}
      style={{ maxWidth: 858 }}
    >
      {children}
    </Section>
  </div>
);

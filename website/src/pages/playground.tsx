import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

import { Playground } from "../components/Playground";

export default function playground() {
  return (
    <Layout>
      <Head>
        <title>DayPicker Playground</title>
        <meta
          name="description"
          content="Customize the DayPicker component and see the code changes in real time."
        />
      </Head>
      <main>
        <Playground />
      </main>
    </Layout>
  );
}

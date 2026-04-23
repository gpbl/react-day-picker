import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

import { Playground } from "../../components/Playground";

export default function NextPlaygroundPage() {
  return (
    <Layout>
      <Head>
        <title>DayPicker Playground (next)</title>
        <meta
          name="description"
          content="Customize the upcoming DayPicker release and see the code changes in real time."
        />
      </Head>
      <main>
        <Playground basePath="/next/playground" />
      </main>
    </Layout>
  );
}

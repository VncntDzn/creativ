import type { NextPage } from "next";
import Head from "next/head";
import { PublicLayout } from "layouts";
import { LandingPage } from "components";
const Home: NextPage = () => {
  return (
    <PublicLayout>
      <Head>
        <title>CSS</title>
        <meta
          name="description"
          content="CreatiV Strategies & Solutions Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
    </PublicLayout>
  );
};

export default Home;

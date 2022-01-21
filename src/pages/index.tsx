import type { NextPage } from "next";
import Head from "next/head";
import { PublicLayout } from "layouts";
import { AboutUs, ContactUs, LandingPage, Projects } from "components";
const Home: NextPage = () => {
  return (
    <PublicLayout>
      <Head>
        <title>Creativ</title>
        <meta
          name="description"
          content="CreatiV Strategies & Solutions Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
        <AboutUs />
        <ContactUs />
        {/*  <Projects /> */}
      </main>
    </PublicLayout>
  );
};

export default Home;

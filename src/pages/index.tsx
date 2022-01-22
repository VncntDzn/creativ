import type { NextPage } from "next";
import Head from "next/head";
import { PublicLayout } from "layouts";
import { AboutUs, ContactUs, Faqs, LandingPage, Projects } from "components";
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
        <Projects />
        <Faqs />
        <ContactUs />
      </main>
    </PublicLayout>
  );
};

export default Home;

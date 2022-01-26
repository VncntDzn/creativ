import type { GetStaticProps, NextPage } from "next";
import { PublicLayout } from "layouts";
import { AboutUs, ContactUs, Faqs, LandingPage, Projects } from "components";
import { projects } from "queries";
import { ChildrenProps } from "types";
import Head from "next/head";
import client from "config";

interface HomeProps {
  children: ChildrenProps;
  projects: any;
}
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      projects: await client.fetch(projects),
    },
  };
};
const Home = ({ projects }: HomeProps) => {
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
        <Projects projects={projects} />
        <Faqs />
        <ContactUs />
      </main>
    </PublicLayout>
  );
};

export default Home;

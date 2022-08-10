import Head from "next/head";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Examples from "../components/Examples";

export default function Home() {
  return (
    <>
      <Head>
        <title>CVIEWAWAY - Currículos dinâmicos do seu jeito </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Examples />
      </Layout>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
};

export default Home;

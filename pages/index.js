import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

import bannerTwo from "../assets/bannerTwo.png";

import exploreData from "../data/exploreData.json";
import cardsData from "../data/cardsData.json";

// const Home = ({exploreData, cardsData}) => {

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Explore Nearby */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Data pulled from papareact.com */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => {
              return (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => {
              return (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>

        {/* Live Anywhere */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 p-3 -ml-3 overflow-scroll scrollbar-hide">
            {cardsData?.map((item) => {
              return (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              );
            })}
          </div>
        </section>

        {/* Call To Action Card */}
        <LargeCard
          img={bannerTwo}
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          btnTxt="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

// Pulling data from a server
// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );

//   const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
//     res.json()
//   );

//   return {
//     props: {
//       exploreData,
//       cardsData,
//     },
//   };
// }

export default Home;

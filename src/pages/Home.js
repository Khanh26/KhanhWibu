import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useGlobalContext } from "../context";
const Home = () => {
  const { topTrending, upComing } = useGlobalContext();

  return (
    <>
      <Banner data={topTrending} />
      <Card data={topTrending} title="Top 8 Trending" />
      <Card
        data={upComing}
        title="Top 8 Upcoming Anime"
        viewMore="/up-coming-anime"
      />
    </>
  );
};

export default Home;

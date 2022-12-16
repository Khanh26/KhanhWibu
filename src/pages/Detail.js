import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Banner from "../components/Banner";
const Detail = () => {
  let { slug } = useParams();
  const { anime, GetAnimeBySlug } = useGlobalContext();
  GetAnimeBySlug(slug);
  return (
    <>
      <Banner data={anime} />
    </>
  );
};

export default Detail;

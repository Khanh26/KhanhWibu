import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { useGlobalContext } from "../context";
const Detail = () => {
  let { id } = useParams();
  const { anime, GetAnimeById } = useGlobalContext();
  GetAnimeById(id);

  return (
    <>
      <Banner data={anime} />
    </>
  );
};

export default Detail;

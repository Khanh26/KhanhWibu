import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import noImage from "../assets/images/no-image.png";
const Detail = () => {
  let { id } = useParams();
  const { anime, GetAnimeById } = useGlobalContext();
  GetAnimeById(id);
  return (
    <>
      {anime.length !== 0 && (
        <div className="banner__detail_wrapper">
          <img
            src={
              anime.attributes.coverImage
                ? anime.attributes.coverImage.large
                : noImage
            }
            alt={anime.attributes.slug}
          />
        </div>
      )}
    </>
  );
};

export default Detail;

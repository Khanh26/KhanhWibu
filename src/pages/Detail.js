import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import noImage from "../assets/images/no-image.png";
import Banner from "../components/Banner";
const Detail = () => {
  let { slug } = useParams();
  const { anime, GetAnimeBySlug } = useGlobalContext();
  GetAnimeBySlug(slug);
  const [itemAnime] = anime;
  const { attributes } = itemAnime ? itemAnime : {};
  console.log(itemAnime);
  return (
    <>
      <Banner data={anime} className="aaaa" />
      {itemAnime && (
        <div className="container">
          <div className="block__content">
            <div className="block__content--thumbnail">
              <img src={attributes.posterImage.small} alt="" />
            </div>
            <div className="block__content--body"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

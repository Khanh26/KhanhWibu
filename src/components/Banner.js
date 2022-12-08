import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import API from "../Api";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    API.get(`trending/anime`).then((res) => {
      setBanner(res.data.data);
    });
    return () => {
      setBanner([]);
    };
  }, []);
  return (
    <Swiper
      className="banner__wrapper"
      modules={[Navigation, Pagination, Autoplay, Lazy]}
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      lazy
      loop
      initialSlide
      autoplay={{
        delay: 7000,
      }}
      pagination={{ clickable: true }}
    >
      {banner.map((item, key) => {
        const { attributes } = item;
        return (
          <SwiperSlide key={key}>
            <img
              className="banner__wrapper_img"
              src={attributes.coverImage.large}
              alt={attributes.canonicalTitle}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;

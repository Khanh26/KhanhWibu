import React from "react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = (props) => {
  const { data } = props;
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
      {data.map((item, key) => {
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

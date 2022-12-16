import React from "react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import noImage from "../assets/images/no-image.png";
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
      navigation={data.length > 1}
      lazy={data.length > 1}
      loop={data.length > 1}
      initialSlide={1}
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
              src={
                attributes.coverImage ? attributes.coverImage.large : noImage
              }
              alt={attributes.canonicalTitle}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;

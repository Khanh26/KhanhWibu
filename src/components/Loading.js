import React from "react";
import imageLoading from "../assets/images/loading.svg";
const Loading = () => {
  return (
    <div className="block__loading">
      <img className="block__loading--image" src={imageLoading} alt="loading" />
    </div>
  );
};

export default Loading;

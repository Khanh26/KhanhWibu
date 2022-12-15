import React from "react";
import { BsFillCaretUpFill } from "react-icons/bs";

const ScrollToTop = () => {
  const hanldeScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="block__back-to-top" onClick={hanldeScrollToTop}>
      <BsFillCaretUpFill />
    </div>
  );
};

export default ScrollToTop;

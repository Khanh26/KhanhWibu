import React from "react";
import Moment from "moment";
import {
  BsStar,
  BsTv,
  BsCalendarEvent,
  BsFillCaretRightFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { data, title, viewMore } = props;
  return (
    <div className="container">
      <div className="block__card">
        <h2 className="block__card--title">{title && <>{title}</>}</h2>
        <div className="block__card--row">
          {data.map((item, key) => {
            const { id, attributes } = item;
            return (
              <div className="block__card--column" key={key}>
                <Link to={`anime/` + id} className="block__card_item">
                  <img
                    className="block__card_item--img-thumbnail"
                    src={attributes.posterImage.small}
                    alt={attributes.posterImage.small}
                  />
                  <div className="block__card_item--body">
                    <h3 className="block__card_item--body--title">
                      {attributes.titles.en_jp
                        ? attributes.titles.en_jp
                        : attributes.titles.en}
                    </h3>
                    {attributes.averageRating && (
                      <p className="block__card_item--body--rating">
                        <BsStar /> Rating: {attributes.averageRating}/100
                      </p>
                    )}
                    <p className="block__card_item--body--show-type">
                      <BsTv /> Show: {attributes.showType}
                    </p>
                    <p className="block__card_item--body--status">
                      <BsCalendarEvent /> Date:{" "}
                      {Moment(attributes.startDate).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="block__card--view-more">
          {viewMore && (
            <Link to={viewMore}>
              View more
              <BsFillCaretRightFill className="block__card--view-more--icon" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

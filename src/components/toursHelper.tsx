import React from "react";

type Props = {
  image: string;
  date: string;
  title: string;
  info: string;
  location: string;
  duration: number;
  cost: number;
};

const ToursHelper: React.FC<Props> = ({
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
}) => {
  return (
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>
              {" " + location}
            </p>
            <p>{duration} days</p>
            <p>from ${cost}</p>
          </div>
        </div>
      </article>
  );
};

export default ToursHelper;

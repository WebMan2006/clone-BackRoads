import React from "react";
import Title from "./Title";
import { tours } from "../data";
import ToursHelper from "./toursHelper";

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="feature" subTitle="tours" />
      <div className="section-center featured-center">
          {tours.map((tour) => {
            return <ToursHelper key={tour.id} {...tour} />;
          })}
      </div>
    </section>
  );
};

export default Tour;

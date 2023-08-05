import React from "react";
import { services } from "../data";

const ServicesHelper = () => {
  return (
    <div className="section-center services-center">
      {services.map((service) => {
        return (
          <article className="service" key={service.id}>
            <span className="service-icon">
              <i className={service.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">{service.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ServicesHelper;

import React from "react";
import Title from "./Title";
import ServicesHelper from "./servicesHelper";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <ServicesHelper />
    </section>
  );
};

export default Services;

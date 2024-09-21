import React from "react";
import Services_Data from "../../assets/services";
import './Services.css'

const Services = () => {
  return (
    <div className="Services">
      <div className="ser-title">
        <h1>Services</h1>
      </div>
      <div className="ser-work">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="ser-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

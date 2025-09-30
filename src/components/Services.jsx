import React from "react";
import "./Services.css";
import { FaLeaf, FaBuilding, FaLaptopCode, FaUsers } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Why do we help with legalization?</h2>
        <p>
          We are here for UMKM in Indonesia to carry out the legalization process,
          which is sometimes complicated.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <FaLeaf className="service-icon" />
          <h3>Environmental Law</h3>
          <p>
            Environmental legal issues might occur since the planned business
            activities are designed.
          </p>
        </div>

        <div className="service-card">
          <FaBuilding className="service-icon" />
          <h3>Corporate and Commercial</h3>
          <p>
            We provide a complete range of services for the continuity of your
            business activities.
          </p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Information and Technology</h3>
          <p>
            IT not followed by the existing regulation which might cause legal
            uncertainty and business uncertainty.
          </p>
        </div>

        <div className="service-card">
          <FaUsers className="service-icon" />
          <h3>Other Services</h3>
          <p>
            In dealing with disruptive economic and legal challenges, our firm also
            provides various legal services.
          </p>
        </div>
      </div>
    </section>
  );
}

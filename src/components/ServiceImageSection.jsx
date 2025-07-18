import React from "react";
import serviceImage1 from "../images/service_01.avif";
import serviceImage2 from "../images/service_02.avif";
import serviceImage3 from "../images/service_03.avif";
import sampleImage from "../images/final-image.jpeg";
import "./ServiceImageSection.css"
const ServiceImageSection = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <h2
        style={{ marginBottom: "30px", fontWeight: "bold", fontSize: "28px" }}
      >
        the SERVICES
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
          marginBottom: "60px",
        }}
      >
        <img
          src={serviceImage1}
          alt="Service 1"
          style={{ width: "350px", height: "auto" }}
        />
        <img
          src={serviceImage2}
          alt="Service 2"
          style={{ width: "350px", height: "auto" }}
        />
        <img
          src={serviceImage3}
          alt="Service 3"
          style={{ width: "350px", height: "auto" }}
        />
      </div>

      {/* Booking Section: text and image side-by-side and centered */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h1 style={{ margin: 0, fontSize: "36px" }}>GET on our</h1>
          <h1 style={{ margin: "5px 0", fontSize: "36px", fontWeight: "bold" }}>
            BOOKS TODAY
          </h1>
          <p style={{ fontStyle: "italic", color: "#777" }}>
            (spots fill up FAST)
          </p>
          <p
            style={{ marginTop: "20px", lineHeight: "1.6", maxWidth: "600px" }}
          >
            Fiery curl color wavy frohawk ombre bantuknots. Wavy <br />
            ultrashort natural fingerwave twist fingerwave, <br />
            ultrashort natural fingerwave twist fingerwave, <br />
            <br />
            Washandgo salon fauxhawk bouncy fuchsia afropuff <br />
            fiery fingerwave hair. Locks microbraids curl ultrashort <br />
            hair, fingerwave pompadour hair braids braids <br />
            halobraid dye dredlocks.
          </p>
          <hr className="thin-line" />

          {/* Services & Pricing */}
          <div className="link-row">
            <span>SERVICES & PRICING</span>
            <span className="arrow">→</span>
          </div>

          <hr className="thin-line" />

          {/* Book an appointment */}
          <div className="link-row">
            <span>BOOK AN APPOINTMENT</span>
            <span className="arrow">→</span>
          </div>

          <hr className="thin-line" />
        </div>

        <img
          src={sampleImage}
          alt="Booking Visual"
          style={{ width: "650px", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default ServiceImageSection;

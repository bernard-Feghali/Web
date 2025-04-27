import React from "react";
import Street from "./Image/Street.png";
import RoofTop from "./Image/RoofTop.png";
import Office from "./Image/Office.png";
import Crew from "./Image/Crew.png";

const CleaningCard = ({ title, subtitle, image, alt }) => (
  <div className="col-md-6">
    <div className="bg-dark text-white p-5 rounded h-100 shadow-sm d-flex flex-column justify-content-between">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <img src={image} className="img-fluid mt-3 rounded" alt={alt} />
      </div>
      <div className="mt-4 text-center">
        <button className="btn-custom-book mt-3">Book Now</button>
      </div>
    </div>
  </div>
);

const Cleaning = () => {
  const services = [
    {
      title: "Street Cleaning",
      subtitle: "Deep clean of living rooms, bathrooms, kitchens and more.",
      image: "",
      alt: "Street Cleaning",
    },
    {
      title: "Office Cleaning",
      subtitle: "Sparkling and productive office spaces with no effort.",
      image: "",
      alt: "Office Cleaning",
    },
    {
      title: "Crew Cleaning",
      subtitle: "Sparkling and productive office spaces with no effort.",
      image:"",
      alt: "Crew Cleaning",
    },
    {
      title: "RoofTop Cleaning",
      subtitle: "Sparkling and productive office spaces with no effort.",
      image: "",
      alt: "RoofTop Cleaning",
    },
  ];

  return (
    <>
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mt-5">Punny Cleaning Headline</h1>
          <p className="lead">
            Boost your cleanliness with our top-rated services based on Apple’s
            marketing layout.
          </p>
          <button className="btn btn-outline-dark">Coming soon</button>
        </div>
      </header>

      <section className="container my-5">
        <div className="row g-4">
          {services.map((service, index) => (
            <CleaningCard key={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Cleaning;

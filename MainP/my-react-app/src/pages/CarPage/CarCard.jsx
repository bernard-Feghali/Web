import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={car.img} className="card-img-top" alt={car.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text fw-bold">{car.price}</p>
          <ul className="list-unstyled">
            {car.specs.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
          <button className="btn btn-primary mt-2">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

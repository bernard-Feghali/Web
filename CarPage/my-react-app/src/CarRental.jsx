import React from "react";
import CarCard from "./CarCard";
import cars from "./cars";

const CarRental = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 mt-4">Car Rental Service</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarRental;

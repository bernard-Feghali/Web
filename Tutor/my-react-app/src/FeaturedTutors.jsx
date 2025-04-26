import React from "react";

const tutors = [
  { name: "Alex Morgan", subject: "Math" },
  { name: "Sophie Lee", subject: "English" },
  { name: "Daniel Kim", subject: "Science" },
];

const FeaturedTutors = () => (
  <section className="tutor py-5 bg-white text-center">
    <div className="container">
      <h2 className="mb-4 fw-bold">Meet Our Top Tutors</h2>
      <div className="row g-4">
        {tutors.map((tutor, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{tutor.name}</h5>
                <p className="card-text">Subject: {tutor.subject}</p>
                <button className="btn btn-primary">Book {tutor.name}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedTutors;

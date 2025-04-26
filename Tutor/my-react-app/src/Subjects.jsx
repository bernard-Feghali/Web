import React from "react";

const subjects = [
  "Math",
  "Science",
  "English",
  "Programming",
  "Languages",
  "History",
];

const Subjects = () => (
  <section className="subjects py-5 bg-light text-center">
    <div className="container">
      <h2 className="mb-4 fw-bold">Subjects We Offer</h2>
      <div className="row g-4">
        {subjects.map((subject, i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{subject}</h5>
                <p className="card-text">
                  Get expert help in {subject} with personalized sessions.
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Subjects;

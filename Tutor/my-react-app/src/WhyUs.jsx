import React from "react";

const WhyUs = () => (
  <section className="why py-5 bg-white text-center">
    <div className="container">
      <h2 className="mb-4 fw-bold">Why Choose TutorPro?</h2>
      <div className="row">
        {[
          "Expert Tutors",
          "Personalized Plans",
          "Flexible Hours",
          "Proven Results",
        ].map((text, i) => (
          <div className="col-md-3" key={i}>
            <div className="p-4 border rounded h-100 shadow-sm">
              <h5>{text}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;

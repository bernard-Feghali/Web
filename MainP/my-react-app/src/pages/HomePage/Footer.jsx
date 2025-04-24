import React from "react";

const Footer = ({ year, company, icons }) => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <i
              className="bi bi-bootstrap-fill"
              style={{ fontSize: "30px" }}
            ></i>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © {year} {company}
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {icons.map((icon, index) => (
            <li key={index} className="ms-3">
              <a className="text-body-secondary" href="#">
                <i className={`bi bi-${icon}`} style={{ fontSize: "24px" }}></i>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

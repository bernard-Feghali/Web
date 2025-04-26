import React from "react";

const Navbar = ({ brandName, links, showSearch, showAuthButtons }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {brandName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link active" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {showSearch && (
            <form className="searchBox d-flex me-3" role="search">
              <input
                className="searchInput form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="searchButton btn btn-outline-light"
                type="submit"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 2a8 8 0 105.293 14.293l5.207 5.207 1.414-1.414-5.207-5.207A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                </svg>
              </button>
            </form>
          )}
          {showAuthButtons && (
            <div className="d-flex">
              <a href="#" className="btn btn-outline-light me-2">
                Login
              </a>
              <a href="#" className="btn btn-primary">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//This is added to navigate from the View details button to the Page:
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FeaturesSection = ({ features }) => {
  return (
    <div className="container marketing">
      <div className="row text-center">
        {features.map((item, index) => (
          <div key={index} className="col-lg-4 mb-5">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal mt-3">{item.title}</h2>
            <p>{item.name}</p>
            <p>
              {/* Replace <a> with <Link> */}
              <Link 
                to={item.link} 
                className="btn btn-secondary"
              >
                View details »
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;



// import React from "react";
// const FeaturesSection = ({ features }) => {
//   return (
//     <div className="container marketing">
//       <div className="row text-center">
//         {features.map((item, index) => (
//           <div key={index} className="col-lg-4 mb-5">
//             <svg
//               className="bd-placeholder-img rounded-circle"
//               width="140"
//               height="140"
//               xmlns="http://www.w3.org/2000/svg"
//               role="img"
//               preserveAspectRatio="xMidYMid slice"
//             >
//               <rect
//                 width="100%"
//                 height="100%"
//                 fill="var(--bs-secondary-color)"
//               ></rect>
//             </svg>
//             <h2 className="fw-normal mt-3">{item.title}</h2>
//             <p>{item.name}</p>
//             <p>
//               <a className="btn btn-secondary" href="#">
//                 View details »
//               </a>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;

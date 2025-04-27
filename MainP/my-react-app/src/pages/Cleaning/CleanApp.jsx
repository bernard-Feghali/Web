
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Cleaning from "./Cleaning";


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Contact", href: "/contact" },
];

<Footer
  year={new Date().getFullYear()}
  company="Our Mahal Name"
  icons={["twitter", "instagram", "facebook"]}
/>;
function CleanApp() {
  

  return (
    <>
     <Navbar
      brandName="SkillShare"
      links={links}
      showSearch={true}
      showAuthButtons={true}
    />

    <Cleaning />

    
    </>
  )
}

export default CleanApp;

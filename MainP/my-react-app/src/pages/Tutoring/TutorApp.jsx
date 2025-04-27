
import Hero from "./Hero";
import Navbar from "../HomePage/Navbar";
import WhyUs from "./WhyUs";
import Subjects from "./Subjects";
import FeaturedTutors from "./FeaturedTutors";
import Footer from "../HomePage/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Contact", href: "/contact" },
];

function TutorApp() {
  return (
    <>
     <Navbar
      brandName="SkillShare"
      links={links}
      showSearch={true}
      showAuthButtons={true}
    />
    <Hero />
    <WhyUs />
    <Subjects />
    <FeaturedTutors />
    
     
    </>
  )
}

export default TutorApp;

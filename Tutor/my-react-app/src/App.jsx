
import Hero from "./Hero";
import Navbar from "./Navbar";
import WhyUs from "./WhyUs";
import Subjects from "./Subjects";
import FeaturedTutors from "./FeaturedTutors";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

function App() {
  return (
    <>
     <Navbar
      brandName="Our Mahal Name"
      links={links}
      showSearch={true}
      showAuthButtons={true}
    />
    <Hero />
    <WhyUs />
    <Subjects />
    <FeaturedTutors />
    <Footer
      year={new Date().getFullYear()}
      company="Our Mahal Name"
      icons={["twitter", "instagram", "facebook"]}
    />
     
    </>
  )
}

export default App

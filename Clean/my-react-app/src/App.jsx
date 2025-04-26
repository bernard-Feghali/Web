
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cleaning from "./Cleaning";


const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

<Footer
  year={new Date().getFullYear()}
  company="Our Mahal Name"
  icons={["twitter", "instagram", "facebook"]}
/>;
function App() {
  

  return (
    <>
     <Navbar
      brandName="Our Mahal Name"
      links={links}
      showSearch={true}
      showAuthButtons={true}
    />

    <Cleaning />

    <Footer
      year={new Date().getFullYear()}
      company="Our Mahal Name"
      icons={["twitter", "instagram", "facebook"]}
    />

    </>
  )
}

export default App

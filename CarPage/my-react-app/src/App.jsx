
import './App.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import CarRental from "./CarRental";

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
  <CarRental />

<Footer
      year={new Date().getFullYear()}
      company="Our Mahal Name"
      icons={["twitter", "instagram", "facebook"]}
    />
    </>
  )
}

export default App

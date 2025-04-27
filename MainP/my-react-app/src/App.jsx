import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, href } from 'react-router-dom';
import Navbar from './pages/HomePage/Navbar.jsx';
import Carousel from "./pages/HomePage/Carousel.jsx";
import FeaturesSection from "./pages/HomePage/FeaturesSection.jsx";
import Footer from './pages/HomePage/Footer.jsx';
import CarRental from './pages/CarPage/CarRental.jsx'; // Import your CarPage component
import Login from './pages/LoginPage/Login';
import Register from './pages/LoginPage/Register.jsx';
//images
import CarImage from "./pages/HomePage/Images/Car.png";
import CleanImage from "./pages/HomePage/Images/Clean.png";
import TutorImage from "./pages/HomePage/Images/Tutor.png";
import CarRentalLogo from './Images/CarRental.png';
//pages
import ContactForm from "./pages/contact-form/ContactForm.jsx";
import TutorApp from './pages/Tutoring/TutorApp.jsx';
import CleanApp from './pages/Cleaning/CleanApp.jsx';




// Your existing data
const carouselImages = [
  {
    image: CarImage,
    title: "",
    alt: "Creative Design",
    position: "text-start",
  },
  {
    image: CleanImage,
    title: "",
    alt: "Customizing Products",
    position: "text-center",
  },
  {
    image:
      TutorImage,
    title: "Express",
    alt: "Artistic Expression",
    position: "text-end",
  },
];

const features = [
  {
    name: "T&Co",
    title: "Car Rental",
    image: CarRentalLogo,
    link: "/cars"
  },

  {
    name: "Cleaning",
    title: "Clean",
    image: CarRentalLogo,
    link: "/cleaning"
  },

  {
    name: "tutors",
    title: "Tutoring",
    image: CarRentalLogo,
    link: "/tutoring"
  },
  // ... (keep your other features)
];

// Updated links to include CarPage
const links = [
  { name: "Home", href: "/" },
  // { name: "Cars", href: "/cars" }, // New link to CarPage
  { name: "About", href: "#" },
  { name: "Contact", href: "/contact" },
];

function HomePage() {
  return (
    <>
      <Carousel images={carouselImages} />
      <FeaturesSection features={features} />
    </>
  );
}

function App() {
  
  return (
    <Router>
      <Navbar
        brandName="SkillShare"
        links={links}
        showSearch={true}
        showAuthButtons={true}
      />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactForm />} /> {/*Contact Form Route*/}
        <Route path="/cleaning" element={<CleanApp/>} />
        <Route path="/tutoring" element={<TutorApp/>} />
        <Route path="/cars" element={<CarRental />} /> {/* CarPage route */}
      </Routes>
      
      <Footer
        year={new Date().getFullYear()}
        company="SkillShare"
        icons={["twitter", "instagram", "facebook"]}
      />
    </Router>
  );
}

export default App;



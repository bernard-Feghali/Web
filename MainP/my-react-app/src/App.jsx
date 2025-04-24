import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, href } from 'react-router-dom';
import Navbar from './pages/HomePage/Navbar.jsx';
import Carousel from "./pages/HomePage/Carousel.jsx";
import FeaturesSection from "./pages/HomePage/FeaturesSection.jsx";
import Footer from './pages/HomePage/Footer.jsx';
import CarRental from './pages/CarPage/CarRental.jsx'; // Import your CarPage component
// In your App.jsx or routing file
import Login from './pages/LoginPage/Login';
import Register from './pages/LoginPage/Register.jsx';

// Your existing data
const carouselImages = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
    title: "Create",
    alt: "Creative Design",
    position: "text-start",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    title: "Personalize",
    alt: "Customizing Products",
    position: "text-center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1400&q=80",
    title: "Express",
    alt: "Artistic Expression",
    position: "text-end",
  },
];

const features = [
  {
    name: "T&Co",
    title: "Car Rental",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    link: "/cars"
  },

  {
    name: "Cleaning",
    title: "Clean",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    link: "/cleaning"
  },

  {
    name: "tutors",
    title: "Tutoring",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    link: "/tutoring"
  },
  // ... (keep your other features)
];

// Updated links to include CarPage
const links = [
  { name: "Home", href: "/" },
  // { name: "Cars", href: "/cars" }, // New link to CarPage
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
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
        brandName="Our Mahal Name"
        links={links}
        showSearch={true}
        showAuthButtons={true}
      />
    {/* Connecting To Login Page   */}
      <Routes>
      {/* ... other routes ... */}
      <Route path="/login" element={<Login />} />
    </Routes>
    {/* End Cnnection Of Login*/}


    {/* Connecting To Sign up Page   */}
    <Routes>
      {/* ... other routes ... */}
      <Route path="/register" element={<Register />} />
    </Routes>
     {/* end connection To Sign up Page   */}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarRental />} /> {/* CarPage route */}
      </Routes>
      
      <Footer
        year={new Date().getFullYear()}
        company="Our Mahal Name"
        icons={["twitter", "instagram", "facebook"]}
      />
    </Router>
  );
}

export default App;



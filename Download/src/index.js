import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Carousel from "./carousel";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
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
const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];
const features = [
  {
    name: "Antonios",
    title: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Maria",
    title: "Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "George",
    title: "Marketing",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Antonios",
    title: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Maria",
    title: "Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "George",
    title: "Marketing",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Antonios",
    title: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Maria",
    title: "Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "George",
    title: "Marketing",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];
<Footer
  year={new Date().getFullYear()}
  company="Our Mahal Name"
  icons={["twitter", "instagram", "facebook"]}
/>;

ReactDOM.render(
  <>
    <Navbar
      brandName="Our Mahal Name"
      links={links}
      showSearch={true}
      showAuthButtons={true}
    />

    <Carousel images={carouselImages} />

    <FeaturesSection features={features} />

    <Footer
      year={new Date().getFullYear()}
      company="Our Mahal Name"
      icons={["twitter", "instagram", "facebook"]}
    />
  </>,
  document.getElementById("root")
);

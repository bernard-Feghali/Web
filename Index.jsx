import React from "react";

const products = [
  { id: 1, name: "Elegant Dress", price: "$79.99", image: "https://via.placeholder.com/250" },
  { id: 2, name: "Classic Jacket", price: "$89.99", image: "https://via.placeholder.com/250" },
  { id: 3, name: "Casual T-Shirt", price: "$29.99", image: "https://via.placeholder.com/250" },
];

const Header = () => (
  <header className="bg-gray-900 text-white text-center p-6">
    <h1 className="text-3xl font-bold">Design Clothes</h1>
    <p>Unique Fashion, Tailored for You</p>
  </header>
);

const Hero = () => (
  <section className="text-center py-16 bg-cover bg-center text-white bg-gray-800">
    <h2 className="text-4xl font-bold">Elevate Your Style</h2>
    <p className="mt-4">Explore our latest collection of stylish and comfortable designs.</p>
  </section>
);

const Product = ({ name, price, image }) => (
  <div className="bg-white p-4 shadow-md rounded-lg text-center">
    <img src={image} alt={name} className="w-full rounded-md" />
    <h3 className="text-xl font-bold mt-2">{name}</h3>
    <p className="text-gray-700">{price}</p>
  </div>
);

const ProductsSection = () => (
  <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </section>
);

const Contact = () => (
  <section className="text-center p-6">
    <h2 className="text-2xl font-bold">Contact Us</h2>
    <p>Email: info@designclothes.com</p>
    <p>Phone: +123 456 7890</p>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center p-4 mt-6">
    <p>&copy; 2025 Design Clothes. All Rights Reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductsSection />
      <Contact />
      <Footer />
    </div>
  );
}

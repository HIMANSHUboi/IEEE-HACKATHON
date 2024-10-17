import React from "react";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Summarize
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            PDF files
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Stylish button section */}
        <div className="flex justify-center">
          <button className="text-center cursor-pointer bg-primary text-white py-2 px-6 rounded-md shadow-lg transition duration-300 hover:bg-secondary">
            Try ByteMe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

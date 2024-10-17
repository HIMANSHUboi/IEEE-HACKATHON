
import React from "react";

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Key Features of Advanced Scanners
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Enhanced Scanning Capabilities
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore the advanced features that make modern scanners essential tools for professionals across various industries.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 md:gap-5 place-items-center">
          <div
            data-aos="zoom-in"
            className="bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white p-8 rounded-xl shadow-xl duration-300 group max-w-[800px] text-left"
          >
            <ul className="list-disc pl-6 text-gray-600 group-hover:text-white duration-300 space-y-6">
              <li>
                <h2 className="text-xl font-semibold mb-2">End-to-End Encryption</h2>
              
              </li>
              <li>
                <h2 className="text-xl font-semibold mb-2">Intelligent Image Processing</h2>
              
              </li>
              <li>
                <h2 className="text-xl font-semibold mb-2">Document Compression</h2>
               
              </li>
              <li>
                <h2 className="text-xl font-semibold mb-2">High-Resolution Scanning</h2>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

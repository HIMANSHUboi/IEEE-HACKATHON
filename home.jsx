import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to ByteMe</h1>
      <p className="text-lg mb-4">Discover our amazing products and great deals!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
          <p>Check out our top picks for this season.</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Special Offers</h2>
          <p>Don't miss out on our limited-time deals!</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">New Arrivals</h2>
          <p>Be the first to see our latest products.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
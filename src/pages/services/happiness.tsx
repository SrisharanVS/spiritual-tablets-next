import React from 'react';

const HappinessServiceDetails = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/alice-dietrich-FwF_fKj5tBo-unsplash.jpeg"
            alt="Happiness Service"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Happiness Services</h2>
          <p className="text-gray-700 text-lg">
            Every soul took a human form on this mother earth to experience the desired happiness. Enjoyment Science is all about assembling various principles that enables us to undergo the different ways we can experience happiness and how can we lead a life in absolute bliss, enjoying every moment. There is science behind every small activity we do, similarly, we have science behind living every moment in happiness! That is the Enjoyment Science or Ananda Śāstram! Enjoyment Science Academy (Aandho Brahma) in association with Spiritual Tablets is conducting online programs (every Saturday and Sunday) where people from different countries to participate to exhibit any art that they are into.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default HappinessServiceDetails; 
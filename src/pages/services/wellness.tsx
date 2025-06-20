import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WellnessServiceDetails = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/jeremy-thomas-FO7bKvgETgQ-unsplash.jpeg"
            alt="Wellness Service"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Wellness Services</h2>
          <p className="text-gray-700 text-lg">
            Wellness is the overall wellbeing of a person physically, emotionally, mentally, and spiritually. Wellness is the ultimate wealth. Spiritual Tablets offers comprehensive and well-structured wellness services to imbibe spiritual learning to attain physical health, emotional balance, mental peace, and spiritual healing. A wellness center includes a pyramid, vegetarian zone, spiritual library, serene green zone, guidance of spiritual masters, and a tranquil atmosphere. Enjoy the benefits of spiritual healing and absorb the essence of spiritual knowledge in the immersing calmness of a wellness center.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default WellnessServiceDetails; 
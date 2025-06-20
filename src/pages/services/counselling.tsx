import React from 'react';

const CounsellingServiceDetails = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/priscilla-du-preez-7s3biR6HATU-unsplash.jpeg"
            alt="Counselling Service"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Counselling Services</h2>
          <p className="text-gray-700 text-lg">
            We can always make our lives better by understanding the essence and depth of living and life. Imagine if we have a helping hand of a guide who can touch our lives with equanimity. Do you need help to understand the condition or situation that you are going through in your life, in health, relationships, career, or finance? You have come to the right place. Spiritual Tablets offer counselling services where a trained Spiritual Tablets counsellor will help you with their unwavering guidance, support, and motivation to explore the different facets of your life scenarios. You can register yourself through the online form provided on the website. You will be able to meet the counsellor in Acharya Sangatya, in person at a counselling center or online over a zoom call.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default CounsellingServiceDetails; 
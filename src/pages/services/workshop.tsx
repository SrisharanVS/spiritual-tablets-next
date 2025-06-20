import React from 'react';

const WorkshopServiceDetails = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpeg"
            alt="Workshop Service"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Workshop Services</h2>
          <p className="text-gray-700 text-lg">
            The power of intelligence lies in acquiring knowledge that seeds in us the skills to handle and solve our problems. The most vital knowledge is acquired by seeking the spiritual truth and applying them to our day-to-day life. Spiritual Tablets offers well-structured, well-paced workshop services, which will be an eye opener in embracing the relationship between physical health and spiritual intellect. Spiritual Tablets also presents well-augmented spiritual book clubs, and experience-sharing sessions to gain spiritual knowledge and expand your consciousness. Spiritual seekers who want to become spiritual doctors can attend the Level-1 workshops. Spiritual Tablets also gives a platform for you to become Spiritual Tablets counsellor and workshop trainer, and help other people to attain immense benefit by sharing your knowledge and experiences.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default WorkshopServiceDetails; 
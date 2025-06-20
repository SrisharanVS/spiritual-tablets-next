import React from 'react';

const MeditationServiceDetails = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/windows-wpIYy2lZ04s-unsplash-scaled.jpeg"
            alt="Meditation Service"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meditation Services</h2>
          <p className="text-gray-700 text-lg mb-6">
            Meditation is the art and science of connecting to the universal consciousness and getting in touch with your inner self. During meditation, we draw in the cosmic energy that flows into us, leaving us with an immense feeling of calmness and relaxation. Ana-pana-sati meditation is a simple and most effective meditation technique. Ana refers to "In-Breath", Apana refers to "Out-Breath", and sati refers to "Be With". Ana-pana-sati meditation is simply focusing on the in-breath and out-breath.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            A regular daily routine of meditation helps in uplifting our general well-being, improving our health, relieving stress, and experiencing a deeper connectedness with the universal consciousness. Live a happier, healthier, and fulfilling life with inner peace and harmony. Attend regular guided Ana-pana-sati meditation sessions offered by Spiritual Tablets, followed by knowledge session. Experience the benefits of "Group" and "Full Moon" meditation sessions.
          </p>
          <p className="text-gray-700 text-lg">
            Experience the calmness flowing into your entire day that reflects on different facets of your life like work, relationships, sports, arts, interpersonal, and intrapersonal; improvement in focus and efficiency, change in perception, coming out of limited belief system, and so on.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default MeditationServiceDetails; 
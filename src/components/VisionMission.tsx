import React from 'react';
import Image from 'next/image';

const VisionMission = () => {
  return (
    <section id="vision" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Chakra Image */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <Image
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Artboard-812.png"
                alt="Spiritual chakra meditation illustration showing spiritual levels &#39;Intellect, Wisdom, Wellness, Meditation&#39;"
                width={600}
                height={400}
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>

          {/* Right Column - Vision and Mission Content */}
          <div className="space-y-8">
            {/* Vision Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Spread awareness about the importance of vegetarianism and the spiritual 
                principles of life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Empower every human to lead a healthy life, free of challenges, applying spiritual 
                tablets wisdom capsules at body, mind and soul levels.
              </p>
            </div>

            {/* Mission Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                The spiritual tablet research foundation aims to educate, advocate, impart 
                spiritual wisdom. Further, apply this spiritual wisdom based on spiritual tablets 
                and thus eradicate the root cause of people`%apos;`s problems at all levels.
              </p>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-700">Global Mission by 2022</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Spiritual Tablet health care services will touch over 5000 lives.</li>
                  <li>Spread awareness of Spiritual Tablets services to over 2,00,000 people.</li>
                  <li>Increase the number of spiritual health counsellors to over 300.</li>
                  <li>Spread our footprint to 25 countries.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;


import React from 'react';
import Image from 'next/image';

const DonateHero = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <Image
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//donate-hero.jpeg"
                alt="Spiritual chakra meditation illustration showing spiritual levels &#39;Intellect, Wisdom, Wellness, Meditation&#39;"
                width={600}
                height={400}
                className="w-full h-auto "
              />
            </div>
          </div>

          {/* Right Column - Vision and Mission Content */}
          <div className="space-y-8">
            {/* Vision Section */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                While the workshops and counselling are free of cost, the organization incurs sizeable expenditure on the following counts:
              </p>
            </div>

            {/* Mission Section */}
            <div className="space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Maintenance of website.</li>
                  <li>Publishing and translation of books in different languages.</li>
                  <li>Conducting online sessions for the benefit of the Western world.</li>
                  <li>Conversion of spiritual tablets modules into PDF and audiovisual modes</li>
	  	  <li>Cultural programs, travel of the faculty and establishment of new centres</li>
                </ol>
		<p className="text-gray-600 leading-relaxed">
		  We request, one and all, to avail this divine opportunity by showering donations liberally and reap the benefits of this virtuous deed. Our deepest gratitude, in advance.
		</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;


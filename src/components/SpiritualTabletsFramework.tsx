import React from 'react';
import Image from 'next/image';

const SpiritualTabletsFramework = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
          <div className="space-y-8">
            {/* Text Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Spiritual Tablets Framework (STF)</h2>
              <p className="text-gray-600 leading-relaxed">
                The pillars of healing in the Spiritual Health Care System lies in integrating the following
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Individual ignorance lies at the root of all suffering. Wisdom encapsulated as the Spiritual Tablets helps minimize and eliminate the same.</li>
                <li>Quantum Physics defines us as a combination of Energy, Frequency, Information and Matter.</li>
                <li>Emotions = Energy in Motion. (Motion involves Frequency)</li>
                <li>Lowering of Frequencies is a manifestation of Disease and Discomfort.</li>
                <li>We create our own reality through our Thoughts.</li>
                <li>It is important to lead a balanced lifestyle aligned to our `&quot;`Purpose of Life`&quot;`</li>
              </ol>
              <p className="text-gray-600 leading-relaxed">
                Thus health = effective management of the above pillars. As we go through our life phases, we encounter challenges. The spiritual health care system empowers us with wisdom capsules that stitches the above pillars with the power of Meditation to lead a smooth & happy life journey.
              </p>
            </div>
          </div>
	   <div className="flex justify-center">
            <div className="relative max-w-md">
              <Image
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Artboard-712-png-low-resultion.png"
                alt="Spiritual chakra meditation illustration showing spiritual levels 'Intellect, Wisdom, Wellness, Meditation'"
                width={600}
                height={400}
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualTabletsFramework;


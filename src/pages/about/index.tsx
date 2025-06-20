import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#333] flex flex-col">
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-center justify-center py-12 px-4"
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="flex-1 text-white max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Story behind Spiritual Tablets</h2>
            <p className="mb-4 text-sm md:text-base">
              This Spiritual Health Science Journey started in the Year 1998. The first Organization registered was under the Name DHYANAROGYA SEVA SANGAM: REGD NO: 514/2008, after 10 years of Teaching & Spreading awareness. Later it was dissolved to lay path for Spiritual Tablets Research Foundation to meet all Global requirements. Subsequently, following Trusts have been established to support Residential Pyramid Training Centers through Spiritual Tablets.
            </p>
            <div className="font-semibold mt-6 mb-2">Health Scenario Today:</div>
            <p className="mb-4 text-sm md:text-base">
              Health as defined by WHO – State of complete physical, mental, and social wellbeing and not merely absence of disease or infirmity (physical or mental weakness). This would mean a leading a Balanced & Healthy life.
            </p>
            <p className="mb-4 text-sm md:text-base">
              If we peep into the lifestyle in the past, say during our grand parents' days, we will observe that there was an expression of love, compassion, concern in the air. People would help each other at every stage and the day-to-day challenges would get addressed without stress as there was help within reach – many times even without asking. Concern was more around wellbeing, relationships and less towards money and materialistic world. SELF always came after the REST.
            </p>
            <p className="mb-4 text-sm md:text-base">
              Over the years this principle has reversed itself and today our lifestyle is built around SELF, Materialism, and Money. Consequently our existence is filled with competition, stress, greed and lack. This is turn has contributed to the wide spread of disease and ill-health. Today cost of health care service has taken a commercial dimension and become out of reach for many. Cost of health care is seen as a BANE to LIFE by many.
            </p>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={"https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//tablets-body-Low.png"}
              alt="Human body with tablets"
              className="max-h-[650px] w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default About; 

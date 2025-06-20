import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const doctors = [
  {
    id: 'balaram-prathap',
    category: 'Pediatrics',
    name: 'Balaram Prathap',
    description: `I am Balaram Prathap, a medical doctor practicing Pediatrics for more than 30 years in West Godavari, Andhra Pradesh. We are four in our family. My wife is a home maker and I have two children - a daughter and son. Both of them are engineers and they settled in USA.`
  },
  {
    id: 'hema-nalini-nc',
    category: 'Adolescent Health',
    name: 'Dr. Hema Nalini N.C',
    description: `I am Dr.HemaNalini N.C, my spiritual journey and quest started in my childhood itself. I born and brought up in Guntur, I am the eldest of the five children and I was lucky to have broad minded, well educated parents. Though I belong to a Hindu-Brahmin family, we never had blind faiths or beliefs, and my parents inculcated the habit of reading books since my childhood.`
  },
  {
    id: 'g-parvathi-devi',
    category: 'Dentist',
    name: 'Dr. G.Parvathi Devi,',
    description: `My name is Dr. G.Parvathi Devi and who have been meditating since 2003. I have started meditating to understand what happens exactly in meditation, how we can receive energy just by observing the breath, how I could see many things with my eyes closed and how I could see things which I had never seen before.`
  },
  {
    id: 'himaja',
    category: 'General',
    name: 'Dr. Himaja',
    description: `I am Dr.Himaja from Visakhapatanam. I completed my MBBS in 2013, after studies I worked for a year in Indus Hospital & NRI hospital, currently I am preparing for M.D exams.`
  },
  {
    id: 'hari',
    category: 'MBBS',
    name: 'Dr. Hari',
    description: `I am Dr.Hari from Nellore, doing post graduation in Bangalore. I came into meditation in 2009, as I was suffering from gastric problem. In 2009 my friend took me to PSM, Pyramid Spiritual Society. There I have seen many books, pyramid and number of people meditating. I meditated for 30 minutes and felt flow of energy in my spine. From then I continued to do meditation every day and realized meditation cures health problems.`
  },
  {
    id: 'kailash-patil',
    category: 'Medical Officers',
    name: 'Dr. Kailash Patil',
    description: `Myself Dr. Kailash Patil, 35, and my wife Dr. Anuradha K Patil are Ayush Doctors. We work as medical officers in government sector. Our daughter Chandrika, 3 years old is named by Patriji Sir. We are born vegetarians.`
  },
];

const SpiritualDoctors: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">Spiritual Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-12">
            {/* Pediatrics */}
            <div className="relative flex flex-col h-full bg-white rounded-lg p-6">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-500 mb-1">Pediatrics</div>
                <div className="font-bold text-lg text-gray-800">Balaram Prathap</div>
                <div className="text-sm text-gray-700 mt-2">{doctors[0].description}</div>
              </div>
              <button
                className="absolute bottom-6 right-6 text-2xl text-gray-700 hover:text-spiritual-green transition-colors"
                onClick={() => router.push(`/about/spiritual-doctors/${doctors[0].id}`)}
                aria-label="View details"
              >
                &rarr;
              </button>
            </div>
            {/* Adolescent Health */}
            <div className="relative flex flex-col h-full bg-white rounded-lg p-6">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-500 mb-1">Adolescent Health</div>
                <div className="font-bold text-lg text-gray-800">Dr. Hema Nalini N.C</div>
                <div className="text-sm text-gray-700 mt-2">{doctors[1].description}</div>
              </div>
              <button
                className="absolute bottom-6 right-6 text-2xl text-gray-700 hover:text-spiritual-green transition-colors"
                onClick={() => router.push(`/about/spiritual-doctors/${doctors[1].id}`)}
                aria-label="View details"
              >
                &rarr;
              </button>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-12">
            {/* Dentist */}
            <div className="relative flex flex-col h-full bg-white rounded-lg p-6">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-500 mb-1">Dentist</div>
                <div className="font-bold text-lg text-gray-800">Dr. G.Parvathi Devi,</div>
                <div className="text-sm text-gray-700 mt-2">{doctors[2].description}</div>
              </div>
              <button
                className="absolute bottom-6 right-6 text-2xl text-gray-700 hover:text-spiritual-green transition-colors"
                onClick={() => router.push(`/about/spiritual-doctors/${doctors[2].id}`)}
                aria-label="View details"
              >
                &rarr;
              </button>
            </div>
            {/* General */}
            <div className="relative flex flex-col h-full bg-white rounded-lg p-6">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-500 mb-1">General</div>
                <div className="font-bold text-lg text-gray-800">Dr. Himaja</div>
                <div className="text-sm text-gray-700 mt-2">{doctors[3].description}</div>
              </div>
              <button
                className="absolute bottom-6 right-6 text-2xl text-gray-700 hover:text-spiritual-green transition-colors"
                onClick={() => router.push(`/about/spiritual-doctors/${doctors[3].id}`)}
                aria-label="View details"
              >
                &rarr;
              </button>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-12">
            {/* MBBS */}
            <div className="relative flex flex-col h-full bg-white rounded-lg p-6">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-500 mb-1">MBBS</div>
                <div className="font-bold text-lg text-gray-800">Dr. Hari</div>
                <div className="text-sm text-gray-700 mt-2">{doctors[4].description}</div>
              </div>
              <button
                className="absolute bottom-6 right-6 text-2xl text-gray-700 hover:text-spiritual-green transition-colors"
                onClick={() => router.push(`/about/spiritual-doctors/${doctors[4].id}`)}
                aria-label="View details"
              >
                &rarr;
              </button>
            </div>
            {/* Medical Officers */}
            <div className="relative flex flex-col h-full bg-white rounded-lg p-6">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-500 mb-1">Medical Officers</div>
                <div className="font-bold text-lg text-gray-800">Dr. Kailash Patil</div>
                <div className="text-sm text-gray-700 mt-2">{doctors[5].description}</div>
              </div>
              <button
                className="absolute bottom-6 right-6 text-2xl text-gray-700 hover:text-spiritual-green transition-colors"
                onClick={() => router.push(`/about/spiritual-doctors/${doctors[5].id}`)}
                aria-label="View details"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default SpiritualDoctors; 
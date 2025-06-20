import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import SpiritualTabletsFramework from '@/components/SpiritualTabletsFramework';
import Founder, { FounderImageSection, GenesisSection, OverviewGenesisSection, HealthcareMeditationServicesSection, StatsSection, TestimonialCarousel } from '@/components/Founder';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  const [showOverview, setShowOverview] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Header />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <Hero />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
        <VisionMission />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <SpiritualTabletsFramework />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
        <Founder />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
        <FounderImageSection />
      </motion.div>
      {showOverview ? (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
          <OverviewGenesisSection />
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
          <GenesisSection onKnowMore={() => router.push('/overview-genesis')} />
        </motion.div>
      )}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }}>
        <HealthcareMeditationServicesSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.7 }}>
        <StatsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.8 }}>
        <TestimonialCarousel />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;

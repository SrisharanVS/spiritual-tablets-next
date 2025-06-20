import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OverviewGenesisSection } from '@/components/Founder';

const OverviewGenesisPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 bg-white">
      <OverviewGenesisSection />
    </main>
    <Footer />
  </div>
);

export default OverviewGenesisPage; 
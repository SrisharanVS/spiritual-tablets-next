import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Anandho_Brahma: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Video section */}
        <div className="w-full lg:w-1/2 aspect-video relative">
          <iframe
            src="https://www.youtube.com/embed/5t-E8wmtSII?si=rvG0IIeX9EQvdpt3"
            title="Aanandho Brahma - Telugu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Aanandho Brahma - Telugu
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            This event is organised every Saturday by <strong>'Aanandho Brahma'</strong> (Enjoyment Science Academy) 
            in association with SuDarshini Academy of Music & Soul Science. Sessions are taken basing on the main theme 
            that music flows from within, beyond any barriers and through <em>sādhana</em> everyone can activate the 
            state of Soul level singing. This is a live event on Aanandho Brahma Telugu YouTube Channel. Anyone who are 
            interested in singing or learning music can join these sessions.
          </p>
          <p className="text-gray-800 text-base font-semibold">
            <span className="font-bold">Timings</span> – Every 1st & 3rd Saturday 4.00 – 5:00 PM IST
          </p>
        </div>
      </div>
      {/* Google Calendar Embed */}
      <div className="max-w-6xl mx-auto mt-12 mb-12">

  
    <iframe
      src="https://calendar.google.com/calendar/embed?src=naveenkrishnasadanala%40gmail.com&ctz=Asia%2FKolkata"
      style={{ border: 0 }}
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
      
    ></iframe>
  
</div>

      <Footer />
    </div>
  );
};

export default Anandho_Brahma;

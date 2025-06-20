import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';

const Meditation = () => {
  useEffect(() => {
    const scriptId = 'google-platform';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Meditation</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                A regular daily routine of meditation helps in uplifting our general well-being, improving our health,
                relieving stress, and experiencing a deeper connectedness with the universal consciousness. Live a happier,
                healthier, and fulfilling life with inner peace and harmony. Attend regular guided Ana-pana-sati meditation
                sessions offered online by Spiritual Tablets, followed by knowledge session. These sessions are being
                conducted at different time zones and no prior registration is necessary. Details for joining the session
                are given below.
              </p>
            </div>

            <ul className="space-y-6 text-gray-700">
              <li>
                <div className="font-semibold text-gray-900 mb-2">• Dhyana Nepal – Daily Meditation (Hindi)</div>
                <ul className="ml-4 space-y-1">
                  <li>• Timings – 4.30 PM – 5.30 PM IST</li>
                  <li>• 7.00 AM – 8 AM EST</li>
                  <li>• 4.45 PM – 5.45 PM Nepal</li>
                  <li>• Zoom Details: ID – 3824868932/Pwd – dhyan</li>
                </ul>
              </li>

              <li>
                <div className="font-semibold text-gray-900 mb-2">• Daily Meditation by Andaman PSSM Team (Hindi)</div>
                <ul className="ml-4 space-y-1">
                  <li>• Timings – 5.30 AM – 6.30 AM IST</li>
                  <li>• Zoom Details: Id: 84609335415 / Pwd – 1234</li>
                </ul>
              </li>

              <li>
                <div className="font-semibold text-gray-900 mb-2">• Oneness Meditation Qatar Meditation and Wisdom sharing sessions:</div>
                <ul className="ml-4 space-y-2">
                  <li>
                    <div className="font-medium">• Every Tuesday</div>
                    <div className="ml-4 space-y-1">
                      <div>Time: 4:00 PM to 5:00 PM Qatar time</div>
                      <div>6:30 PM to 7:30 PM IST</div>
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">• Every Friday</div>
                    <div className="ml-4 space-y-1">
                      <div>Time: 5:00 PM to 6:00 PM Qatar time</div>
                      <div>7:30 PM to 8:30 PM IST</div>
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">• Zoom Details:</div>
                    <div className="ml-4 space-y-1">
                      <div>Meeting ID: 84370714392</div>
                      <div>Passcode: bliss</div>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-semibold text-gray-900 mb-2">• Oneness Meditation Australia Presents PYRAMID DHEEKSHA</div>
                <ul className="ml-4 space-y-1">
                  <li>• Timings – 9 PM – 10 PM AEST / 3.30 PM – 4.30 PM IST</li>
                  <li>• Zoom Details: ID – 86798091637 / Pwd – 1234</li>
                  <li>• Contact: pmconenessaustralia@gmail.com</li>
                  <li>• YouTube: Oneness Meditation Australia</li>
                </ul>
              </li>

              <li>
                <div className="font-semibold text-gray-900 mb-2">• EkthaDhyan – Daily Group Meditation and Wisdom (Telugu)</div>
                <ul className="ml-4 space-y-1">
                  <li>• 5:00AM – 6:00AM IST</li>
                  <li>• 9.30 – 11:00 PM IST</li>
                  <li>• Zoom Details: ID – 6998042869 / Pwd – sptab</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//ian-stauffer-uftqFbfWGFY-unsplash.jpeg"
                alt="Peaceful meditation scene with water surrounded by trees"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </main>

    

 <Footer />


        
      
    </div>
  );
};

export default Meditation;

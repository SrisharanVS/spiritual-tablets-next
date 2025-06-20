import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const location = { lat: 17.752730769734622, lng: 83.2462172858072 };

      const map = new google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        },
        streetViewControl: true,
        fullscreenControl: true
      });

      // Add marker
      const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Spiritual Tablets Research Foundation',
        animation: google.maps.Animation.DROP
      });

      // Add info window with the exact format from the image
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 300px; font-family: Roboto, Arial, sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 500;">SPIRITUAL TABLETS RESEARCH...</h3>
            <p style="margin: 0; font-size: 14px; color: #5B5B5B;">
              48A LAST BUS STOP, LIG -6,<br/>
              Madhavadhara Vuda colony,<br/>
              Visakhapatnam, Andhra Pradesh<br/>
              53007
            </p>
            <div style="margin-top: 8px;">
              <span style="color: #4285F4; font-size: 14px;">13 reviews</span>
              <span style="margin-left: 8px; font-weight: 500;">4.9</span>
              <span style="color: #E7711B;">★★★★★</span>
            </div>
            <a href="https://maps.app.goo.gl/oZje9MTFmiAnpPdz9" style="color: #1A73E8; text-decoration: none; font-size: 14px; display: block; margin-top: 8px;">View larger map</a>
          </div>
        `
      });

      // Open info window by default to match the image
      infoWindow.open(map, marker);

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      mapInstanceRef.current = map;
      markerRef.current = marker;
    };

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      loadGoogleMapsScript();
    }

    // Cleanup function
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Left: Address and Map */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-2" style={{color:'#333', fontWeight:700, fontSize:'2rem'}}>Contact.</h2>
          <div className="text-base md:text-lg text-[#666] space-y-1" style={{color:'#666', fontSize:'1.1rem'}}>
            <div>Spiritual Tablets Research Foundation</div>
            <div>LIG-6, Opp. Sr.Citizens Home,</div>
            <div>48A Last Bus Stop, VUDA Colony,</div>
            <div>Madhavadhara, Visakhapatnam – 530018,</div>
            <div>Andhra Pradesh, India</div>
          </div>
          {/* Google Maps */}
          <div 
            ref={mapRef}
            className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-md mt-6 w-full"
            style={{ height: '400px' }}
          >
            {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-4">
                  <p className="text-gray-500 mb-2">Google Maps API Key Required</p>
                  <p className="text-sm text-gray-400">
                    Please add VITE_GOOGLE_MAPS_API_KEY to your .env file
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white rounded-lg p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#108632', fontWeight: 700, fontSize: '2.2rem' }}>Contact Us</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Your name</label>
              <Input id="name" name="name" placeholder="Enter your name" required className="bg-[#f5f5f5] border-2 border-[#108632] focus:border-[#108632] focus:ring-0 outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Your email</label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" required className="bg-[#f5f5f5] border-2 border-[#108632] focus:border-[#108632] focus:ring-0 outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="subject">Subject</label>
              <Input id="subject" name="subject" placeholder="Subject" required className="bg-[#f5f5f5] border-2 border-[#108632] focus:border-[#108632] focus:ring-0 outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Your message (optional)</label>
              <Textarea id="message" name="message" placeholder="Type your message..." rows={4} className="bg-[#f5f5f5] border-2 border-[#108632] focus:border-[#108632] focus:ring-0 outline-none" />
            </div>
            <Button type="submit" className="bg-[#108632] hover:bg-green-800 text-white font-semibold px-6 py-2 rounded mt-4 w-auto text-base" style={{display:'block',marginLeft:0}}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
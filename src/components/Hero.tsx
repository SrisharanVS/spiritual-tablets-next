import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  const handleKnowMore = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-700 leading-tight">
                Spiritual intellect is the root -
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Physical health is the fruit
              </h2>
            </div>
            
            <Button 
              size="lg" 
              className="bg-spiritual-green hover:bg-spiritual-green/90 text-white px-8 py-3 text-lg font-medium cursor-pointer"
              onClick={handleKnowMore}
            >
              ── Know More
            </Button>
          </div>

          {/* Right Column - Meditation Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Spiritual-Intellect-Is-the-Root-Logo.png"
                alt="Spiritual meditation illustration with chakras and tree of life"
                width={600}
                height={400}
                className="w-full max-w-lg h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

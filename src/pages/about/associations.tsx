import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Associations = () => {
  const associations = [
    {
      name: 'PSSM Academy',
      links: [
        { url: 'https://www.pssmovement.org/', label: 'https://www.pssmovement.org/' },
        { url: 'http://www.pssacademy.org/', label: 'http://www.pssacademy.org/' }
      ]
    },
    {
      name: 'Corporate Meditation: Buddha CEO',
      links: [
        { url: 'https://www.buddhaceo.org/', label: 'https://www.buddhaceo.org/' }
      ]
    },
    {
      name: 'Sudarshani Academy',
      links: [
        { url: 'https://www.sudarshiniacademy.com/', label: 'https://www.sudarshiniacademy.com/' }
      ]
    },
    {
      name: 'Ananadho Brahma',
      links: [
        { url: 'https://www.enjoymentscience.com/', label: 'https://www.enjoymentscience.com/' }
      ]
    },
    {
      name: 'Pyramid Yoga & Dance Academy',
      links: [
        { url: 'http://www.pyda.info', label: 'www.pyda.info' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#142c2b] text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/lovable-uploads/partnership-agreement-deal-concept_3446-601.jpeg"
              alt="Partnership Agreement"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              In Delivering our Services,<br />
              we collaborate with the below Organizations.
            </h1>

            <ul className="pl-5 space-y-6">
  {associations.map((association, index) => (
    <li key={index} className="list-disc marker:text-white text-base text-white">
      <span className="font-semibold">{association.name}</span>:{' '}
      {association.links.map((link, linkIndex) => (
        <div key={linkIndex}>
         <a
  href={link.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: '#01853a' }}
  className="hover:underline break-words"
>
  {link.label}
</a>

        </div>
      ))}
    </li>
  ))}
</ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Associations;

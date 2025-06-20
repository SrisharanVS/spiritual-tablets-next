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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Associations</h1>
      <div className="max-w-2xl w-full space-y-8">
        {associations.map((assoc, idx) => (
          <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">{assoc.name}</h2>
            <ul className="list-disc list-inside space-y-2">
              {assoc.links.map((link, lidx) => (
                <li key={lidx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Associations;

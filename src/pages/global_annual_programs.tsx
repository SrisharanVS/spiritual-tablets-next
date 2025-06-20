import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Global_Annual_Programs: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [selectedSubCategory, setSelectedSubCategory] = useState('south-india');

  const countries = ['ALL', 'USA', 'UK', 'INDIA', 'ASIA', 'AUSTRALIA'];
  const indiaSubCategories = ['south-india', 'north-india'];

  const imageData = [
    {
      title: "USA Annual Program 1",
      description: "Annual Program in the USA.",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Us-Annual-Program.jpg",
    },
    {
      title: "USA Annual Program 2",
      description: "Across West Coast USA",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Us-Annual-Program.jpg",
    },
    {
      title: "South India Program 1",
      description: "South India Flyer 1.",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Us-Annual-Program.jpg",
    },
    {
      title: "South India Program 2",
      description: "South India Flyer 2.",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Us-Annual-Program.jpg",
    },
    {
      title: "South India Program 3",
      description: "South India Flyer 3.",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//south-3.jpg",
    },
    {
      title: "South India Program 4",
      description: "South India Flyer 4.",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//northuttar.jpg",
    },
    {
      title: "North India Program 1",
      description: "Spiritual Tablets Punjabi Yearly Schedule.",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//northuttar.jpg",
    },
    {
      title: "SPT Malaysia & Vietnam",
      description: "Travel Plan DR.GK",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//northuttar.jpg",
    },
    {
      title: "Asia Flyer 2",
      description: "New Asia Program Schedule",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//northuttar.jpg",
    },
    {
      title: "SPT AUSTRALIA",
      description: "Travel Plan DR.GK",
      imagePath: "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//northuttar.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-left">
          Program Schedule – Annual Plan Across Globe
        </h1>

        <div className="flex flex-col gap-4 max-w-md mb-8">
          <div>
            <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select a Country:
            </label>
            <select
              id="country-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 text-base border border-gray-300 rounded-md text-gray-700"
              >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {selectedCountry === 'INDIA' && (
            <div>
              <label htmlFor="subcategory-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select Region:
              </label>
              <select
                id="subcategory-select"
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="w-full px-4 py-2 text-base border border-gray-300 rounded-md text-gray-700"
                >
                {indiaSubCategories.map((subcat) => (
                  <option key={subcat} value={subcat}>
                    {subcat.replace('-', ' ').toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="h-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {imageData
  .filter((item) => {
    if (selectedCountry === 'ALL') return true;

    if (selectedCountry === 'INDIA') {
      if (selectedSubCategory === 'south-india') {
        return item.title.toLowerCase().includes('south india');
      } else if (selectedSubCategory === 'north-india') {
        return item.title.toLowerCase().includes('north india');
      }
      return false;
    }

    return item.title.toLowerCase().includes(selectedCountry.toLowerCase());
  })
  .map((item, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="w-full bg-gray-100 rounded-lg mb-3 overflow-hidden">
        {item.imagePath ? (
          <img
            src={item.imagePath}
            alt={item.title}
            className="w-full h-auto rounded-lg mb-2"
          />
        ) : (
          <div className="text-gray-500 text-center">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm">Image {index + 1}</p>
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
))}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Global_Annual_Programs;

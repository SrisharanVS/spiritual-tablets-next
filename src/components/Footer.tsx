import React, { useEffect, useState } from 'react';

const dummyLogo = "https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads/spiritual-tablets-web-logo-1030x292.png";
const channels = [
  {
    img: 'https://yt3.googleusercontent.com/gexb61uLgupuJX_vDWKeLP03K9U9vWXJEBRbhyKyBZencec0qTU1CklsNnvZFqgDvGbn_qb1c5Y=s160-c-k-c0x00ffffff-no-rj',
    name: 'Spiritual Tablets',
    subs: '3K',
    link: 'https://www.youtube.com/channel/UCvdbtwFCC-4OYU7zy_bM9aw',
    id: 'UCvdbtwFCC-4OYU7zy_bM9aw',
  },
  {
    img: 'https://yt3.googleusercontent.com/ytc/AIdro_kuk0SjzCi5gKjGdUs-AhlS_KpoQc6QzkdQqvASDBS2CQ=s160-c-k-c0x00ffffff-no-rj',
    name: 'Spiritual Tablets Hindi',
    subs: '2K',
    link: 'https://www.youtube.com/channel/UCa7wUGcDCsX0KfNQnX-WNeg',
    id: 'UCa7wUGcDCsX0KfNQnX-WNeg',
  },
  {
    img: 'https://yt3.googleusercontent.com/zLV5z17IC0-gjQq36sJi8H8drjYdA-XqZS8y1T99-SfrZU2M0QzVmmTyAbwQOMaXH_y9aKoFsqY=s160-c-k-c0x00ffffff-no-rj',
    name: 'Spiritual Tablets USA',
    subs: '460',
    link: 'https://www.youtube.com/channel/UCw94ye9tfBXGKqUeMxcI-qQ',
    id: 'UCw94ye9tfBXGKqUeMxcI-qQ',
  },
];

const Footer = () => {
  const [subs, setSubs] = useState(() => channels.map(ch => ch.subs));
  const [loading, setLoading] = useState(() => channels.map(() => true));

  useEffect(() => {
    channels.forEach((ch, idx) => {
      fetch(`/api/youtube-subs?channelId=${ch.id}`)
        .then(res => res.json())
        .then(data => {
          setSubs(prev => {
            const copy = [...prev];
            copy[idx] = data.subs ? data.subs.toLocaleString() : channels[idx].subs;
            return copy;
          });
        })
        .catch(() => {
          setSubs(prev => {
            const copy = [...prev];
            copy[idx] = channels[idx].subs;
            return copy;
          });
        })
        .finally(() => {
          setLoading(prev => {
            const copy = [...prev];
            copy[idx] = false;
            return copy;
          });
        });
    });
  }, []);

  return (
    <footer className="bg-[#dedede] py-12 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left: About */}
        <div className="flex-1 min-w-[350px] flex flex-col items-start">
          <img src={dummyLogo} alt="Spiritual Tablets Logo" className="mb-4 w-[350px] h-[150px] object-contain rounded-lg" />
          <h3 className="text-xl font-bold mb-2 text-black">About Spiritual Tablets</h3>
          <p className="text-lg text-black mb-2">
            Spiritual Tablets engages a holistic approach in experiencing complete health and wellbeing.
          </p>
        </div>
        {/* Right: Quick Links */}
        <div className="flex-1 min-w-[300px] flex flex-col items-start">
          <h3 className="text-xl font-bold mb-6 text-black text-center w-full">Quick Links</h3>
          <div className="flex flex-col gap-8 w-full">
            {channels.map((ch, i) => (
              <div key={i} className="flex items-center gap-4 w-full">
                <img src={ch.img} alt={ch.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full">
                  <span className="text-base text-black mb-1 sm:mb-0 min-w-[150px]">{ch.name}</span>
                  <div className="flex items-center gap-2">
                    <a href={ch.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 bg-red-600 text-white rounded text-xs font-semibold">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      YouTube
                    </a>
                    <span className="ml-2 text-xs bg-white text-black rounded px-2 py-0.5 border border-gray-300 min-w-[40px] text-center">
                      {loading[i] ? '...' : subs[i]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

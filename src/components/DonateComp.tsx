
const DonateComp = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Vision Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-500">
	      	<span style={{ color: "#008000" }}>Your Greatness</span>
	      </h2>
	      <h2 className="text-3xl font-bold text-gray-500">is Not What you</h2>
	      <h2 className="text-3xl font-bold text-gray-500">Have, It's What You <span style={{ color: "#008000" }}>Give.</span></h2>
              <p className="text-gray-600 leading-relaxed">
                Spiritual Tablet Research Foundation is a non-profit organization formed with a view to provide spiritual solutions for physical and mental ailments.
              </p>
            </div>
	  	<a
		  key="Donate"
		  href="/donate"
		  className="bg-spiritual-green hover:bg-spiritual-green/90 text-white "
		  style={{
            		display: 'inline-block',
            		padding: '10px 20px',
            		backgroundColor: '#008000', // Green color
            		color: 'white',
            		textAlign: 'center',
            		borderRadius: '5px',
            		textDecoration: 'none', // Remove underline
            		fontSize: '16px',
            		transition: 'background-color 0.3s ease',
          	  }}
		>
		  Donate Now
		</a>
	  </div>
	  {/* Left Column */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <img
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Artboard-81Donate.png"
                alt="Spiritual chakra meditation illustration showing spiritual levels - Intellect, Wisdom, Wellness, Meditation"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonateComp;


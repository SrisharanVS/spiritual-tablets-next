import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const regions = [
  { key: 'usa', label: 'USA' },
  { key: 'india', label: 'India' },
  { key: 'uk', label: 'UK & Europe' },
  { key: 'aus', label: 'Australia & Malaysia' },
  { key: 'dubai', label: 'Dubai, Gulf & Africa' },
];

// Example: You can move these to separate files if they get large
const USAContent = () => (
  <>
    <img src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//buddha.png" alt="USA" className="mb-6 max-w-full object-cover" />
    <h2 className="text-2xl font-bold mb-4">USA</h2>
    <div className="space-y-4">
      <p className="text-gray-900 leading-relaxed">
        Now avail Spiritual counselling opportunity with Spiritual Tablets Research Foundation under the guidance of Dr GK by Eminent Senior counsellors.
      </p>
      <p className="text-gray-900 leading-relaxed">
        Virtual Spiritual Life & Health counselling Features USA
	    </p>
      <ul className="list-disc list-inside space-y-2 text-gray-900">
        <li>Virtually by Zoom</li>
        <li>Prior appointment will save time</li>
        <li>Breakout rooms for personal attention</li>
        <li>Assistance of Senior counsellors</li>
        <li>Eminent spiritual training (one on one)</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-700">Every Saturday:</h3>
      <ul className="list list-inside space-y-2 text-gray-600">
          <li>USA: 08.30 AM – 10.00AM EST</li>
          <li>India: 07.00PM – 08.30PM IST</li>
      </ul>
		  <h3 className="text-xl font-semibold text-gray-700">To Register you may contact us by:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Filling the attached google form for USA residents: https://forms.gle/pYm7cmfkFseRc3M58</li>
  			  <li>Voluntary Support</li>
			      <ul className="list list-inside space-y-2 text-gray-600">
              <li>Ashok: (USA) +1 (302) 465-5446</li>
  			    	<li>Vindhya: (USA) +1 (214) 418-4640</li>
				      <li>Vardhani: (India) +91 98499 85771</li>
			      </ul>
		    </ol>
    </div>
  </> 
);

const IndiaContent = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">ఆచార్య సాంగత్యం</h2>
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">ధ్యానం + జ్ఞానం +ఆచరణతో = సంపూర్ణ ఆరోగ్యం</h2>
      <p className="text-gray-600 leading-relaxed">
        స్పిరిచ్యువల్ టాబ్లెట్స్ రీసెర్చ్ ఫౌండేషన్ ద్వారా అద్భుతమైన అవకాశం! “స్పిరిచ్యువల్ కౌన్సిలింగ్” Dr.G.K Sir యొక్క గైడెన్స్ తో మరియు సీనియర్ స్పిరిచ్యువల్ కౌన్సిలర్స్ ద్వారా…
      </p>
      <p className="text-gray-600 leading-relaxed">
      ఆధ్యాత్మిక జీవన విధానం మరియు ఆరోగ్య సలహాలు
	    </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Live జూమ్ సెషన్స్</li>
        <li>సమయం వృధా చేయకుండా ముందుగా అపాయింట్మెంట్ తీసుకోవాలి.</li>
        <li>వ్యక్తిగత శ్రద్ధ కోసం zoom లో గదులు ఏర్పాటు చేయడం (ఒక్కొక్కరుగా)</li>
        <li>ప్రత్యేకమైన ఆధ్యాత్మిక శిక్షణ (spiritual training)</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-700">Every Wednesday – 5:00 pm to 7:00 pm</h3>
      <h3 className="text-xl font-semibold text-gray-700">Every Sunday – 10:00 am to 01:00 Pm IST(India time)</h3>
		  <h3 className="text-xl font-semibold text-gray-700">Registrations will be closed at Saturday night 9:00 pm</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>For Registration please follow the URL: https://forms.gle/2XUWTmFCHveRF72K6</li>
  			  <li>Contact – +91 9246648401, +91 9494778981</li>
          <li>Material – 9440063823</li>
		    </ol>
    </div>

    <h2 className="text-2xl font-bold mb-4">ಆಚಾರ್ಯ ಸಂಗತ್ಯ </h2>
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">ಆಧ್ಯಾತ್ಮಿಕ ಮಾತ್ರೆಗಳ ಸಂಶೋಧನಾ ಪ್ರತಿಷ್ಠಾನದ(spiritual tablets research foundation) ಮೂಲಕ ಅದ್ಭುತ ಅವಕಾಶ!</h2>
      <p className="text-gray-600 leading-relaxed">
        ಆಧ್ಯಾತ್ಮಿಕ ಸಮಾಲೋಚನೆ
      </p>
      <p className="text-gray-600 leading-relaxed">
      ಡಾ.ಜಿ.ಕೆ ಅವರ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಮತ್ತು ಹಿರಿಯ ಆಧ್ಯಾತ್ಮಿಕ ಸಲಹೆಗಾರರ ​​ಮೂಲಕ
	    </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>ಆಧ್ಯಾತ್ಮಿಕ ಜೀವನಶೈಲಿ ಮತ್ತು ಆರೋಗ್ಯ ಸಲಹೆ.</li>
        <li>ಲೈವ್ ಜೂಮ್ ಸೆಷನ್‌ಗಳು.</li>
        <li>ಸಮಯ ವ್ಯರ್ಥ ಮಾಡದೆ ಮುಂಚಿತವಾಗಿ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ತೆಗೆದುಕೊಳ್ಳಿ.</li>
        <li>ವೈಯಕ್ತಿಕ ಗಮನಕ್ಕಾಗಿ (ಪ್ರತ್ಯೇಕವಾಗಿ) ಜೂಮ್‌ನಲ್ಲಿ ಕೊಠಡಿಗಳನ್ನು ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗಿದೆ.</li>
        <li>ವಿಶೇಷ ಆಧ್ಯಾತ್ಮಿಕ ತರಬೇತಿ (spiritual training).</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-700">ಪ್ರತಿ ಭಾನುವಾರ – 10:00 AM to 01:00 PM IST</h3>
		  <h3 className="text-xl font-semibold text-gray-700">For Registration please click the URL : https://forms.gle/2XUWTmFCHveRF72K6</h3>
      <h3 className="text-xl font-semibold text-gray-700">ಸಂಪರ್ಕಿಸಿ – +91 9246648408</h3>
    </div>

    <h2 className="text-2xl font-bold mb-4">आचार्य संगत्य रजिस्ट्रेशन फॉर्म</h2>
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">Acharya Sangatya Registration form</h2>
      <p className="text-gray-600 leading-relaxed">
      Now avail Spiritual counselling opportunity with Spiritual Tablets Research Foundation under the guidance of Dr GK by Eminent Spiritual counsellors.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Virtual Spiritual Life & Health counselling Features USA
	    </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Virtually by Zoom</li>
        <li>Prior appointment will save time</li>
        <li>Breakout rooms for personal attention</li>
        <li>Assistance of Senior counsellors</li>
        <li>Eminent spiritual training (one on one)</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-700">Tuesday 12.00 pm – 01.00 pm IST & Friday 3:00 pm – 5.00 pm IST</h3>
      <h3 className="text-xl font-semibold text-gray-700">To Register, you may contact us by:</h3>
      <ul className="list list-inside space-y-2 text-gray-600">
          <li>Filling the attached google form:  https://forms.gle/2XUWTmFCHveRF72K6</li>
          <li>Phone: Archana (+91 99683 99965)</li>
      </ul>
    </div>

    
  </>
);

const UKContent = () => (
  <>
    <div className="space-y-4">
      <p className="text-gray-900 leading-relaxed">
        Now avail Spiritual counselling opportunity with Spiritual Tablets Research Foundation under the guidance of Dr GK by Eminent Senior counsellors.
      </p>
      <p className="text-gray-900 leading-relaxed">
        Virtual Spiritual Life & Health counselling Features USA
	    </p>
      <ul className="list-disc list-inside space-y-2 text-gray-900">
        <li>Virtually by Zoom</li>
        <li>Prior appointment will save time</li>
        <li>Breakout rooms for personal attention</li>
        <li>Assistance of Senior counsellors</li>
        <li>Eminent spiritual training (one on one)</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-700">Every Monday:</h3>
      <ul className="list list-inside space-y-2 text-gray-600">
          <li>6:00 to 7:00 PM (UK , Portugal)</li>
          <li>7:00 to 8:00 PM (Germany , France , Netherlands , Italy , Austria , Belgium)</li>
      </ul>
		  <h3 className="text-xl font-semibold text-gray-700">To Register you may contact us by:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Filling the attached google form: https://docs.google.com/forms/d/e/1FAIpQLSfAhmkolDLS6MfveATaMtTYy5cmXrcsUeKFOhv7o2JpUbcKyw/viewform?usp=sf_links</li>
  			  <li>Voluntary Support</li>
			      <ul className="list list-inside space-y-2 text-gray-600">
              <li>+91 78421 74396    (WhatsApp)</li>
  			    	<li>+49 176 70769075 (WhatsApp)</li>
			      </ul>
		    </ol>
    </div>
  </>
)

const DubaiContent = () => (
  <>
    <div className="space-y-4">
      <p className="text-gray-900 leading-relaxed">
        Now avail Spiritual counselling opportunity with Spiritual Tablets Research Foundation under the guidance of Dr GK by Eminent Senior counsellors.
      </p>
      <p className="text-gray-900 leading-relaxed">
        Virtual Spiritual Life & Health counselling Features USA
	    </p>
      <ul className="list-disc list-inside space-y-2 text-gray-900">
        <li>Virtually by Zoom</li>
        <li>Prior appointment will save time</li>
        <li>Breakout rooms for personal attention</li>
        <li>Assistance of Senior counsellors</li>
        <li>Eminent spiritual training (one on one)</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-700">Every Tuesday:</h3>
      <ul className="list list-inside space-y-2 text-gray-600">
          <li>Dubai, Gulf Africa & Asia : 12:00 PM- 01:00 PM</li>
          <li>India: 01:30PM- 02:30 PM</li>
      </ul>
		  <h3 className="text-xl font-semibold text-gray-700">To Register you may contact us by:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Break out Room Departments : Admin, Enjoyment Science & Academic</li>
          <li>Zoom: https://us02web.zoom.us/j/84236046723?pwd=bWhwY25BMHl3ck1VWHZwTEF3V0lCUT09</li>
  			  <li>Voluntary Support</li>
			      <ul className="list list-inside space-y-2 text-gray-600">
              <li>+971 50 9683542</li>
  			    	<li>+971 50 2749310</li>
			      </ul>
		    </ol>
    </div>
  </>
)

const regionContent: Record<string, React.FC> = {
  usa: USAContent,
  india: IndiaContent,
  uk: UKContent,
  aus: () => (
    <>
      <h1>HELLO AUSTRALIA</h1>
    </>
  ),
  dubai: DubaiContent,
};

const Register: React.FC = () => {
  const [selected, setSelected] = useState('usa');
  const ContentComponent = regionContent[selected];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 min-h-[70vh]">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-4 mb-6 md:mb-0">
          {regions.map((region) => (
            <button
              key={region.key}
              className={`w-full py-4 rounded-lg text-lg font-semibold shadow transition-colors ${selected === region.key ? 'bg-spiritual-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelected(region.key)}
            >
              {region.label}
            </button>
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col items-center">
          <ContentComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register; 

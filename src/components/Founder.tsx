import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Founder = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = (sectionRef.current as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-black transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
          {/* Right Column - Vision and Mission Content */}
          <div className="space-y-8">
            {/* Vision Section */}
            <div className="space-y-4">
	      <p className="text-gray-100 leading-relaxed">
	      	Dr. Gopala Krishna
	      </p>
              <h2 className="text-3xl font-bold text-white">Founder</h2>
              <p className="text-gray-100 leading-relaxed">
                `&quot;`Dr. Gopala Krishna`&quot;` is a medical doctor who started his journey of spiritual science in search of happiness and the truth, under the guidance of `&quot;`Brahmarshi Patriji`&quot;` and specially trained by grand master `&quot;`Paul Vijay Kumar`&quot;`. In this journey he got enlightened and realized that `&quot;`Spiritual intellect is the root – physical health is the fruit`&quot;`. He started sharing the same with his patients who approached him for medical treatment. As a part of this, he established spiritual health care centers and maintained them for ten years in different parts of India, also offered esteemed spiritual services as an ancillary to qualified treatment with the help of senior masters who are trained by him. Eventually, he strongly advocated the realisation of holistic health through meditation in addition to medication.
              </p>
            </div>
          </div>
	   <div className="flex justify-center">
            <div className="relative max-w-md">
              <Image
                src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//PHOTO-2019-01-26-14-58-24.jpeg"
                alt="Spiritual chakra meditation illustration showing spiritual levels &#39;Intellect, Wisdom, Wellness, Meditation&#39;"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

export const FounderImageSection = () => (
  <div className="w-full mt-12">
    <Image
      src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Artboard-515.png"
      alt="Founder section image"
      width={1200}
      height={400}
      className="w-full object-contain"
      style={{ display: 'block' }}
    />
  </div>
);

export const GenesisSection = ({ onKnowMore }: { onKnowMore: () => void }) => (
  <section className="w-full bg-white py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Genesis</h2>
      <p className="text-lg text-gray-600 mb-8">
        The association with Brahmashri Partriji, the 18 principles of pyramid Spiritual society moment and the experiences of mediation, particularly the `&quot;`observation of our breath`&quot;`, led to the formation of 12 spiritual tablets.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Continuation of Dr Gk's spiritual evolution led to numerous visions, premonitions and divine guidance based on which he conducted workshops. Many participants in these workshops and mediations noticed gradual improvements in their overall health. So diversified were the experiences that, when encapsulated into individual concepts, led to the formation of numerous spiritual health capsules.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Today, the initial 12 spiritual tablets have increased to over 350 wisdom capsules. These spiritual tablets supplement and complement regular medical practices, thus providing holistic health.
      </p>
      <button onClick={onKnowMore} className="inline-flex items-center gap-2 text-green-700 font-bold text-xl group focus:outline-none">
        <span className="inline-block w-8 h-0.5 bg-green-600 group-hover:w-12 transition-all duration-300 mr-2"></span>
        Know More
      </button>
    </div>
  </section>
);

export const OverviewGenesisSection = () => (
  <section className="w-full bg-white py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Overview & Genesis</h2>
      <p className="text-xl text-gray-600 mb-10 text-center">
        The Pyramid Spiritual Societies Movement (PSSM) is non-religious, non-cult, non-profit voluntary organization with the mission to spread `&quot;`Anapanasati Meditation, Vegetarianism and Pyramid Power`&quot;` to everyone. Spiritual Tablets is the self-empowered Individual Health Care Initiative as an extension of the PSSM.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-gray-600 text-lg leading-relaxed">
        `&quot;`Dr. Gopala Krishna`&quot;` is a medical doctor who started his journey of spiritual science in search of happiness and the truth, under the guidance of `&quot;`Brahmarshi Patriji`&quot;` and specially trained by grand master `&quot;`Paul Vijay Kumar`&quot;`. In this journey he got enlightened and realized that `&quot;`Spiritual intellect is the root - physical health is the fruit`&quot;`. He started sharing the same with his patients who approached him for medical treatment. As a part of this, he established spiritual health care centers and maintained them for ten years in different parts of India, also offered esteemed spiritual services as an ancillary to qualified treatment with the help of senior masters who are trained by him.
        </div>
        <div className="text-gray-600 text-lg leading-relaxed">
          This Spiritual Health Science Journey started in the Year 1998. The first Organization registered was under the Name DHYANAROGYA SEVA SANGAM: REGD NO: 514/2008, after 10 years of Teaching & Spreading awareness. Later it was dissolved to lay path for Spiritual Tablets Research Foundation to meet all Global requirements. Subsequently, following Trusts have been established to support Residential Pyramid Training Centers through Spiritual Tablets.
        </div>
      </div>
    </div>
  </section>
);

export const HealthcareMeditationServicesSection = () => (
  <section className="w-full bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Service Circles Image */}
      <div className="flex justify-center">
        <img
          src="https://swopgpgsdcqwvvnpeqvd.supabase.co/storage/v1/object/public/public-uploads//Artboard-16516.png"
          alt="Healthcare & Meditation Services"
          className="w-full max-w-xl h-auto"
        />
      </div>
      {/* Right: Service Descriptions */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Services Offered</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Healthcare & Meditation Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Meditation Services</h4>
            <p className="text-gray-600 text-base mb-2">A regular session involving guided Ana-apana-sati meditation.</p>
            <Link href="/services/meditation" className="inline-flex items-center gap-2 text-green-700 font-semibold group">
              <span className="inline-block w-8 h-0.5 bg-green-600 group-hover:w-12 transition-all duration-300 mr-2"></span>
              Know more
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Wellness Services</h4>
            <p className="text-gray-600 text-base mb-2">Pyramid Centers – Dedicated centres to provide in house spiritual healing.</p>
            <Link href="/services/wellness" className="inline-flex items-center gap-2 text-green-700 font-semibold group">
              <span className="inline-block w-8 h-0.5 bg-green-600 group-hover:w-12 transition-all duration-300 mr-2"></span>
              Know more
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Counselling Services</h4>
            <p className="text-gray-600 text-base mb-2">A centre where counsellor advice can be sought.</p>
            <Link href="/services/counselling" className="inline-flex items-center gap-2 text-green-700 font-semibold group">
              <span className="inline-block w-8 h-0.5 bg-green-600 group-hover:w-12 transition-all duration-300 mr-2"></span>
              Know More
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Workshop Services</h4>
            <p className="text-gray-600 text-base mb-2">Book clubs, Experience and Wisdom Sharing</p>
            <Link href="/services/workshop" className="inline-flex items-center gap-2 text-green-700 font-semibold group">
              <span className="inline-block w-8 h-0.5 bg-green-600 group-hover:w-12 transition-all duration-300 mr-2"></span>
              Know More
            </Link>
          </div>
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-gray-700 mb-1">Happiness Services</h4>
            <p className="text-gray-600 text-base mb-2">Real happiness is experienced through art forms – Music, Dance, Painting, Sports, etc, along with the wisdom of soul science. HAPPINESS SCIENCE is Meditation + Art Forms.</p>
            <Link href="/services/happiness" className="inline-flex items-center gap-2 text-green-700 font-semibold group">
              <span className="inline-block w-8 h-0.5 bg-green-600 group-hover:w-12 transition-all duration-300 mr-2"></span>
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const StatsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({
    countries: 0,
    experience: 0,
    counsellors: 0,
    patients: 0,
  });
  const targets = {
    countries: 20,
    experience: 24,
    counsellors: 200,
    patients: 12000,
  };
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;
    const increments = {
      countries: Math.ceil(targets.countries / steps),
      experience: Math.ceil(targets.experience / steps),
      counsellors: Math.ceil(targets.counsellors / steps),
      patients: Math.ceil(targets.patients / steps),
    };
    const intervalId = setInterval(() => {
      currentStep++;
      setCounts((prev) => ({
        countries: currentStep < steps ? Math.min(prev.countries + increments.countries, targets.countries) : targets.countries,
        experience: currentStep < steps ? Math.min(prev.experience + increments.experience, targets.experience) : targets.experience,
        counsellors: currentStep < steps ? Math.min(prev.counsellors + increments.counsellors, targets.counsellors) : targets.counsellors,
        patients: currentStep < steps ? Math.min(prev.patients + increments.patients, targets.patients) : targets.patients,
      }));
      if (currentStep >= steps) clearInterval(intervalId);
    }, interval);
    return () => clearInterval(intervalId);
  }, [inView]);

  return (
    <section ref={sectionRef} className="w-full bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 mb-2">{counts.countries.toLocaleString()}</div>
          <div className="text-lg text-gray-500">Countries</div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 mb-2">{counts.experience.toLocaleString()}</div>
          <div className="text-lg text-gray-500">Years of Experience</div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 mb-2">{counts.counsellors.toLocaleString()}</div>
          <div className="text-lg text-gray-500">Counsellors</div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 mb-2">{counts.patients.toLocaleString()}</div>
          <div className="text-lg text-gray-500">Patient Gods</div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'Rakesh',
      subtitle: 'ALCOHOL DEPENDENCE SYNDROME',
      content: `My name is Rakesh(changed to protect the individual's identity) aged 45,suffered with ALCOHOL DEPENDENCE SYNDROME since the year 1999.This syndrome resulted in multiple illnesses, and I was not in proper senses. I would not bathe or sleep for days together. Medication & Yoga did not help in reducing my alcohol consumption which also negatively impacted me, both, socially and financially. On a friend's suggestion, I started to meditate. I, initially could not do even for 10 mins, however, I persisted. Today, it is over 15 years, I am free of alcohol, my health has improved significantly, and I attribute this to the following:
→ Attended Spiritual Tablets' workshop at a nearby pyramid center on viz., 4 obstacles of warrior, 3 types of Dharma's (Righteous Living), 12 tablets , Traffic signals , Alcoholic / Holistic etc.
→ Diligently participated in the 40 days of intense pyramid meditation and implementation of spiritual tablets.
→ Changed my dietary pattern from a compulsive meat and non-vegetarian diet to a vegetarian. Over a period of six months, observing the above and meditation helped me cure and thus get rid of my addiction.`
    },
    {
      name: 'Chandrika',
      subtitle: 'Severe Stomach Pain',
      content: `My name is Chandrika(changed to protect the identity of the individual), aged 42, suffered from severe stomach pain since 2014. I also suffered from migraine, diarrhea, weight loss, malnutrition, excessive vomiting, and insomnia, which resulted in severe anemia finally leading to becoming bedridden. Upon medical examination, I was diagnosed with Crohn's disease with multiple diffuse ulcers in the cecum and terminal ileum. Rhe pain was so unbearable that I even tried to commit suicide 4 times. One of my neighbors suggested seeking aid through Spiritual Tablets. Spiritual Tablets enabled me to see the world with love and beauty and gradually I found myself improving. I would attribute the improvements to:
→ Attending Spiritual Tablets workshop, at a nearby pyramid center, on the topic of Arishadvarga (6 Passions); followed by regular Spiritual Tablets counselling sessions.
→ Meditated intensely for 6-8 hours a day, for a duration of 40 days under a pyramid and implemented Spiritual Tablets recommendations.
→ Experienced many positive change in my thought pattern that healed my body. After a period of 4 years, upon medical examination, I was completely cured from the ulcers.`
    },
    {
      name: 'Deepak',
      subtitle: 'Myasthenia Gravis',
      content: `My name is Deepak, (changed to protect the identity of the individual) aged 70, suffered from Myasthenia Gravis since 2012. The symptoms included muscle weakness in arms and limbs, loss of balance while walking, eyelids drooping, double vision, heaviness in head and dizziness. I couldn't brush my teeth and chew food. The symptoms impacted my day-to-day living, which resulted in depression and thought of committing suicide. My brother-in-law suggested me to do meditation. Spiritual Tablets and meditation gave me a new lease of life and it helped me to align my mind, body, and soul. Following are the reasons that lead to my improvement:
→ Attending Spiritual Tablets counselling sessions on the topics of 12 tablets, followed by Spiritual Tablets counselling sessions.
→ Meditated regularly for 3-4 hours a day and implemented Spiritual Tablets.
→ Over a period of 6 months, my muscle strength improved, and I started walking slowly. After 18 months, there was 80% improvement in my condition.`
    },
    {
      name: 'Lakshmi',
      subtitle: 'Relationship Issues',
      content: `My name is Lakshmi (changed to protect the identity of the individual), aged 36, had relationship issues with my husband and in-laws. I felt hopeless, depressed and tried to commit suicide, which resulted in injuries to my vertebral column and affected the spinal cord. I became bedridden for several days. One of my aunts suggested me to do meditation. Meditation healed my physical body, and Spiritual tablets healed my soul and empowered me. I would attribute my improvement to"
→ Attending Spiritual Tablets workshop at a nearby pyramid center on the topic of 12 tablets, meditation during full moon days, sessions on 4 obstacles of a warrior, problems and spiritual solutions, daily planning of meditation and reading spiritual books reading.
→ Meditated regularly, diligently, read spiritual books, and involved myself in spiritual service while implementing Spiritual Tablets.
→ Turned a vegetarian. Over a period of 6 months, I felt energetic and hopeful. My relationship with my husband and family members became better.
→ Now I lead a very normal life.`
    },
    {
      name: 'Sunandha',
      subtitle: 'Swelling in my knee joints, joint pains, and insomnia',
      content: `My name is Sunandha (changed to protect the identity of the individual), aged 42. From the age of 12, I suffered from swelling in my knee joints, joint pains, and insomnia; and found it difficult to work. Upon medical examination, I was diagnosed with Hemophilia disorder, which is factor 8 deficiency in blood (0.98). My knees used to bleed, and I used to bandage my knees and manage the pain with pills. My other knee also got affected. There was apparently no cure for this disorder and my suffering was immense and I felt like committing suicide. One of my friends told me about Spiritual Tablets. Through meditation and Spiritual Tablets, I understood that all my external problems were due to my ignorance and changed myself internally. I am also able to do hard labor daily, and I would like to state that my improvements are due to the following
→ Attending Spiritual Tablets counselling session on the topics of first 6 tablets, reading spiritual books like Dhyana Arogya book, and listened to Patri Sir's CDs on Bhagavad Gita and Bhaja Govindam and learnt them. Later, I learnt about the topics Traffic Signals; Hard work, Intellect, and Philosophy; True difficulties; social problems; and circulatory forces. This understanding brought about changes to me thought patterns.
→ Meditated regularly with 2x2 knee pyramids, followed ashrama dharma every month for 3-5 days and did full moon meditation, involved myself in spiritual service.
→ The results were so encouraging that I constructed a pyramid and started a health care center at home where many including myself meditate regularly.
→ Converted myself to a vegetarian. After 2 months, the swelling in my knee joints reduced and was able to my do my daily chores without assistance.Within a year, my factor 8 in blood improved (1.38).`
    },
    {
      name: 'Prasanna',
      subtitle: 'Lung Issues',
      content: `I am Prasanna, 35 years, from Vijayawada, India.I was suffering from, Scleroderma- connective tissue disorder, Lung issues related to Irregular reticular lines, interlobular septal thickening and tractional bronchiectasis and also, Hiatus Hernia. Then I came across spiritual tablets wisdom.This wisdom helped me to come out all the my health problems. I followed :
→ Doing intense meditation under the Pyramid for 3 hours daily for 40 days.I was could see the benefit from Pyramid energies and used Pyramid water for consumption. Post that I stopped taking steroids and compensated with regular meditation under pyramid.
→ Additionally I started practicing Music and language development.
→ I specifically implemented Skin lessons (Tiger/ Compound wall lessons).And Lung Lessons to come out of my Lungs issue.`
    },
    {
      name: 'Usha',
      subtitle: 'Tubal pregnancy',
      content: `My name is Usha (Name changed to protect the identity of individual) aged 45 years. I was suffering from Tubal pregnancy since the age of 32 years. I used to have lots of pain in abdomen, loose motions, blood in stools, lack of appetite and weight loss. After colonoscopy I was diagnosed with ULCERATIVE COLITIS. I used to get dreams of individual / group fecal matter dreams. I came to know about spiritual tablets and meditation. I started pyramid meditation and I got relief from all these problems in 4 months, after 7 months I stopped medicines also. I would attribute my health restoration to the following factors:
→ Followed regular Spiritual Health Counseling and shared experiences.
→ As instructed, I also worked on Arishadvarga (Six Passions, daily programming and major mistakes. As a result, the problems became less frequent. I did intense meditation to overcome the same. Continuing the practice over time I noticed that all problems gradually subsided. Since then, I am doing mediation and spiritual services. After 6 years colonoscopy report was taken, and it had completely cured and my health returned to normal.`
    },
    {
      name: 'Manikantha',
      subtitle: 'Hemophilia',
      content: `I am P.Manikantha from Kakinada, Andhra Pradesh. I would like to share the 'Significance of meditation' and how it changed my life. When I was a child I used to bleed very often as I had the problem of Hemophilia. So, I went to see the doctor. All my blood reports were examined and confirmed that I had the 'Factor 8'. Doctor advised me to be very careful as there was no permanent cure for this problem. At the age of 11, I found swelling in my knees. Even when I walked for a while I got swollen knees and severe pain. The agony which I had gone through made me despair and think of committing suicide. Fortunately, I met my friend Kiran. After listening to my problem, he told me about Dr. G.K.Sir, Spiritual tablets and the Advantages of meditation. Then I decided to meet Dr G.K.Sir. I went to the R.R.C Centre at Ganjam vari Street, Kakinada. There I met Manohar sir and he informed me the arrival of Dr.G.K. Sir. As soon as sir came to Kakinada, I went and explained him my problem. He gave me a lucid explanation about the significance of Anapanasati Meditation, Vegetarian diet & uses of Pyramids and gave me 2*2 pyramids. When I did meditation as sir said, I got a little relief. After a few days of meditation the swelling was subsided. Within 3 months, the swelling was completely gone. I got a complete cure after 6 years of long meditation and Vegetarian diet. Later the swelling was moved to my hands. Again, I shared this problem to Dr.G.K.Sir. Then he told me to read books and also suggested me how many hours I should meditate. He also advised me to do Spiritual service. On his advice I started DRAKSHARAMA MEDITATION CENTRE. Within a few days the swelling in my hands was disappeared. After this incident, my family and people around us came to understand that we could reduce any disease with the help of the meditation. Hemophilia is a sever problem which ruins us a lot. Whoever has this condition will suffer a lot. They might go for different treatment methods. But I strongly suggest people to meditate, along with medication. Before I started meditation my Factor 8 level was *merely 0.98% and I bled twice or thrice in a month. But after the meditation the Factor 8 level was tremendously increased to 1.38% and bleeding occures once in two or three years. It is all because of the meditation and the perfect guidance of Dr.G.K.Sir. I'm very much grateful to all masters and spiritualtablets foundation,who have helped me to come out from this miserable problem. Contact No: 9603305763`
    }
  ];
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [hovered, testimonials.length]);
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full mx-auto text-center">
        <div className="mb-8">
          <div className="text-sm font-semibold text-gray-700 mb-1">What They're Saying</div>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
        </div>
        <div className="flex flex-col items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="rounded-full border-2 border-gray-200 w-12 h-12 flex items-center justify-center mb-6">
            <span className="text-3xl text-gray-400">&ldquo;</span>
          </div>
          <div className="text-gray-700 text-lg mb-8 whitespace-pre-line text-left max-w-5xl mx-auto">
            {testimonials[current].content}
          </div>
          <div className="text-left w-full max-w-3xl mx-auto">
            <div className="font-semibold text-gray-800">{testimonials[current].name}</div>
            <div className="text-xs text-gray-400 mt-1">{testimonials[current].subtitle}</div>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-gray-600' : 'bg-gray-300'} focus:outline-none cursor-pointer`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


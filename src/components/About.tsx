
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Star, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "10000+", label: "Readings Given" },
    { icon: Award, value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden glow-effect">
              <img
                src=""
                alt="Spiritual guidance session"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="cosmic-card text-center p-4">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-cosmic-gold mx-auto mb-2 animate-pulse" />
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-mystical font-bold text-gradient">
              Your Spiritual Journey Awaits
            </h2>

            <p className="text-xl text-white/80 leading-relaxed">
              For over 15 years, Spiritual Tablets has been a beacon of light for souls seeking clarity, 
              healing, and spiritual growth. Our mission is to bridge the gap between the mystical and 
              the practical, offering authentic spiritual guidance that transforms lives.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Star className="h-6 w-6 text-cosmic-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Authentic Spiritual Products</h3>
                  <p className="text-white/70">
                    Carefully curated collection of genuine spiritual tools, crystals, and sacred artifacts 
                    sourced from trusted artisans worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-cosmic-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Compassionate Guidance</h3>
                  <p className="text-white/70">
                    Our experienced practitioners offer personalized readings and spiritual counseling 
                    with empathy, wisdom, and genuine care for your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-cosmic-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Supportive Community</h3>
                  <p className="text-white/70">
                    Join thousands of like-minded souls on their spiritual path. Share experiences, 
                    learn together, and grow in a safe, welcoming environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-gradient p-6 rounded-lg border border-cosmic-gold/30">
              <blockquote className="text-white/90 italic text-lg mb-4">
                "Spiritual Tablets changed my life. The reading I received gave me the clarity I needed 
                to make important decisions, and the crystal healing session helped me find inner peace 
                I hadn't felt in years."
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cosmic-gold fill-cosmic-gold" />
                  ))}
                </div>
                <span className="text-white/70">- Sarah M., Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

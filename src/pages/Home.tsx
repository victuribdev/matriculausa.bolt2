import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, Users, Award, ArrowRight, CheckCircle, Star, BookOpen, Zap, Shield, TrendingUp, Sparkles, DollarSign, Play, ChevronRight, Target, Heart, Brain, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Following Figma structure */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#05294E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D0151C]/5 rounded-full blur-3xl"></div>
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="American University Campus"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-lato font-black mb-8 leading-tight text-slate-900">
                Your Gateway to
                <br />
                <span className="text-[#05294E]">
                  American Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-slate-600 leading-relaxed max-w-2xl">
                We connect you to exclusive opportunities to study in the United States.
              </p>
              {/* Subtle Icons */}
              <div className="absolute -top-12 -left-4 flex space-x-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Globe className="h-6 w-6 text-[#05294E]" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <GraduationCap className="h-6 w-6 text-[#D0151C]" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-[#05294E]" />
                </div>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 text-slate-500 mt-12">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" alt="" />
                  </div>
                  <span className="text-sm font-medium">5,000+ students</span>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
            {/* Right Content - Removed standalone card */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-lato font-black text-[#05294E] mb-2">150+</div>
              <div className="text-slate-600 font-medium">Elite Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-lato font-black text-[#D0151C] mb-2">$50M+</div>
              <div className="text-slate-600 font-medium">Available Funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-lato font-black text-[#05294E] mb-2">5,000+</div>
              <div className="text-slate-600 font-medium">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-lato font-black text-[#D0151C] mb-2">95%</div>
              <div className="text-slate-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-lato font-black text-slate-900 mb-6">
                Three Steps to Your Dream University
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                Our streamlined process makes it easy to achieve your educational goals.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#05294E] w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Create Your Profile</h3>
                    <p className="text-slate-600">Tell us about your academic background, interests, and goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#D0151C] w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Get Matched</h3>
                    <p className="text-slate-600">Our AI-powered system finds the best scholarship opportunities for you.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Apply & Succeed</h3>
                    <p className="text-slate-600">We guide you through the application process to secure your spot.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="University Campus"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-lato font-black text-slate-900 mb-6">
              Success <span className="text-[#05294E]">Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real students, real results. See how our platform transformed their educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                "The AI matching system found me a full scholarship to MIT that I never would have discovered on my own. Incredible technology!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                  alt="Maria Silva"
                  className="w-14 h-14 rounded-2xl mr-4 shadow-lg"
                />
                <div>
                  <div className="font-bold text-slate-900">Maria Silva</div>
                  <div className="text-sm text-[#05294E] font-medium">MIT, Computer Science</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                "The legal support made my visa process seamless. Now I'm studying at Harvard Business School with a full scholarship!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                  alt="Carlos Rodriguez"
                  className="w-14 h-14 rounded-2xl mr-4 shadow-lg"
                />
                <div>
                  <div className="font-bold text-slate-900">Carlos Rodriguez</div>
                  <div className="text-sm text-[#D0151C] font-medium">Harvard, MBA</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                "The exclusive scholarship program opened doors I didn't even know existed. The platform is revolutionary!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                  alt="Ana Chen"
                  className="w-14 h-14 rounded-2xl mr-4 shadow-lg"
                />
                <div>
                  <div className="font-bold text-slate-900">Ana Chen</div>
                  <div className="text-sm text-green-600 font-medium">Stanford, Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#05294E] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D0151C]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Join 5,000+ successful students</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-lato font-black mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-[#D0151C]">Your Future?</span>
          </h2>
          
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of international students who have found their path to American education through our revolutionary platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/register"
              className="group bg-[#D0151C] text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-[#B01218] transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              Start Your Journey Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/process"
              className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white hover:text-[#05294E] transition-all duration-300 flex items-center justify-center"
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
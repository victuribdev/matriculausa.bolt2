import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Sparkles, Building, GraduationCap, ChevronRight } from 'lucide-react';
import { mockSchools } from '../data/mockData';

const Universities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Get unique locations for filter
  const locations = Array.from(new Set(mockSchools.map(school => school.location.split(', ')[1]))).sort();

  const filteredSchools = mockSchools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || school.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || school.location.includes(selectedLocation);

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#05294E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 mb-6">
              <Sparkles className="h-3 w-3 mr-2 text-white" />
              <span className="text-xs font-medium text-white">Partner Universities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              <span className="text-white">Explore Top</span>
              <br />
              <span className="text-[#D0151C]">US Universities</span>
            </h1>
            
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Discover world-class institutions offering exceptional education and scholarship opportunities.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#05294E] focus:border-[#05294E] transition-all duration-300 text-sm"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#05294E] focus:border-[#05294E] transition-all duration-300 text-sm"
            >
              <option value="all">All Types</option>
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#05294E] focus:border-[#05294E] transition-all duration-300 text-sm"
            >
              <option value="all">All States</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-white border border-slate-300 rounded-xl px-3 py-3">
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-[#05294E]">{filteredSchools.length}</span> universities
              </span>
            </div>
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSchools.map((school) => (
            <div key={school.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200 group">
              {/* University Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={school.image}
                  alt={`${school.name} campus`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium text-white ${
                    school.type === 'Private' ? 'bg-[#05294E]' : 'bg-green-600'
                  }`}>
                    {school.type}
                  </span>
                </div>
              </div>

              {/* University Info */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight line-clamp-2">
                  {school.name}
                </h3>
                
                {/* Location */}
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-3 w-3 mr-1 text-[#05294E]" />
                  <span className="text-xs">{school.location}</span>
                </div>

                {/* Learn More Button */}
                <Link
                  to={`/schools/${school.id}`}
                  className="w-full text-[#05294E] py-1.5 px-3 hover:bg-slate-50 transition-all duration-300 text-xs font-medium flex items-center justify-center group border border-slate-200 rounded-md"
                >
                  Learn More
                  <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform opacity-60" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-600 mb-2">No universities found</h3>
            <p className="text-slate-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-[#05294E] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Apply to Your <span className="text-[#D0151C]">Dream University?</span>
          </h2>
          <p className="text-sm text-slate-200 mb-6 max-w-2xl mx-auto">
            Start your journey with our AI-powered platform and unlock exclusive scholarship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/apply"
              className="bg-[#D0151C] text-white px-6 py-2 rounded-lg hover:bg-[#B01218] transition-all duration-300 text-sm font-medium"
            >
              Start Your Application
            </Link>
            <Link 
              to="/advisor"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium"
            >
              Connect with an Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
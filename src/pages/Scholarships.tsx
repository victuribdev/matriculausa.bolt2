import React, { useState } from 'react';
import { Search, DollarSign, Calendar, Award, Zap, Filter } from 'lucide-react';
import { mockScholarships } from '../data/mockData';

const Scholarships: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedField, setSelectedField] = useState('all');

  const filteredScholarships = mockScholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = selectedLevel === 'all' || scholarship.level === selectedLevel;
    const matchesField = selectedField === 'all' || scholarship.fieldOfStudy.toLowerCase().includes(selectedField.toLowerCase());

    return matchesSearch && matchesLevel && matchesField;
  });

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Scholarship Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover funding opportunities for your academic journey
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="all">All Levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="doctorate">Doctorate</option>
            </select>

            {/* Field Filter */}
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="all">All Fields</option>
              <option value="stem">STEM</option>
              <option value="business">Business</option>
              <option value="engineering">Engineering</option>
              <option value="any">Any Field</option>
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-gray-50 border border-gray-300 rounded-md px-3 py-2">
              <span className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">{filteredScholarships.length}</span> scholarships
              </span>
            </div>
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {scholarship.title}
                  </h3>
                  {scholarship.isExclusive && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium flex items-center ml-2">
                      <Zap className="h-3 w-3 mr-1" />
                      Exclusive
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {scholarship.description}
                </p>

                {/* Scholarship Details */}
                <div className="space-y-3">
                  {/* Amount */}
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
                    <span className="text-sm text-gray-700">Amount</span>
                    <span className="font-semibold text-[#05294E] flex items-center">
                      <DollarSign className="h-4 w-4" />
                      {formatAmount(scholarship.amount)}
                    </span>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
                    <span className="text-sm text-gray-700">Deadline</span>
                    <span className="font-semibold text-gray-900 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(scholarship.deadline).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Level & Field */}
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
                    <span className="text-sm text-gray-700">Level</span>
                    <span className="font-semibold text-[#05294E] capitalize">
                      {scholarship.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
                    <span className="text-sm text-gray-700">Field</span>
                    <span className="font-semibold text-[#05294E]">
                      {scholarship.fieldOfStudy}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-6 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No scholarships found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scholarships;
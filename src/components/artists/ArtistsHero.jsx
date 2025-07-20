import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const ArtistsHero = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Featured', 'Rising', 'Established'];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <section className="relative bg-gradient-dark py-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-black mb-6">
          Our <span className="gradient-text">Artists</span>
        </h1>
        <p className="text-xl text-text-gray mb-8 max-w-3xl mx-auto">
          Discover talented artists who trust us to amplify their music and grow their careers
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-5 h-5" />
            <input
              type="text"
              placeholder="Search artists..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-primary-charcoal border border-primary-gray rounded-lg pl-10 pr-4 py-3 text-white focus:border-secondary-gold outline-none w-80"
            />
          </div>
          
          <div className="flex gap-2">
            <Filter className="text-secondary-gold w-5 h-5 mt-3" />
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeFilter === filter
                    ? 'bg-secondary-gold text-primary-black'
                    : 'bg-primary-charcoal text-text-gray hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <h3 className="text-4xl font-black gradient-text">500+</h3>
            <p className="text-text-gray">Artists Worldwide</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black gradient-text">10M+</h3>
            <p className="text-text-gray">Monthly Streams</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black gradient-text">25%</h3>
            <p className="text-text-gray">Average Growth Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsHero;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin } from 'lucide-react';
import { tests } from '../data/mockData';
import { useApp } from '../context/AppContext';

const TestSearch = () => {
    const { addToCart } = useApp();
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        priceRange: [0, 5000],
        homeCollection: false,
        sortBy: 'popularity'
    });

    const filteredTests = tests.filter(test =>
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        test.price >= filters.priceRange[0] && test.price <= filters.priceRange[1] &&
        (!filters.homeCollection || test.homeCollection)
    );

    const handleAddToCart = (test) => {
        addToCart({
            id: test.id,
            type: 'test',
            name: test.name,
            price: test.price,
            labName: test.labName,
            labId: test.labId
        });
    };

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Browse Tests</h1>

            {/* Search and Filters */}
            <div className="card mb-6">
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search tests..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input pl-10"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.homeCollection}
                                onChange={(e) => setFilters({ ...filters, homeCollection: e.target.checked })}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span className="text-sm">Home Collection Only</span>
                        </label>

                        <select
                            value={filters.sortBy}
                            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                            className="input w-auto"
                        >
                            <option value="popularity">Most Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-4">
                <p className="text-gray-600">{filteredTests.length} tests found</p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map(test => (
                    <div key={test.id} className="card card-hover p-0 overflow-hidden">
                        <div className="h-48 overflow-hidden relative">
                            <img src={test.image} alt={test.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                            {test.homeCollection && (
                                <div className="absolute top-4 right-4 badge badge-success">
                                    Home Collection
                                </div>
                            )}
                        </div>

                        <div className="p-5">
                            <h3 className="font-semibold text-secondary text-lg mb-2 line-clamp-2 h-14">{test.name}</h3>

                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">{test.labName}</span>
                                <div className="flex items-center gap-1 ml-auto">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{test.rating}</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">{test.description}</p>

                            <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                                <div>
                                    <span className="text-2xl font-bold text-primary">₹{test.price}</span>
                                    <span className="text-sm text-gray-400 line-through ml-2">₹{test.originalPrice}</span>
                                    <div className="text-sm text-accent font-medium">{test.discount}% off</div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Link to={`/tests/${test.id}`} className="btn btn-outline flex-1 text-sm py-2">
                                    View Details
                                </Link>
                                <button onClick={() => handleAddToCart(test)} className="btn btn-primary flex-1 text-sm py-2">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestSearch;

import { Link } from 'react-router-dom';
import { Search, ArrowRight, Smartphone, Calendar, FileText, CheckCircle, Star, MapPin, Home as HomeIcon } from 'lucide-react';
import { tests, healthPackages, labs } from '../data/mockData';
import { useApp } from '../context/AppContext';

const Home = () => {
    const { addToCart } = useApp();
    const popularTests = tests.filter(test => test.popular);
    const featuredPackages = healthPackages.slice(0, 3);
    const topLabs = labs.slice(0, 4);

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
        <div className="pb-20 lg:pb-0">
            {/* Hero Section */}
            <section className="bg-background py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                                Your Health, Our Priority
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Book lab tests online with home sample collection. Get accurate reports delivered fast.
                            </p>

                            {/* Search Bar */}
                            <div className="bg-white rounded-lg shadow-card-hover p-2 flex flex-col sm:flex-row gap-2 mb-8">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search for tests, packages, or labs..."
                                        className="w-full pl-10 pr-4 py-3 rounded focus:outline-none"
                                    />
                                </div>
                                <Link to="/tests" className="btn btn-primary whitespace-nowrap">
                                    Search Tests
                                </Link>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white rounded-lg shadow-card">
                                    <div className="text-3xl font-bold text-primary">500+</div>
                                    <div className="text-sm text-gray-600">Tests Available</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-card">
                                    <div className="text-3xl font-bold text-primary">50+</div>
                                    <div className="text-sm text-gray-600">Partner Labs</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-card">
                                    <div className="text-3xl font-bold text-primary">1L+</div>
                                    <div className="text-sm text-gray-600">Happy Customers</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        {/* Right Image */}
                        <div className="hidden md:block h-[400px] w-full relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl transform rotate-3 scale-95 z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2000"
                                alt="Modern Healthcare"
                                className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Tests */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-2">Popular Tests</h2>
                            <p className="text-gray-600">Most booked health tests</p>
                        </div>
                        <Link to="/tests" className="btn btn-outline hidden sm:flex">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularTests.map((test) => (
                            <div key={test.id} className="card card-hover">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-semibold text-secondary line-clamp-2">{test.name}</h3>
                                    {test.homeCollection && (
                                        <span className="badge badge-success text-xs">Home Collection</span>
                                    )}
                                </div>

                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{test.description}</p>

                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{test.labName}</span>
                                    <div className="flex items-center gap-1 ml-auto">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium">{test.rating}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-2xl font-bold text-primary">₹{test.price}</span>
                                        <span className="text-sm text-gray-400 line-through ml-2">₹{test.originalPrice}</span>
                                        <span className="text-sm text-accent font-medium ml-2">{test.discount}% off</span>
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
                        ))}
                    </div>

                    <Link to="/tests" className="btn btn-outline w-full sm:hidden mt-6">
                        View All Tests <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-2">Health Packages</h2>
                            <p className="text-gray-600">Comprehensive health checkup packages</p>
                        </div>
                        <Link to="/packages" className="btn btn-outline hidden sm:flex">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredPackages.map((pkg) => (
                            <div key={pkg.id} className="card card-hover">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="badge badge-info">{pkg.category}</span>
                                    <span className="text-sm font-medium text-accent">{pkg.discount}% OFF</span>
                                </div>

                                <h3 className="text-xl font-bold text-secondary mb-2">{pkg.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

                                <div className="bg-gray-50 rounded p-3 mb-4">
                                    <div className="text-sm text-gray-600 mb-2">Includes {pkg.testsIncluded} tests</div>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.features.slice(0, 4).map((feature, idx) => (
                                            <span key={idx} className="text-xs bg-white px-2 py-1 rounded">{feature}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-3xl font-bold text-primary">₹{pkg.price}</span>
                                        <span className="text-sm text-gray-400 line-through ml-2">₹{pkg.originalPrice}</span>
                                    </div>
                                </div>

                                <Link to={`/packages/${pkg.id}`} className="btn btn-primary w-full">
                                    View Package
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Labs */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-2">Top Rated Labs Near You</h2>
                            <p className="text-gray-600">Trusted and certified diagnostic centers</p>
                        </div>
                        <Link to="/labs" className="btn btn-outline hidden sm:flex">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topLabs.map((lab) => (
                            <Link key={lab.id} to={`/labs/${lab.id}`} className="card card-hover">
                                <div className="aspect-video bg-gray-100 rounded mb-4 overflow-hidden">
                                    <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                                </div>

                                <h3 className="font-semibold text-secondary mb-2">{lab.name}</h3>

                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium">{lab.rating}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">({lab.reviewsCount} reviews)</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{lab.distance} away</span>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t">
                                    <span className="text-sm text-gray-600">{lab.testsAvailable} tests</span>
                                    {lab.homeCollection && (
                                        <span className="badge badge-success text-xs">Home Collection</span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary mb-2">How It Works</h2>
                        <p className="text-gray-600">Book your test in 4 simple steps</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Search, title: 'Search Test', desc: 'Browse and select from 500+ tests and packages' },
                            { icon: Calendar, title: 'Book Slot', desc: 'Choose convenient time for home collection or lab visit' },
                            { icon: HomeIcon, title: 'Sample Collection', desc: 'Our expert phlebotomist visits your home' },
                            { icon: FileText, title: 'Get Reports', desc: 'Receive accurate reports online within hours' }
                        ].map((step, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                    <step.icon className="w-8 h-8 text-primary" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 className="font-semibold text-secondary mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Download CTA */}
            <section className="py-16 bg-primary text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
                            <p className="text-lg mb-6 opacity-90">
                                Get exclusive app-only offers and manage your health on the go
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                                    <Smartphone className="w-5 h-5" />
                                    Download App
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="w-64 h-64 bg-white/10 rounded-lg flex items-center justify-center">
                                <Smartphone className="w-32 h-32 text-white/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary mb-2">Why Choose HealthTest?</h2>
                        <p className="text-gray-600">Your trusted health partner</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle, title: 'NABL Certified Labs', desc: 'All partner labs are certified and maintain highest quality standards' },
                            { icon: HomeIcon, title: 'Free Home Collection', desc: 'Trained phlebotomists collect samples from your doorstep' },
                            { icon: FileText, title: 'Fast Reports', desc: 'Get accurate reports delivered online within hours' },
                            { icon: Star, title: 'Best Prices', desc: 'Up to 50% discount on all tests and packages' },
                            { icon: CheckCircle, title: 'Secure & Private', desc: 'Your health data is encrypted and completely confidential' },
                            { icon: Smartphone, title: '24/7 Support', desc: 'Our customer support team is always here to help you' }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

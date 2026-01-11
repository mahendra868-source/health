import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Star, Clock, TestTube, FileText, Home } from 'lucide-react';
import { tests } from '../data/mockData';
import { useApp } from '../context/AppContext';

const TestDetail = () => {
    const { id } = useParams();
    const { addToCart } = useApp();
    const test = tests.find(t => t.id === parseInt(id));

    if (!test) return <div className="container-custom py-8">Test not found</div>;

    const relatedTests = tests.filter(t => t.category === test.category && t.id !== test.id).slice(0, 3);

    const handleAddToCart = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Test Header */}
                    <div className="card">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-secondary mb-2">{test.name}</h1>
                                <p className="text-gray-600">{test.description}</p>
                            </div>
                            {test.homeCollection && (
                                <span className="badge badge-success">Home Collection</span>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{test.labName}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{test.rating} Rating</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TestTube className="w-4 h-4" />
                                <span>{test.sampleType} Sample</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Report in {test.reportDeliveryTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Parameters */}
                    <div className="card">
                        <h2 className="text-xl font-semibold text-secondary mb-4">Parameters Included</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {test.parameters.map((param, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                    <FileText className="w-4 h-4 text-primary" />
                                    <span>{param}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Preparation Instructions */}
                    <div className="card">
                        <h2 className="text-xl font-semibold text-secondary mb-4">Preparation Instructions</h2>
                        <p className="text-gray-600">{test.preparationInstructions}</p>
                    </div>

                    {/* Related Tests */}
                    {relatedTests.length > 0 && (
                        <div>
                            <h2 className="text-xl font-semibold text-secondary mb-4">Related Tests</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {relatedTests.map(relTest => (
                                    <Link key={relTest.id} to={`/tests/${relTest.id}`} className="card card-hover">
                                        <h3 className="font-semibold text-secondary mb-2 line-clamp-2">{relTest.name}</h3>
                                        <div className="text-primary font-bold">₹{relTest.price}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="card sticky top-20">
                        <div className="mb-6">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-primary">₹{test.price}</span>
                                <span className="text-lg text-gray-400 line-through">₹{test.originalPrice}</span>
                            </div>
                            <span className="text-accent font-semibold">{test.discount}% OFF</span>
                        </div>

                        <button onClick={handleAddToCart} className="btn btn-primary w-full mb-3">
                            Add to Cart
                        </button>
                        <Link to="/checkout" className="btn btn-accent w-full">
                            Book Now
                        </Link>

                        <div className="mt-6 pt-6 border-t space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Home className="w-4 h-4 text-primary" />
                                <span>Free home sample collection</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>Reports in {test.reportDeliveryTime}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <FileText className="w-4 h-4 text-primary" />
                                <span>Digital reports via email</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetail;

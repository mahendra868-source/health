// All remaining page components in one file for efficiency

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { labs, healthPackages, bookings, reports, familyMembers, offers, notifications, doctors, healthMetrics, faqs, referralStats } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Star, MapPin, Phone, Clock, Award, Plus, Trash2, Edit, Download, Share2, Calendar, CheckCircle, X, Copy, Facebook, Twitter, Instagram, Mail, HelpCircle, Settings as SettingsIcon, Bell, Lock, Globe, Trash, LogOut, Search, AlertCircle, TrendingUp, TrendingDown, Minus, Home as HomeIcon, CreditCard, Wallet as WalletIcon, Tag, Gift, FileText, User, Activity } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import Modal from '../components/Modal';

// Lab Listing
export const LabListing = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Partner Labs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {labs.map(lab => (
                    <Link key={lab.id} to={`/labs/${lab.id}`} className="card card-hover">
                        <div className="aspect-video bg-gray-100 rounded mb-4 overflow-hidden">
                            <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-semibold text-secondary mb-2">{lab.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{lab.rating}</span>
                            <span className="text-sm text-gray-500">({lab.reviewsCount})</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{lab.distance} away</span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t">
                            <span className="text-sm text-gray-600">{lab.testsAvailable} tests</span>
                            {lab.homeCollection && <span className="badge badge-success text-xs">Home Collection</span>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Lab Detail
export const LabDetail = () => {
    const { id } = useParams();
    const lab = labs.find(l => l.id === parseInt(id));
    if (!lab) return <div className="container-custom py-8">Lab not found</div>;

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="card mb-6">
                <div className="aspect-video bg-gray-100 rounded mb-6 overflow-hidden">
                    <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-3xl font-bold text-secondary mb-4">{lab.name}</h1>
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{lab.rating}</span>
                        <span className="text-gray-600">({lab.reviewsCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>{lab.distance} away</span>
                    </div>
                </div>
                <p className="text-gray-600 mb-4">{lab.about}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-gray-600">{lab.address}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Timings</h3>
                        <p className="text-gray-600">{lab.timings}</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Accreditations</h3>
                    <div className="flex gap-2">
                        {lab.accreditation.map((acc, idx) => (
                            <span key={idx} className="badge badge-info">{acc}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Health Packages
export const HealthPackages = () => {
    const { addToCart } = useApp();
    const [category, setCategory] = useState('all');

    const filteredPackages = category === 'all'
        ? healthPackages
        : healthPackages.filter(p => p.category === category);

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Health Packages</h1>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {['all', 'Full Body', 'Women', 'Senior Citizen', 'Cardiac', 'Diabetes'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap ${category === cat ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {cat === 'all' ? 'All Packages' : cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map(pkg => (
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
                        <Link to={`/packages/${pkg.id}`} className="btn btn-primary w-full">View Package</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Package Detail
export const PackageDetail = () => {
    const { id } = useParams();
    const { addToCart } = useApp();
    const pkg = healthPackages.find(p => p.id === parseInt(id));
    if (!pkg) return <div className="container-custom py-8">Package not found</div>;

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="card">
                        <span className="badge badge-info mb-4">{pkg.category}</span>
                        <h1 className="text-3xl font-bold text-secondary mb-4">{pkg.name}</h1>
                        <p className="text-gray-600 mb-6">{pkg.description}</p>
                        <h2 className="text-xl font-semibold mb-4">Includes {pkg.testsIncluded} Tests</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {pkg.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card sticky top-20">
                        <div className="mb-6">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-primary">₹{pkg.price}</span>
                                <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice}</span>
                            </div>
                            <span className="text-accent font-semibold">{pkg.discount}% OFF</span>
                        </div>
                        <button onClick={() => addToCart({ id: pkg.id, type: 'package', name: pkg.name, price: pkg.price })} className="btn btn-primary w-full mb-3">
                            Add to Cart
                        </button>
                        <Link to="/checkout" className="btn btn-accent w-full">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Cart
export const Cart = () => {
    const { cart, removeFromCart, getCartTotal } = useApp();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="container-custom py-8">
                <EmptyState
                    title="Your cart is empty"
                    description="Add tests or packages to get started"
                    action={<Link to="/tests" className="btn btn-primary">Browse Tests</Link>}
                />
            </div>
        );
    }

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                        {cart.map((item, idx) => (
                            <div key={idx} className="card flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-secondary mb-1">{item.name}</h3>
                                    <p className="text-sm text-gray-600">{item.labName}</p>
                                    <p className="text-lg font-bold text-primary mt-2">₹{item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id, item.type)} className="p-2 hover:bg-red-50 rounded text-red-600">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="card sticky top-20">
                        <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{getCartTotal()}</span>
                            </div>
                            <div className="flex justify-between text-accent">
                                <span>Discount</span>
                                <span>-₹0</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                <span>Total</span>
                                <span className="text-primary">₹{getCartTotal()}</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/checkout')} className="btn btn-primary w-full">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Checkout
export const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useApp();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        patient: '1',
        appointmentType: 'home',
        address: '',
        date: '',
        timeSlot: '',
        paymentMethod: 'upi'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        navigate('/booking-confirmation/BK001250');
    };

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Checkout</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="card">
                        <h2 className="text-xl font-semibold mb-4">Select Patient</h2>
                        <select value={formData.patient} onChange={(e) => setFormData({ ...formData, patient: e.target.value })} className="input" required>
                            {familyMembers.map(member => (
                                <option key={member.id} value={member.id}>{member.name} ({member.relation})</option>
                            ))}
                        </select>
                    </div>

                    <div className="card">
                        <h2 className="text-xl font-semibold mb-4">Appointment Type</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" onClick={() => setFormData({ ...formData, appointmentType: 'home' })} className={`p-4 border-2 rounded-lg ${formData.appointmentType === 'home' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                                <HomeIcon className="w-6 h-6 mx-auto mb-2" />
                                <div className="font-medium">Home Collection</div>
                            </button>
                            <button type="button" onClick={() => setFormData({ ...formData, appointmentType: 'lab' })} className={`p-4 border-2 rounded-lg ${formData.appointmentType === 'lab' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                                <MapPin className="w-6 h-6 mx-auto mb-2" />
                                <div className="font-medium">Lab Visit</div>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="input" required />
                            <select value={formData.timeSlot} onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })} className="input" required>
                                <option value="">Select time slot</option>
                                <option value="morning">Morning (7AM - 11AM)</option>
                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                <option value="evening">Evening (5PM - 8PM)</option>
                            </select>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                        <div className="space-y-2">
                            {[
                                { value: 'upi', label: 'UPI' },
                                { value: 'card', label: 'Credit/Debit Card' },
                                { value: 'wallet', label: 'Health Wallet' },
                                { value: 'later', label: 'Pay Later' }
                            ].map(method => (
                                <label key={method.value} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input type="radio" name="payment" value={method.value} checked={formData.paymentMethod === method.value} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} className="text-primary focus:ring-primary" />
                                    <span>{method.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card sticky top-20">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-3 mb-4">
                            {cart.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                    <span className="line-clamp-1">{item.name}</span>
                                    <span className="font-medium">₹{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4 space-y-2 mb-4">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">₹{getCartTotal()}</span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Confirm Booking</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

// Booking Confirmation
export const BookingConfirmation = () => {
    const { id } = useParams();

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="max-w-2xl mx-auto">
                <div className="card text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-secondary mb-2">Booking Confirmed!</h1>
                    <p className="text-gray-600 mb-6">Your booking has been successfully placed</p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-600">Booking ID</span>
                                <p className="font-semibold">{id}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Date & Time</span>
                                <p className="font-semibold">Jan 15, 2026 - 9:00 AM</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Type</span>
                                <p className="font-semibold">Home Collection</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Amount Paid</span>
                                <p className="font-semibold text-primary">₹1,499</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/my-bookings" className="btn btn-primary flex-1">View Bookings</Link>
                        <Link to="/" className="btn btn-outline flex-1">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// My Bookings
export const MyBookings = () => {
    const [tab, setTab] = useState('upcoming');
    const filteredBookings = bookings.filter(b => {
        if (tab === 'upcoming') return b.status === 'upcoming';
        if (tab === 'completed') return b.status === 'completed';
        if (tab === 'cancelled') return b.status === 'cancelled';
        return true;
    });

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">My Bookings</h1>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {['upcoming', 'completed', 'cancelled'].map(t => (
                    <button key={t} onClick={() => setTab(t)} className={`px-6 py-2 rounded-lg capitalize whitespace-nowrap ${tab === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>
                        {t}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredBookings.map(booking => (
                    <Link key={booking.id} to={`/bookings/${booking.id}`} className="card card-hover block">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="font-semibold text-secondary">{booking.tests[0] || booking.packageName}</h3>
                                <p className="text-sm text-gray-600">{booking.labName}</p>
                            </div>
                            <span className={`badge ${booking.status === 'upcoming' ? 'badge-info' : booking.status === 'completed' ? 'badge-success' : 'badge-danger'}`}>
                                {booking.status}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>{booking.date}</span>
                            <span>{booking.time}</span>
                            <span>{booking.appointmentType}</span>
                            <span className="font-semibold text-primary">₹{booking.price}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Booking Detail
export const BookingDetail = () => {
    const { id } = useParams();
    const booking = bookings.find(b => b.id === id);
    if (!booking) return <div className="container-custom py-8">Booking not found</div>;

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Booking Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="card">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">{booking.tests[0] || booking.packageName}</h2>
                                <p className="text-gray-600">{booking.labName}</p>
                            </div>
                            <span className={`badge ${booking.status === 'upcoming' ? 'badge-info' : 'badge-success'}`}>{booking.status}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-600">Booking ID</span>
                                <p className="font-semibold">{booking.id}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Date & Time</span>
                                <p className="font-semibold">{booking.date} - {booking.time}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Patient</span>
                                <p className="font-semibold">{booking.patientName}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Type</span>
                                <p className="font-semibold">{booking.appointmentType}</p>
                            </div>
                        </div>
                    </div>

                    {booking.status === 'upcoming' && (
                        <div className="flex gap-4">
                            <button className="btn btn-outline flex-1">Reschedule</button>
                            <button className="btn bg-red-600 text-white hover:bg-red-700 flex-1">Cancel Booking</button>
                        </div>
                    )}
                </div>

                <div>
                    <div className="card">
                        <h3 className="font-semibold mb-4">Payment Details</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Amount</span>
                                <span className="font-semibold">₹{booking.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Status</span>
                                <span className="text-green-600 font-semibold">{booking.paymentStatus}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// My Reports
export const MyReports = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">My Reports</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map(report => (
                    <Link key={report.id} to={`/reports/${report.id}`} className="card card-hover">
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-secondary line-clamp-2">{report.testName}</h3>
                            <span className={`badge ${report.status === 'normal' ? 'badge-success' : 'badge-warning'}`}>{report.status}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{report.labName}</p>
                        <p className="text-sm text-gray-600">{report.date}</p>
                        <div className="flex gap-2 mt-4">
                            <button className="btn btn-outline flex-1 text-sm py-2">
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="btn btn-primary flex-1 text-sm py-2">View</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Report Detail
export const ReportDetail = () => {
    const { id } = useParams();
    const report = reports.find(r => r.id === id);
    if (!report) return <div className="container-custom py-8">Report not found</div>;

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-secondary">{report.testName}</h1>
                <div className="flex gap-2">
                    <button className="btn btn-outline"><Download className="w-4 h-4" /> Download</button>
                    <button className="btn btn-primary"><Share2 className="w-4 h-4" /> Share</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="card mb-6">
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                                <span className="text-gray-600">Patient</span>
                                <p className="font-semibold">{report.patientName}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Date</span>
                                <p className="font-semibold">{report.date}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Lab</span>
                                <p className="font-semibold">{report.labName}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Status</span>
                                <span className={`badge ${report.status === 'normal' ? 'badge-success' : 'badge-warning'}`}>{report.status}</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="text-xl font-semibold mb-4">Test Results</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left p-3">Parameter</th>
                                        <th className="text-left p-3">Value</th>
                                        <th className="text-left p-3">Reference Range</th>
                                        <th className="text-left p-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {report.parameters.map((param, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="p-3">{param.name}</td>
                                            <td className="p-3 font-semibold">{param.value} {param.unit}</td>
                                            <td className="p-3 text-gray-600">{param.referenceRange}</td>
                                            <td className="p-3">
                                                <span className={`badge ${param.status === 'normal' ? 'badge-success' : param.status === 'high' ? 'badge-danger' : 'badge-warning'}`}>
                                                    {param.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card">
                        <h3 className="font-semibold mb-4">AI Health Insights</h3>
                        <div className="space-y-3 text-sm">
                            <div className="p-3 bg-blue-50 rounded">
                                <p className="text-blue-900">Most parameters are within normal range. Continue maintaining a healthy lifestyle.</p>
                            </div>
                            {report.status === 'attention' && (
                                <div className="p-3 bg-yellow-50 rounded">
                                    <p className="text-yellow-900">Some parameters need attention. Consult with a doctor for personalized advice.</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 space-y-2">
                            <button className="btn btn-primary w-full text-sm">Consult Doctor</button>
                            <button className="btn btn-outline w-full text-sm">Book Follow-up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Continue with remaining pages in next file...

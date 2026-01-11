// This file contains all remaining page components as placeholders
// Each can be extracted to its own file later

import { Link } from 'react-router-dom';
import { Home, Calendar, FileText, Users, Wallet, Tag, Bell, Activity, Stethoscope, Settings as SettingsIcon, HelpCircle, Gift, Search as SearchIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { tests, healthPackages, labs, bookings, reports, familyMembers, offers, notifications, doctors, healthMetrics, faqs, referralStats } from '../data/mockData';

// Dashboard Page
export const Dashboard = () => {
    const { user } = useApp();
    const upcomingBookings = bookings.filter(b => b.status === 'upcoming').slice(0, 2);
    const recentReports = reports.slice(0, 3);

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-secondary mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-gray-600">Here's your health overview</p>
            </div>

            {/* Health Score Card */}
            <div className="card bg-gradient-to-br from-primary to-accent text-white mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Your Health Score</h3>
                        <div className="text-5xl font-bold mb-2">{user.healthScore}</div>
                        <p className="text-sm opacity-90">Good - Keep it up!</p>
                    </div>
                    <div className="w-32 h-32 rounded-full border-8 border-white/30 flex items-center justify-center">
                        <Activity className="w-16 h-16" />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: SearchIcon, label: 'Book Test', to: '/tests', color: 'bg-blue-50 text-blue-600' },
                    { icon: FileText, label: 'View Reports', to: '/my-reports', color: 'bg-green-50 text-green-600' },
                    { icon: Users, label: 'Family', to: '/family', color: 'bg-purple-50 text-purple-600' },
                    { icon: Wallet, label: 'Wallet', to: '/wallet', color: 'bg-orange-50 text-orange-600' }
                ].map((action, idx) => (
                    <Link key={idx} to={action.to} className="card card-hover text-center">
                        <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                            <action.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium text-secondary">{action.label}</span>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upcoming Bookings */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-secondary">Upcoming Bookings</h2>
                        <Link to="/my-bookings" className="text-sm text-primary hover:underline">View All</Link>
                    </div>
                    {upcomingBookings.length > 0 ? (
                        <div className="space-y-4">
                            {upcomingBookings.map(booking => (
                                <div key={booking.id} className="card">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-semibold text-secondary">{booking.tests[0] || booking.packageName}</h3>
                                            <p className="text-sm text-gray-600">{booking.labName}</p>
                                        </div>
                                        <span className="badge badge-info">{booking.status}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <span>{booking.date}</span>
                                        <span>{booking.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="card text-center py-8">
                            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600">No upcoming bookings</p>
                            <Link to="/tests" className="btn btn-primary mt-4">Book a Test</Link>
                        </div>
                    )}
                </div>

                {/* Recent Reports */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-secondary">Recent Reports</h2>
                        <Link to="/my-reports" className="text-sm text-primary hover:underline">View All</Link>
                    </div>
                    {recentReports.length > 0 ? (
                        <div className="space-y-4">
                            {recentReports.map(report => (
                                <Link key={report.id} to={`/reports/${report.id}`} className="card card-hover block">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-semibold text-secondary">{report.testName}</h3>
                                            <p className="text-sm text-gray-600">{report.date}</p>
                                        </div>
                                        <span className={`badge ${report.status === 'normal' ? 'badge-success' : 'badge-warning'}`}>
                                            {report.status}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="card text-center py-8">
                            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600">No reports available</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Test Search Page
export const TestSearch = () => {
    const { addToCart } = useApp();
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ priceRange: [0, 5000], homeCollection: false });

    const filteredTests = tests.filter(test =>
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        test.price >= filters.priceRange[0] && test.price <= filters.priceRange[1] &&
        (!filters.homeCollection || test.homeCollection)
    );

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Browse Tests</h1>

            {/* Search and Filters */}
            <div className="card mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search tests..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input flex-1"
                    />
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={filters.homeCollection}
                            onChange={(e) => setFilters({ ...filters, homeCollection: e.target.checked })}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Home Collection Only</span>
                    </label>
                </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map(test => (
                    <div key={test.id} className="card card-hover">
                        <h3 className="font-semibold text-secondary mb-2 line-clamp-2">{test.name}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{test.description}</p>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-2xl font-bold text-primary">₹{test.price}</span>
                                <span className="text-sm text-gray-400 line-through ml-2">₹{test.originalPrice}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Link to={`/tests/${test.id}`} className="btn btn-outline flex-1 text-sm py-2">Details</Link>
                            <button onClick={() => addToCart({ id: test.id, type: 'test', name: test.name, price: test.price, labName: test.labName })} className="btn btn-primary flex-1 text-sm py-2">Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Import useState for TestSearch
import { useState } from 'react';

export default { Dashboard, TestSearch };

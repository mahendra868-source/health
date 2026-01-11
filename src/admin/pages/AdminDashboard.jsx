import {
    Users,
    Calendar,
    Activity,
    DollarSign,
    TrendingUp,
    TrendingDown,
    ArrowRight
} from 'lucide-react';
import { bookings, tests, labs, healthPackages } from '../../data/mockData';

const AdminDashboard = () => {
    // Calculate mock stats
    const totalRevenue = bookings.reduce((sum, b) => sum + b.price, 0);
    const activeBookings = bookings.filter(b => b.status === 'upcoming').length;
    const completedBookings = bookings.filter(b => b.status === 'completed').length;

    // Recent bookings for the table - ensure we take 5
    const recentBookings = [...bookings].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    const stats = [
        {
            title: 'Total Revenue',
            value: `₹${totalRevenue.toLocaleString()}`,
            icon: DollarSign,
            trend: '+12.5%',
            trendUp: true,
            color: 'bg-blue-500'
        },
        {
            title: 'Active Bookings',
            value: activeBookings,
            icon: Calendar,
            trend: '+5.2%',
            trendUp: true,
            color: 'bg-emerald-500'
        },
        {
            title: 'Total Tests',
            value: tests.length + healthPackages.length,
            icon: Activity,
            trend: '+1.0%',
            trendUp: true,
            color: 'bg-purple-500'
        },
        {
            title: 'Partner Labs',
            value: labs.length,
            icon: Users,
            trend: '+2',
            trendUp: true,
            color: 'bg-orange-500'
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <div className="text-sm text-gray-500">Last updated: Today at 09:40 AM</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                            </div>
                            <span className={`flex items-center text-sm font-medium ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                                {stat.trendUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{stat.title}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Bookings */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-gray-800">Recent Bookings</h2>
                        <button className="text-sm text-primary hover:underline flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Booking ID</th>
                                    <th className="px-6 py-4">Patient</th>
                                    <th className="px-6 py-4">Test/Package</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-primary">#{booking.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{booking.patientName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 max-w-[200px] truncate">
                                            {booking.tests[0] || booking.packageName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`
                                                inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${booking.status === 'upcoming'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : booking.status === 'completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'}
                                            `}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">₹{booking.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Popular Tests/Quick Stats */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800">Popular Tests</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {tests.filter(t => t.popular).slice(0, 4).map((test, index) => (
                                <div key={test.id} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{test.name}</p>
                                        <p className="text-xs text-gray-500">{test.bookingsCount || 120} bookings</p>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">₹{test.price}</div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 btn btn-outline text-sm">View Analytics</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

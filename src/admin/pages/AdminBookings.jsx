import { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { bookings } from '../../data/mockData';

const AdminBookings = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [bookingList, setBookingList] = useState(bookings);

    const filteredBookings = bookingList.filter(booking => {
        const matchesSearch = booking.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const handleStatusChange = (id, newStatus) => {
        // In a real app, this would be an API call
        setBookingList(bookingList.map(b => b.id === id ? { ...b, status: newStatus } : b));
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Bookings</h1>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search booking ID or patient..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 border rounded-lg text-sm bg-white outline-none focus:ring-1 focus:ring-primary"
                    >
                        <option value="all">All Status</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Booking ID</th>
                                <th className="px-6 py-4">Date & Time</th>
                                <th className="px-6 py-4">Patient Info</th>
                                <th className="px-6 py-4">Test/Package</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-primary">#{booking.id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{booking.date}</div>
                                        <div className="text-xs text-gray-500">{booking.time}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{booking.patientName}</div>
                                        <div className="text-xs text-gray-500">Age: 45 • {booking.appointmentType}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-[200px] truncate">
                                        {booking.tests[0] || booking.packageName}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`
                                            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                            ${booking.status === 'upcoming'
                                                ? 'bg-blue-50 text-blue-700 border-blue-100'
                                                : booking.status === 'completed'
                                                    ? 'bg-green-50 text-green-700 border-green-100'
                                                    : 'bg-red-50 text-red-700 border-red-100'}
                                        `}>
                                            {booking.status === 'upcoming' && <Clock className="w-3 h-3 mr-1" />}
                                            {booking.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                                            {booking.status === 'cancelled' && <XCircle className="w-3 h-3 mr-1" />}
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-700">₹{booking.price}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {booking.status === 'upcoming' && (
                                                <>
                                                    <button
                                                        onClick={() => handleStatusChange(booking.id, 'completed')}
                                                        className="p-1.5 hover:bg-green-50 text-green-600 rounded"
                                                        title="Mark Completed"
                                                    >
                                                        <CheckCircle className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusChange(booking.id, 'cancelled')}
                                                        className="p-1.5 hover:bg-red-50 text-red-600 rounded"
                                                        title="Cancel Booking"
                                                    >
                                                        <XCircle className="w-4 h-4" />
                                                    </button>
                                                </>
                                            )}
                                            <button className="p-1.5 hover:bg-blue-50 text-blue-600 rounded" title="View Details">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredBookings.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No bookings found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminBookings;

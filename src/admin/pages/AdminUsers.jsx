import { useState } from 'react';
import { Search, MoreHorizontal, User, Mail, Phone, Shield } from 'lucide-react';

const AdminUsers = () => {
    // Local mock users since mockData doesn't have a full list
    const [users] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+91 98765 43210', role: 'User', status: 'Active', joined: 'Jan 15, 2025' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+91 98765 43211', role: 'User', status: 'Active', joined: 'Feb 10, 2025' },
        { id: 3, name: 'Admin User', email: 'admin@healthbox.com', phone: '+91 99999 99999', role: 'Admin', status: 'Active', joined: 'Jan 01, 2025' },
        { id: 4, name: 'Rahul Sharma', email: 'rahul.s@example.com', phone: '+91 88888 77777', role: 'User', status: 'Inactive', joined: 'Mar 05, 2025' },
        { id: 5, name: 'Priya Patel', email: 'priya.p@example.com', phone: '+91 77777 66666', role: 'User', status: 'Active', joined: 'Mar 20, 2025' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Joined</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">{user.name}</div>
                                                <div className="text-xs text-gray-500">{user.email}</div>
                                                <div className="text-xs text-gray-500">{user.phone}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-sm text-gray-700">
                                            {user.role === 'Admin' ? <Shield className="w-3 h-3 text-purple-500" /> : <User className="w-3 h-3 text-gray-500" />}
                                            {user.role}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`
                                            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                            ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                                        `}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;

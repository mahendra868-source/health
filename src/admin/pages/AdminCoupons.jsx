import { useState } from 'react';
import { Search, Plus, Tag, Calendar, Trash2, Edit, CheckCircle, XCircle } from 'lucide-react';

const AdminCoupons = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [coupons, setCoupons] = useState([
        { id: 1, code: 'WELCOME50', discount: '50%', type: 'Percentage', maxDiscount: '₹500', minOrder: '₹999', expiry: '2025-12-31', status: 'Active', usage: 1250 },
        { id: 2, code: 'HEALTH20', discount: '20%', type: 'Percentage', maxDiscount: '₹200', minOrder: '₹499', expiry: '2025-06-30', status: 'Active', usage: 850 },
        { id: 3, code: 'FLAT100', discount: '₹100', type: 'Flat', maxDiscount: '₹100', minOrder: '₹500', expiry: '2025-03-31', status: 'Expired', usage: 2300 },
        { id: 4, code: 'SUMMER30', discount: '30%', type: 'Percentage', maxDiscount: '₹300', minOrder: '₹1499', expiry: '2025-08-15', status: 'Scheduled', usage: 0 },
    ]);

    const filteredCoupons = coupons.filter(coupon =>
        coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleStatus = (id) => {
        setCoupons(coupons.map(c => {
            if (c.id === id) {
                return { ...c, status: c.status === 'Active' ? 'Inactive' : 'Active' };
            }
            return c;
        }));
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Coupons</h1>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search coupons..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                        <Plus className="w-4 h-4" /> Create Coupon
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Coupon Code</th>
                                <th className="px-6 py-4">Discount</th>
                                <th className="px-6 py-4">Min. Order</th>
                                <th className="px-6 py-4">Expiry Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Usage</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredCoupons.map((coupon) => (
                                <tr key={coupon.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                                                <Tag className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 border-2 border-dashed border-gray-200 px-2 py-0.5 rounded inline-block bg-gray-50">
                                                    {coupon.code}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{coupon.discount} OFF</div>
                                        <div className="text-xs text-gray-500">Up to {coupon.maxDiscount}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{coupon.minOrder}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            {coupon.expiry}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => toggleStatus(coupon.id)}
                                            className={`
                                                inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border cursor-pointer hover:opacity-80 transition-opacity
                                                ${coupon.status === 'Active'
                                                    ? 'bg-green-50 text-green-700 border-green-100'
                                                    : coupon.status === 'Expired'
                                                        ? 'bg-gray-100 text-gray-600 border-gray-200'
                                                        : 'bg-yellow-50 text-yellow-700 border-yellow-100'}
                                            `}
                                        >
                                            {coupon.status === 'Active' && <CheckCircle className="w-3 h-3 mr-1" />}
                                            {coupon.status === 'Expired' && <XCircle className="w-3 h-3 mr-1" />}
                                            {coupon.status}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {coupon.usage} times
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 hover:bg-blue-50 text-blue-600 rounded">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-red-50 text-red-600 rounded">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
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

export default AdminCoupons;

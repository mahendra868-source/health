import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Filter } from 'lucide-react';
import { tests } from '../../data/mockData';

const AdminTests = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [testList, setTestList] = useState(tests);

    const filteredTests = testList.filter(test =>
        test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Tests</h1>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search tests..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                        <Plus className="w-4 h-4" /> Add Test
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Test Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Lab</th>
                                <th className="px-6 py-4">Report Time</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredTests.map((test) => (
                                <tr key={test.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                                                <img src={test.image} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 line-clamp-1">{test.name}</div>
                                                <div className="text-xs text-gray-500">ID: {test.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                            {test.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-700">₹{test.price}</div>
                                        {test.originalPrice > test.price && (
                                            <div className="text-xs text-gray-400 line-through">₹{test.originalPrice}</div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{test.labName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{test.reportDeliveryTime}</td>
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

export default AdminTests;

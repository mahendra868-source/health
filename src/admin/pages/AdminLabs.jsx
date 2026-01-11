import { useState } from 'react';
import { Search, Plus, MapPin, Star, MoreVertical } from 'lucide-react';
import { labs } from '../../data/mockData';

const AdminLabs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLabs = labs.filter(lab =>
        lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lab.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Labs</h1>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search labs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                        <Plus className="w-4 h-4" /> Add Lab
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLabs.map(lab => (
                    <div key={lab.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                        <div className="h-40 overflow-hidden relative">
                            <img src={lab.image} alt={lab.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute top-2 right-2">
                                <button className="p-1.5 bg-white/80 backdrop-blur rounded-full hover:bg-white text-gray-700">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{lab.name}</h3>
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded text-yellow-700 text-xs font-bold">
                                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                    {lab.rating}
                                </div>
                            </div>

                            <div className="flex items-start gap-2 text-sm text-gray-600 mb-4 h-10 line-clamp-2">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                                {lab.address}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="text-xs text-gray-500">
                                    <span className="font-semibold text-gray-900">{lab.testsAvailable || 50}+</span> Tests
                                </div>
                                <button className="text-sm font-medium text-primary hover:underline">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminLabs;

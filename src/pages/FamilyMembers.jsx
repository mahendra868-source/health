import { useState } from 'react';
import { Plus, Edit, Trash2, User } from 'lucide-react';
import { familyMembers as initialMembers } from '../data/mockData';
import Modal from '../components/Modal';

const FamilyMembers = () => {
    const [members, setMembers] = useState(initialMembers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        relation: '',
        age: '',
        gender: '',
        phone: '',
        bloodGroup: '',
        dob: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMembers([...members, { ...formData, id: members.length + 1 }]);
        setIsModalOpen(false);
        setFormData({ name: '', relation: '', age: '', gender: '', phone: '', bloodGroup: '', dob: '' });
    };

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-secondary">Family Members</h1>
                <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                    <Plus className="w-5 h-5" /> Add Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map(member => (
                    <div key={member.id} className="card">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <User className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded">
                                    <Edit className="w-4 h-4 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-red-50 rounded">
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                            </div>
                        </div>
                        <h3 className="font-semibold text-secondary mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{member.relation}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="text-gray-600">Age</span>
                                <p className="font-medium">{member.age} years</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Gender</span>
                                <p className="font-medium">{member.gender}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Blood Group</span>
                                <p className="font-medium">{member.bloodGroup}</p>
                            </div>
                            {member.phone && (
                                <div>
                                    <span className="text-gray-600">Phone</span>
                                    <p className="font-medium text-xs">{member.phone}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Family Member">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Relation</label>
                            <select value={formData.relation} onChange={(e) => setFormData({ ...formData, relation: e.target.value })} className="input" required>
                                <option value="">Select</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Date of Birth</label>
                            <input type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} className="input" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Gender</label>
                            <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="input" required>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Blood Group</label>
                            <select value={formData.bloodGroup} onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })} className="input">
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="input" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Add Member</button>
                </form>
            </Modal>
        </div>
    );
};

export default FamilyMembers;

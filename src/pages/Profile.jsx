import { useState } from 'react';
import { User, Mail, Phone, Calendar, Edit, Save } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Profile = () => {
    const { user, updateUser } = useApp();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
        setIsEditing(false);
    };

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">My Profile</h1>

            <div className="card max-w-2xl">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <img src={user.photo} alt={user.name} className="w-20 h-20 rounded-full" />
                        <div>
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    <button onClick={() => setIsEditing(!isEditing)} className="btn btn-outline">
                        {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input" disabled={!isEditing} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input" disabled={!isEditing} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="input" disabled={!isEditing} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Gender</label>
                            <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="input" disabled={!isEditing}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Date of Birth</label>
                            <input type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} className="input" disabled={!isEditing} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Blood Group</label>
                            <select value={formData.bloodGroup} onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })} className="input" disabled={!isEditing}>
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
                    </div>
                    {isEditing && <button type="submit" className="btn btn-primary">Save Changes</button>}
                </form>
            </div>
        </div>
    );
};

export default Profile;

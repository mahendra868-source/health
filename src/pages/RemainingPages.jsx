// Remaining pages as simple functional components

import { Link } from 'react-router-dom';
import { Wallet as WalletIcon, Plus, TrendingUp, TrendingDown, Tag, Copy, Facebook, Twitter, Instagram, Gift, Bell, Settings as SettingsIcon, Globe, Lock, Trash, LogOut, HelpCircle, Mail, Phone, Activity, TrendingUp as TrendingUpIcon, AlertCircle, FileQuestion } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { transactions, offers, notifications, doctors, healthMetrics, faqs, referralStats } from '../data/mockData';

// Health Wallet
export const HealthWallet = () => {
    const { user } = useApp();

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Health Wallet</h1>

            <div className="card bg-gradient-to-br from-primary to-accent text-white mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm opacity-90 mb-2">Available Balance</p>
                        <h2 className="text-4xl font-bold">₹{user.walletBalance}</h2>
                    </div>
                    <WalletIcon className="w-16 h-16 opacity-50" />
                </div>
                <button className="btn bg-white text-primary hover:bg-gray-100 mt-6">
                    <Plus className="w-4 h-4" /> Add Money
                </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
            <div className="space-y-3">
                {transactions.map(txn => (
                    <div key={txn.id} className="card flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${txn.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                                {txn.type === 'credit' ? <TrendingUp className="w-5 h-5 text-green-600" /> : <TrendingDown className="w-5 h-5 text-red-600" />}
                            </div>
                            <div>
                                <p className="font-medium text-secondary">{txn.description}</p>
                                <p className="text-sm text-gray-600">{txn.date}</p>
                            </div>
                        </div>
                        <span className={`font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {txn.type === 'credit' ? '+' : '-'}₹{txn.amount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Offers
export const Offers = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Offers & Coupons</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offers.map(offer => (
                    <div key={offer.id} className="card border-2 border-dashed border-primary">
                        <div className="flex items-start justify-between mb-3">
                            <Tag className="w-8 h-8 text-primary" />
                            <span className="badge badge-success">{offer.discount}{offer.discountType === 'percentage' ? '%' : '₹'} OFF</span>
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">{offer.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded mb-3">
                            <code className="flex-1 font-mono font-semibold text-primary">{offer.code}</code>
                            <button className="btn btn-outline text-sm py-1">
                                <Copy className="w-4 h-4" /> Copy
                            </button>
                        </div>
                        <div className="text-xs text-gray-600">
                            <p>Valid till: {offer.validTill}</p>
                            <p>Min order: ₹{offer.minOrderValue}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Notifications
export const Notifications = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-secondary">Notifications</h1>
                <button className="text-sm text-primary hover:underline">Mark all as read</button>
            </div>

            <div className="space-y-3">
                {notifications.map(notif => {
                    const Icon = notif.icon === 'FileText' ? FileQuestion : notif.icon === 'Calendar' ? Activity : notif.icon === 'Tag' ? Tag : notif.icon === 'Bell' ? Bell : notif.icon === 'CheckCircle' ? Activity : notif.icon === 'AlertCircle' ? AlertCircle : notif.icon === 'Gift' ? Gift : Activity;

                    return (
                        <div key={notif.id} className={`card ${!notif.read ? 'bg-blue-50 border-l-4 border-primary' : ''}`}>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-secondary mb-1">{notif.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{notif.description}</p>
                                    <span className="text-xs text-gray-500">{notif.time}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Health Tracker
export const HealthTracker = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Health Tracker</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {healthMetrics.map((metric, idx) => (
                    <div key={idx} className="card">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-secondary">{metric.metric}</h3>
                            {metric.trend === 'up' ? <TrendingUpIcon className="w-5 h-5 text-red-500" /> : <TrendingDown className="w-5 h-5 text-green-500" />}
                        </div>
                        <div className="text-3xl font-bold text-primary mb-1">{metric.latestValue}</div>
                        <div className="text-sm text-gray-600">{metric.unit}</div>
                        <div className={`mt-3 text-sm ${metric.status === 'normal' ? 'text-green-600' : metric.status === 'high' ? 'text-red-600' : 'text-yellow-600'}`}>
                            {metric.status.toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>

            <div className="card">
                <h2 className="text-xl font-semibold mb-4">Health Score</h2>
                <div className="flex items-center gap-8">
                    <div className="w-32 h-32 rounded-full border-8 border-primary flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">72</div>
                            <div className="text-xs text-gray-600">Good</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-600 mb-4">Your health score is good. Keep maintaining a healthy lifestyle with regular exercise and balanced diet.</p>
                        <Link to="/tests" className="btn btn-primary">Book Health Checkup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Symptom Checker
export const SymptomChecker = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">AI Symptom Checker</h1>

            <div className="card max-w-2xl mx-auto text-center py-12">
                <Activity className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Check Your Symptoms</h2>
                <p className="text-gray-600 mb-6">Answer a few questions about your symptoms and get personalized test recommendations</p>
                <button className="btn btn-primary">Start Symptom Check</button>
            </div>
        </div>
    );
};

// Doctor Consultation
export const DoctorConsultation = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Consult Doctor</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map(doctor => (
                    <div key={doctor.id} className="card">
                        <div className="flex items-start gap-4 mb-4">
                            <img src={doctor.photo} alt={doctor.name} className="w-16 h-16 rounded-full" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-secondary">{doctor.name}</h3>
                                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                                <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-medium">{doctor.rating}</span>
                            <span className="text-sm text-gray-600">({doctor.reviewsCount} reviews)</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-primary">₹{doctor.consultationFee}</span>
                            <span className={`badge ${doctor.available ? 'badge-success' : 'badge-danger'}`}>
                                {doctor.available ? 'Available' : 'Busy'}
                            </span>
                        </div>
                        <button className="btn btn-primary w-full" disabled={!doctor.available}>
                            Book Consultation
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Settings
export const Settings = () => {
    const { logout } = useApp();

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Settings</h1>

            <div className="max-w-2xl space-y-6">
                <div className="card">
                    <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                    <div className="space-y-3">
                        {['Booking Updates', 'Report Ready', 'Offers & Promotions', 'Health Tips'].map((item, idx) => (
                            <label key={idx} className="flex items-center justify-between">
                                <span>{item}</span>
                                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary" />
                            </label>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-lg font-semibold mb-4">Preferences</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Language</label>
                            <select className="input">
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <label className="flex items-center justify-between">
                            <span>Two-Factor Authentication</span>
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                        </label>
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h2>
                    <button className="btn bg-red-600 text-white hover:bg-red-700 w-full mb-3">
                        <Trash className="w-4 h-4" /> Delete Account
                    </button>
                    <button onClick={logout} className="btn btn-outline w-full">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

// Help & Support
export const HelpSupport = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Help & Support</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map(faq => (
                            <div key={faq.id} className="card">
                                <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full text-left flex items-center justify-between">
                                    <span className="font-semibold">{faq.question}</span>
                                    <HelpCircle className="w-5 h-5 text-primary" />
                                </button>
                                {openFaq === faq.id && (
                                    <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="card">
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+91 123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>support@healthtest.com</span>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full mt-4">Chat with Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Refer & Earn
export const ReferEarn = () => {
    return (
        <div className="container-custom py-8 pb-24 lg:pb-8">
            <h1 className="text-3xl font-bold text-secondary mb-6">Refer & Earn</h1>

            <div className="card bg-gradient-to-br from-primary to-accent text-white mb-8">
                <h2 className="text-2xl font-bold mb-4">Earn ₹100 for every referral!</h2>
                <p className="mb-6">Share your referral code with friends and family. You both get ₹100 when they book their first test.</p>
                <div className="flex items-center gap-3 p-4 bg-white/20 rounded-lg">
                    <code className="flex-1 font-mono text-xl font-bold">{referralStats.referralCode}</code>
                    <button className="btn bg-white text-primary hover:bg-gray-100">
                        <Copy className="w-4 h-4" /> Copy
                    </button>
                </div>
                <div className="flex gap-3 mt-4">
                    <button className="btn bg-white/20 hover:bg-white/30"><Facebook className="w-5 h-5" /></button>
                    <button className="btn bg-white/20 hover:bg-white/30"><Twitter className="w-5 h-5" /></button>
                    <button className="btn bg-white/20 hover:bg-white/30"><Instagram className="w-5 h-5" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{referralStats.totalInvited}</div>
                    <div className="text-gray-600">Total Invited</div>
                </div>
                <div className="card text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{referralStats.totalJoined}</div>
                    <div className="text-gray-600">Joined</div>
                </div>
                <div className="card text-center">
                    <div className="text-3xl font-bold text-primary mb-2">₹{referralStats.totalEarnings}</div>
                    <div className="text-gray-600">Total Earnings</div>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Referral History</h2>
            <div className="space-y-3">
                {referralStats.referralHistory.map((ref, idx) => (
                    <div key={idx} className="card flex items-center justify-between">
                        <div>
                            <p className="font-semibold">{ref.name}</p>
                            <p className="text-sm text-gray-600">{ref.date}</p>
                        </div>
                        <div className="text-right">
                            <span className={`badge ${ref.status === 'Joined' ? 'badge-success' : 'badge-warning'}`}>{ref.status}</span>
                            {ref.earning > 0 && <p className="text-sm font-semibold text-accent mt-1">+₹{ref.earning}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 404 Not Found
export const NotFound = () => {
    return (
        <div className="container-custom py-16 text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-secondary mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    );
};

import { useState } from 'react';

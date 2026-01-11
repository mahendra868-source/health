import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-300 mt-auto">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">H</span>
                            </div>
                            <span className="text-xl font-bold text-white">HealthTest</span>
                        </div>
                        <p className="text-sm mb-4">
                            Your trusted partner for convenient and reliable health testing services. Book tests online and get reports delivered to your doorstep.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/tests" className="hover:text-primary transition-colors">Browse Tests</Link></li>
                            <li><Link to="/packages" className="hover:text-primary transition-colors">Health Packages</Link></li>
                            <li><Link to="/labs" className="hover:text-primary transition-colors">Partner Labs</Link></li>
                            <li><Link to="/offers" className="hover:text-primary transition-colors">Offers & Coupons</Link></li>
                            <li><Link to="/doctors" className="hover:text-primary transition-colors">Consult Doctor</Link></li>
                            <li><Link to="/health-tracker" className="hover:text-primary transition-colors">Health Tracker</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/dashboard" className="hover:text-primary transition-colors">My Dashboard</Link></li>
                            <li><Link to="/my-bookings" className="hover:text-primary transition-colors">My Bookings</Link></li>
                            <li><Link to="/my-reports" className="hover:text-primary transition-colors">My Reports</Link></li>
                            <li><Link to="/family" className="hover:text-primary transition-colors">Family Members</Link></li>
                            <li><Link to="/wallet" className="hover:text-primary transition-colors">Health Wallet</Link></li>
                            <li><Link to="/refer" className="hover:text-primary transition-colors">Refer & Earn</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>123 Health Street, Medical District, New Delhi - 110001</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 123 456 7890</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="mailto:support@healthtest.com" className="hover:text-primary transition-colors">support@healthtest.com</a>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link to="/help" className="btn btn-primary text-sm">
                                Help & Support
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; 2026 HealthTest. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

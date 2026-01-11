import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, FileText, User } from 'lucide-react';

const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/my-bookings', icon: Calendar, label: 'Bookings' },
        { path: '/my-reports', icon: FileText, label: 'Reports' },
        { path: '/profile', icon: User, label: 'Profile' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
            <div className="grid grid-cols-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex flex-col items-center justify-center py-3 transition-colors ${isActive ? 'text-primary' : 'text-gray-500'
                                }`}
                        >
                            <Icon className="w-6 h-6 mb-1" />
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;

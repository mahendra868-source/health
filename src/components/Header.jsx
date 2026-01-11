import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Bell } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { user, getCartCount, isAuthenticated, logout } = useApp();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/tests?search=${searchQuery}`);
            setSearchQuery('');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
        setIsProfileOpen(false);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">H</span>
                        </div>
                        <span className="text-xl font-bold text-secondary hidden sm:block">HealthTest</span>
                    </Link>

                    {/* Desktop Search */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for tests, packages, labs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </form>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        <Link to="/tests" className="text-secondary hover:text-primary transition-colors">Tests</Link>
                        <Link to="/packages" className="text-secondary hover:text-primary transition-colors">Packages</Link>
                        <Link to="/labs" className="text-secondary hover:text-primary transition-colors">Labs</Link>
                        <Link to="/offers" className="text-secondary hover:text-primary transition-colors">Offers</Link>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        {isAuthenticated && (
                            <Link to="/notifications" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Bell className="w-6 h-6 text-secondary" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </Link>
                        )}

                        {/* Cart */}
                        <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <ShoppingCart className="w-6 h-6 text-secondary" />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>

                        {/* Profile Dropdown */}
                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="hidden md:block text-sm font-medium text-secondary">{user.name.split(' ')[0]}</span>
                                </button>

                                {isProfileOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20 animate-fadeIn">
                                            <Link to="/dashboard" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                                                Dashboard
                                            </Link>
                                            <Link to="/profile" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                                                My Profile
                                            </Link>
                                            <Link to="/my-bookings" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                                                My Bookings
                                            </Link>
                                            <Link to="/my-reports" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                                                My Reports
                                            </Link>
                                            <Link to="/wallet" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                                                Wallet
                                            </Link>
                                            <hr className="my-2" />
                                            <Link to="/settings" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                                                Settings
                                            </Link>
                                            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                                Logout
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-primary text-sm px-4 py-2">
                                Login
                            </Link>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="md:hidden pb-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search tests, packages, labs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </form>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-4 animate-slideIn">
                        <nav className="flex flex-col gap-2">
                            <Link to="/tests" className="px-4 py-2 text-secondary hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                                Tests
                            </Link>
                            <Link to="/packages" className="px-4 py-2 text-secondary hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                                Packages
                            </Link>
                            <Link to="/labs" className="px-4 py-2 text-secondary hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                                Labs
                            </Link>
                            <Link to="/offers" className="px-4 py-2 text-secondary hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                                Offers
                            </Link>
                            <Link to="/help" className="px-4 py-2 text-secondary hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                                Help & Support
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

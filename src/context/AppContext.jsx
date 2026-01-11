import { createContext, useContext, useState, useEffect } from 'react';
import { user as initialUser } from '../data/mockData';

const AppContext = createContext();

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for demo
    const [cart, setCart] = useState([]);
    const [toast, setToast] = useState(null);

    // Cart functions
    const addToCart = (item) => {
        const existingItem = cart.find(cartItem =>
            cartItem.id === item.id && cartItem.type === item.type
        );

        if (existingItem) {
            showToast('Item already in cart', 'info');
            return;
        }

        setCart([...cart, item]);
        showToast('Added to cart successfully', 'success');
    };

    const removeFromCart = (itemId, type) => {
        setCart(cart.filter(item => !(item.id === itemId && item.type === type)));
        showToast('Removed from cart', 'info');
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const getCartCount = () => {
        return cart.length;
    };

    // Toast functions
    const showToast = (message, type = 'info') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    // User functions
    const updateUser = (updates) => {
        setUser({ ...user, ...updates });
        showToast('Profile updated successfully', 'success');
    };

    const login = (credentials) => {
        // Mock login
        setIsAuthenticated(true);
        showToast('Login successful', 'success');
    };

    const logout = () => {
        setIsAuthenticated(false);
        setCart([]);
        showToast('Logged out successfully', 'info');
    };

    const value = {
        user,
        setUser,
        updateUser,
        isAuthenticated,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
        toast,
        showToast
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

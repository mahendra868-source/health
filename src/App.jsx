import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import OTPVerification from './pages/auth/OTPVerification';
import { Dashboard } from './pages/Dashboard';
import TestSearch from './pages/TestSearch';
import TestDetail from './pages/TestDetail';
import { LabListing, LabDetail, HealthPackages, PackageDetail, Cart, Checkout, BookingConfirmation, MyBookings, BookingDetail, MyReports, ReportDetail } from './pages/AllPages';
import FamilyMembers from './pages/FamilyMembers';
import Profile from './pages/Profile';
import { HealthWallet, Offers, Notifications, HealthTracker, SymptomChecker, DoctorConsultation, Settings, HelpSupport, ReferEarn, NotFound } from './pages/RemainingPages';

// Admin Imports
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import { AdminBookings, AdminTests, AdminLabs, AdminUsers, AdminCoupons, AdminSettings } from './admin/pages/AdminPages';

function App() {
    return (
        <AppProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="otp-verification" element={<OTPVerification />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="tests" element={<TestSearch />} />
                    <Route path="tests/:id" element={<TestDetail />} />
                    <Route path="labs" element={<LabListing />} />
                    <Route path="labs/:id" element={<LabDetail />} />
                    <Route path="packages" element={<HealthPackages />} />
                    <Route path="packages/:id" element={<PackageDetail />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="booking-confirmation/:id" element={<BookingConfirmation />} />
                    <Route path="my-bookings" element={<MyBookings />} />
                    <Route path="bookings/:id" element={<BookingDetail />} />
                    <Route path="my-reports" element={<MyReports />} />
                    <Route path="reports/:id" element={<ReportDetail />} />
                    <Route path="family" element={<FamilyMembers />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="wallet" element={<HealthWallet />} />
                    <Route path="offers" element={<Offers />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="health-tracker" element={<HealthTracker />} />
                    <Route path="symptom-checker" element={<SymptomChecker />} />
                    <Route path="doctors" element={<DoctorConsultation />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<HelpSupport />} />
                    <Route path="refer" element={<ReferEarn />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="bookings" element={<AdminBookings />} />
                    <Route path="tests" element={<AdminTests />} />
                    <Route path="packages" element={<AdminTests />} /> {/* Reuse Tests for now or create generic */}
                    <Route path="labs" element={<AdminLabs />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="coupons" element={<AdminCoupons />} />
                    <Route path="settings" element={<AdminSettings />} />
                </Route>

            </Routes>
        </AppProvider>
    );
}

export default App;

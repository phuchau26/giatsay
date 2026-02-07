import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Auth
import LoginPage from './pages/auth/Login'

// Landing
import LandingPage from './pages/LandingPage'

// Owner Pages
import OwnerDashboard from './pages/owner/Dashboard'
import OwnerOrders from './pages/owner/Orders'
import OwnerInventory from './pages/owner/Inventory'
import OwnerStaff from './pages/owner/Staff'
import OwnerReports from './pages/owner/Reports'
import OwnerSettings from './pages/owner/Settings'

// Staff Pages
import StaffHome from './pages/staff/Home'
import StaffCreateOrder from './pages/staff/CreateOrder'
import StaffOrders from './pages/staff/Orders'
import StaffOrderDetail from './pages/staff/OrderDetail'
import StaffProfile from './pages/staff/Profile'
import StaffNotifications from './pages/staff/Notifications'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Owner Portal */}
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/orders" element={<OwnerOrders />} />
        <Route path="/owner/inventory" element={<OwnerInventory />} />
        <Route path="/owner/staff" element={<OwnerStaff />} />
        <Route path="/owner/reports" element={<OwnerReports />} />
        <Route path="/owner/settings" element={<OwnerSettings />} />
        
        {/* Staff Portal */}
        <Route path="/staff" element={<StaffHome />} />
        <Route path="/staff/orders/new" element={<StaffCreateOrder />} />
        <Route path="/staff/orders" element={<StaffOrders />} />
        <Route path="/staff/orders/:id" element={<StaffOrderDetail />} />
        <Route path="/staff/profile" element={<StaffProfile />} />
        <Route path="/staff/notifications" element={<StaffNotifications />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Order, Customer, Staff, InventoryItem, Service, DashboardStats } from '../types'

// Dashboard Stats
export const dashboardStats: DashboardStats = {
  todayOrders: 24,
  revenue: 2450000,
  revenueChange: 12,
  processing: 8,
  completed: 16
}

// Services
export const services: Service[] = [
  { id: '1', name: 'Giặt thường', icon: '🧺', price: 20000, unit: 'kg' },
  { id: '2', name: 'Giặt hấp', icon: '♨️', price: 35000, unit: 'kg' },
  { id: '3', name: 'Giặt khô', icon: '🧴', price: 50000, unit: 'piece' },
  { id: '4', name: 'Là/Ủi', icon: '👔', price: 15000, unit: 'piece' },
  { id: '5', name: 'Giặt rèm cửa', icon: '🪟', price: 80000, unit: 'piece' },
  { id: '6', name: 'Giặt chăn mền', icon: '🛏️', price: 100000, unit: 'piece' },
]

// Recent Orders
export const recentOrders: Order[] = [
  {
    id: 'LD-001234',
    customerId: '1',
    customerName: 'Nguyễn Văn An',
    customerPhone: '0901234567',
    customerAddress: '123 Nguyễn Huệ, Q.1, TP.HCM',
    services: [
      { id: '1', name: 'Giặt hấp', type: 'weight', quantity: 5, unitPrice: 35000, totalPrice: 175000 },
      { id: '2', name: 'Là/Ủi', type: 'piece', quantity: 3, unitPrice: 15000, totalPrice: 45000 },
    ],
    totalAmount: 220000,
    discount: 20000,
    finalAmount: 200000,
    status: 'washing',
    staffId: '1',
    staffName: 'Trần Văn Minh',
    createdAt: '2026-02-07T08:30:00',
    pickupDate: '2026-02-08T10:00:00',
    notes: 'Có vết dầu ở áo trắng, cần xử lý kỹ'
  },
  {
    id: 'LD-001235',
    customerId: '2',
    customerName: 'Trần Thị Bình',
    customerPhone: '0912345678',
    services: [
      { id: '1', name: 'Giặt thường', type: 'weight', quantity: 3, unitPrice: 20000, totalPrice: 60000 },
    ],
    totalAmount: 60000,
    finalAmount: 60000,
    status: 'ready',
    staffId: '2',
    staffName: 'Lê Thị Hoa',
    createdAt: '2026-02-07T07:15:00',
    pickupDate: '2026-02-07T15:00:00',
  },
  {
    id: 'LD-001236',
    customerId: '3',
    customerName: 'Lê Văn Cường',
    customerPhone: '0923456789',
    services: [
      { id: '1', name: 'Giặt khô', type: 'piece', quantity: 2, unitPrice: 50000, totalPrice: 100000 },
    ],
    totalAmount: 100000,
    finalAmount: 100000,
    status: 'received',
    createdAt: '2026-02-07T09:00:00',
    pickupDate: '2026-02-09T10:00:00',
  },
  {
    id: 'LD-001237',
    customerId: '4',
    customerName: 'Phạm Thị Dung',
    customerPhone: '0934567890',
    services: [
      { id: '1', name: 'Giặt chăn mền', type: 'piece', quantity: 2, unitPrice: 100000, totalPrice: 200000 },
    ],
    totalAmount: 200000,
    finalAmount: 200000,
    status: 'completed',
    staffId: '1',
    staffName: 'Trần Văn Minh',
    createdAt: '2026-02-06T14:00:00',
    pickupDate: '2026-02-07T09:00:00',
  },
  {
    id: 'LD-001238',
    customerId: '5',
    customerName: 'Hoàng Văn Em',
    customerPhone: '0945678901',
    services: [
      { id: '1', name: 'Giặt hấp', type: 'weight', quantity: 4, unitPrice: 35000, totalPrice: 140000 },
      { id: '2', name: 'Là/Ủi', type: 'piece', quantity: 5, unitPrice: 15000, totalPrice: 75000 },
    ],
    totalAmount: 215000,
    finalAmount: 215000,
    status: 'washing',
    staffId: '3',
    staffName: 'Nguyễn Đức Anh',
    createdAt: '2026-02-07T08:00:00',
    pickupDate: '2026-02-08T14:00:00',
  }
]

// Top Customers
export const topCustomers: Customer[] = [
  { id: '1', name: 'Nguyễn Văn An', phone: '0901234567', totalOrders: 45, totalSpent: 2350000 },
  { id: '2', name: 'Trần Thị Bình', phone: '0912345678', totalOrders: 38, totalSpent: 1890000 },
  { id: '3', name: 'Lê Văn Cường', phone: '0923456789', totalOrders: 32, totalSpent: 1650000 },
  { id: '4', name: 'Phạm Thị Dung', phone: '0934567890', totalOrders: 28, totalSpent: 1420000 },
  { id: '5', name: 'Hoàng Văn Em', phone: '0945678901', totalOrders: 25, totalSpent: 1280000 },
]

// Staff List
export const staffList: Staff[] = [
  { id: '1', name: 'Trần Văn Minh', phone: '0961234567', email: 'minh@laundromagic.vn', role: 'Nhân viên giặt', status: 'active', ordersCompleted: 156, monthlyOrders: 24, rating: 4.8, joinedAt: '2024-01-15' },
  { id: '2', name: 'Lê Thị Hoa', phone: '0962345678', email: 'hoa@laundromagic.vn', role: 'Nhân viên giặt', status: 'active', ordersCompleted: 142, monthlyOrders: 22, rating: 4.7, joinedAt: '2024-02-20' },
  { id: '3', name: 'Nguyễn Đức Anh', phone: '0963456789', email: 'anh@laundromagic.vn', role: 'Nhân viên ủi', status: 'active', ordersCompleted: 98, monthlyOrders: 18, rating: 4.9, joinedAt: '2024-03-10' },
  { id: '4', name: 'Phạm Thanh Mai', phone: '0964567890', email: 'mai@laundromagic.vn', role: 'Thu ngân', status: 'active', ordersCompleted: 234, monthlyOrders: 32, rating: 4.6, joinedAt: '2023-11-01' },
  { id: '5', name: 'Võ Minh Tuấn', phone: '0965678901', email: 'tuan@laundromagic.vn', role: 'Nhân viên giặt', status: 'inactive', ordersCompleted: 87, monthlyOrders: 0, rating: 4.5, joinedAt: '2024-05-15' },
  { id: '6', name: 'Đỗ Văn Nam', phone: '0966789012', email: 'nam@laundromagic.vn', role: 'Nhân viên ủi', status: 'inactive', ordersCompleted: 65, monthlyOrders: 0, rating: 4.4, joinedAt: '2024-06-01' },
]

// Low Stock Items (for Dashboard alerts)
export const lowStockItems = [
  { id: '1', name: 'Nước xả Comfort', icon: '🌸', currentStock: 5, minStock: 8, unit: 'lít' },
  { id: '2', name: 'Bột tẩy trắng', icon: '✨', currentStock: 3, minStock: 10, unit: 'kg' },
  { id: '3', name: 'Móc áo', icon: '🧥', currentStock: 12, minStock: 30, unit: 'cái' },
]

// Inventory Items
export const inventoryItems: InventoryItem[] = [
  { id: '1', name: 'Omo Matic', category: 'Bột giặt', quantity: 25, unit: 'Kg', alertThreshold: 10, status: 'in-stock' },
  { id: '2', name: 'Comfort Đậm đặc', category: 'Nước xả', quantity: 5, unit: 'Lít', alertThreshold: 8, status: 'low-stock' },
  { id: '3', name: 'Vanish', category: 'Tẩy vết bẩn', quantity: 0, unit: 'Chai', alertThreshold: 3, status: 'out-of-stock' },
  { id: '4', name: 'Downy', category: 'Nước xả', quantity: 12, unit: 'Lít', alertThreshold: 5, status: 'in-stock' },
  { id: '5', name: 'Ariel', category: 'Nước giặt', quantity: 8, unit: 'Lít', alertThreshold: 10, status: 'low-stock' },
  { id: '6', name: 'K2R', category: 'Tẩy dầu mỡ', quantity: 4, unit: 'Chai', alertThreshold: 2, status: 'in-stock' },
]

// Revenue Data for Charts
export const revenueData = [
  { day: 'T2', revenue: 1200000 },
  { day: 'T3', revenue: 1450000 },
  { day: 'T4', revenue: 980000 },
  { day: 'T5', revenue: 1680000 },
  { day: 'T6', revenue: 2100000 },
  { day: 'T7', revenue: 2450000 },
  { day: 'CN', revenue: 1850000 },
]

// Service Distribution
export const serviceDistribution = [
  { name: 'Giặt thường', value: 40, color: '#3B82F6' },
  { name: 'Giặt hấp', value: 30, color: '#10B981' },
  { name: 'Giặt khô', value: 15, color: '#F59E0B' },
  { name: 'Là/Ủi', value: 10, color: '#8B5CF6' },
  { name: 'Khác', value: 5, color: '#64748B' },
]

// Owner Navigation
export const ownerNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', path: '/owner/dashboard' },
  { id: 'orders', label: 'Đơn hàng', icon: 'ClipboardList', path: '/owner/orders' },
  { id: 'inventory', label: 'Kho hóa chất', icon: 'FlaskConical', path: '/owner/inventory' },
  { id: 'staff', label: 'Nhân viên', icon: 'Users', path: '/owner/staff' },
  { id: 'reports', label: 'Báo cáo', icon: 'BarChart3', path: '/owner/reports' },
  { id: 'settings', label: 'Cài đặt', icon: 'Settings', path: '/owner/settings' },
]

// Staff Navigation
export const staffNavItems = [
  { id: 'home', label: 'Trang chủ', icon: 'Home', path: '/staff' },
  { id: 'orders', label: 'Đơn hàng', icon: 'ClipboardList', path: '/staff/orders' },
  { id: 'create', label: 'Tạo đơn', icon: 'Plus', path: '/staff/orders/new' },
  { id: 'notifications', label: 'Thông báo', icon: 'Bell', path: '/staff/notifications' },
  { id: 'profile', label: 'Cá nhân', icon: 'User', path: '/staff/profile' },
]

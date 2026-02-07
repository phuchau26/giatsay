// Order Types
export type OrderStatus = 'received' | 'washing' | 'ready' | 'completed'

export interface Order {
  id: string
  customerId: string
  customerName: string
  customerPhone: string
  customerAddress?: string
  services: OrderService[]
  totalAmount: number
  discount?: number
  finalAmount: number
  status: OrderStatus
  staffId?: string
  staffName?: string
  createdAt: string
  pickupDate: string
  notes?: string
}

export interface OrderService {
  id: string
  name: string
  type: 'weight' | 'piece'
  quantity: number
  unitPrice: number
  totalPrice: number
}

// Customer Types
export interface Customer {
  id: string
  name: string
  phone: string
  address?: string
  totalOrders: number
  totalSpent: number
}

// Staff Types
export interface Staff {
  id: string
  name: string
  phone: string
  email: string
  role: string
  avatar?: string
  status: 'active' | 'inactive'
  ordersCompleted: number
  monthlyOrders: number
  rating: number
  joinedAt: string
}

// Inventory Types
export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock'

export interface InventoryItem {
  id: string
  name: string
  category: string
  quantity: number
  unit: string
  alertThreshold: number
  status: StockStatus
}

// Service Types
export interface Service {
  id: string
  name: string
  icon: string
  price: number
  unit: 'kg' | 'piece'
}

// Stats Types
export interface DashboardStats {
  todayOrders: number
  revenue: number
  revenueChange: number
  processing: number
  completed: number
}

// Navigation Types
export interface NavItem {
  id: string
  label: string
  icon: string
  path: string
}

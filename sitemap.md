# 🧺 LaundroMagic - Site Map

> **Website quản lý cửa hàng giặt sấy thông minh**  
> Cập nhật: 07/02/2026

---

## 📋 Tổng quan

**LaundroMagic** là hệ thống quản lý cửa hàng giặt sấy với **2 vai trò người dùng**, mỗi vai trò tối ưu cho thiết bị khác nhau:

| Vai trò | Thiết bị | Mục đích |
|---------|----------|----------|
| **👔 Chủ cửa hàng (Owner)** | 🖥️ Desktop | Quản lý tổng thể, báo cáo, kho |
| **👷 Nhân viên (Staff)** | 📱 Mobile | Tạo đơn, cập nhật trạng thái |

---

## 🗺️ Cấu Trúc Tổng Quan

```
LaundroMagic/
│
├── 🏠 Landing Page (/) ──────────────── [DESKTOP + MOBILE]
│
├── 🖥️ OWNER PORTAL (Desktop) ──────── /owner/*
│   ├── 📊 Dashboard                    /owner/dashboard
│   ├── 📋 Quản lý đơn hàng             /owner/orders
│   ├── 🧪 Quản lý kho hóa chất         /owner/inventory
│   ├── 👥 Quản lý nhân viên            /owner/staff
│   └── 📈 Báo cáo & Thống kê           /owner/reports
│
└── 📱 STAFF PORTAL (Mobile) ────────── /staff/*
    ├── 🏠 Trang chủ nhân viên          /staff/home
    ├── ➕ Tạo đơn hàng mới             /staff/orders/new
    ├── 📋 Danh sách đơn hàng           /staff/orders
    ├── 🔍 Chi tiết đơn hàng            /staff/orders/:id
    └── 👤 Thông tin cá nhân            /staff/profile
```

---

## 🖥️ OWNER PORTAL (Desktop)

> **Đối tượng:** Chủ cửa hàng, Quản lý  
> **Thiết bị:** Desktop (1280px+)

### 1. 📊 Dashboard (`/owner/dashboard`)

| Section | Mô tả |
|---------|-------|
| **Sidebar** | Logo, Menu navigation, User info |
| **Stats Cards** | Đơn hôm nay, Doanh thu, Đơn chờ, Hoàn thành |
| **Revenue Chart** | Biểu đồ doanh thu tuần/tháng |
| **Recent Orders** | Bảng 10 đơn gần nhất |
| **Low Stock Alert** | Cảnh báo hóa chất sắp hết |

---

### 2. 📋 Quản Lý Đơn Hàng (`/owner/orders`)

| Section | Mô tả |
|---------|-------|
| **Filter Bar** | Lọc theo trạng thái, ngày, nhân viên |
| **Orders Table** | Bảng đầy đủ với sort, search, pagination |
| **Order Detail Modal** | Xem chi tiết, in phiếu, chỉnh sửa |
| **Bulk Actions** | Cập nhật nhiều đơn cùng lúc |

---

### 3. 🧪 Quản Lý Kho Hóa Chất (`/owner/inventory`)

| Section | Mô tả |
|---------|-------|
| **Stock Overview** | Tổng mặt hàng, sắp hết, hết hàng |
| **Product Table** | Danh sách với CRUD operations |
| **Usage History** | Lịch sử sử dụng theo thời gian |
| **Import/Export** | Nhập hàng, xuất báo cáo |

---

### 4. 👥 Quản Lý Nhân Viên (`/owner/staff`)

| Section | Mô tả |
|---------|-------|
| **Staff List** | Danh sách nhân viên với trạng thái |
| **Add/Edit Staff** | Form thêm/sửa thông tin |
| **Performance** | Thống kê hiệu suất từng người |
| **Schedule** | Lịch làm việc (optional) |

---

### 5. 📈 Báo Cáo & Thống Kê (`/owner/reports`)

| Section | Mô tả |
|---------|-------|
| **Revenue Report** | Doanh thu theo ngày/tuần/tháng/năm |
| **Service Analytics** | Thống kê dịch vụ được dùng nhiều |
| **Customer Insights** | Top khách hàng, tần suất |
| **Export Options** | Xuất PDF, Excel |

---

## 📱 STAFF PORTAL (Mobile)

> **Đối tượng:** Nhân viên cửa hàng  
> **Thiết bị:** Mobile (375px - 428px)

### 1. 🏠 Trang Chủ Nhân Viên (`/staff/home`)

| Section | Mô tả |
|---------|-------|
| **Header** | Greeting, Notifications |
| **Quick Stats** | Đơn hôm nay của tôi, Chờ xử lý |
| **Quick Actions** | FAB: Tạo đơn mới |
| **My Orders Today** | List đơn đang xử lý |

---

### 2. ➕ Tạo Đơn Hàng Mới (`/staff/orders/new`)

| Step | Mô tả |
|------|-------|
| **Step 1** | Nhập SĐT khách → Auto-fill nếu có |
| **Step 2** | Chọn dịch vụ (Giặt thường, Hấp, Khô...) |
| **Step 3** | Nhập số kg/món, ghi chú |
| **Step 4** | Chọn ngày hẹn lấy |
| **Step 5** | Xác nhận & In phiếu (optional) |

**Dịch vụ:**
- 🧺 Giặt thường - 20,000đ/kg
- ♨️ Giặt hấp - 35,000đ/kg  
- 🧴 Giặt khô - 50,000đ/món
- 👔 Là/Ủi - 15,000đ/món

---

### 3. 📋 Danh Sách Đơn Hàng (`/staff/orders`)

| Section | Mô tả |
|---------|-------|
| **Filter Tabs** | Tất cả, Đang giặt, Chờ lấy, Hoàn thành |
| **Search** | Tìm theo SĐT hoặc mã đơn |
| **Order Cards** | Card với thông tin cơ bản, tap để xem chi tiết |
| **Pull to Refresh** | Kéo xuống để refresh |

---

### 4. 🔍 Chi Tiết Đơn Hàng (`/staff/orders/:id`)

| Section | Mô tả |
|---------|-------|
| **Order Info** | Mã đơn, ngày tạo, trạng thái |
| **Customer Info** | Tên, SĐT, địa chỉ |
| **Service Details** | Danh sách dịch vụ, số lượng |
| **Status Update** | Buttons đổi trạng thái |
| **Actions** | Gọi khách, In phiếu |

**Trạng thái đơn hàng:**
```
🟡 Tiếp nhận → 🔵 Đang giặt → 🟠 Chờ lấy → 🟢 Hoàn thành
```

---

### 5. 👤 Thông Tin Cá Nhân (`/staff/profile`)

| Section | Mô tả |
|---------|-------|
| **Avatar & Name** | Ảnh, tên nhân viên |
| **Stats** | Số đơn đã xử lý, rating |
| **Settings** | Đổi mật khẩu, thông báo |
| **Logout** | Đăng xuất |

---

## 🎨 Design System

### Bảng màu

| Vai trò | Màu | Hex | Sử dụng |
|---------|-----|-----|---------|
| Primary | Xanh dương | `#3B82F6` | Buttons, Links |
| Success | Xanh lá | `#10B981` | Hoàn thành |
| Warning | Vàng | `#F59E0B` | Đang xử lý |
| Danger | Đỏ | `#EF4444` | Lỗi, Xóa |
| Background | Xám nhạt | `#F8FAFC` | Page bg |

### Typography
- **Font:** Inter
- **Desktop H1:** 32px Bold
- **Mobile H1:** 24px Bold

### Breakpoints
- **Mobile:** 375px - 767px
- **Tablet:** 768px - 1279px  
- **Desktop:** 1280px+

---

## 🚀 Roadmap

### Phase 1: MVP
- [ ] Landing Page (Responsive)
- [ ] Owner: Dashboard + Đơn hàng + Kho
- [ ] Staff: Home + Tạo đơn + Danh sách đơn

### Phase 2: Nâng cao
- [ ] Owner: Quản lý nhân viên + Báo cáo
- [ ] Staff: Profile + Thông báo push
- [ ] Tích hợp SMS

### Phase 3: Mở rộng
- [ ] App native (React Native)
- [ ] Multi-branch support
- [ ] Loyalty program

---

*LaundroMagic © 2026*

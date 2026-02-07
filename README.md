# LaundroMagic - Hệ thống Quản lý Cửa hàng Giặt sấy

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-blue?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-6.0-purple?logo=vite" alt="Vite" />
</p>

## 📝 Giới thiệu

LaundroMagic là hệ thống quản lý cửa hàng giặt sấy hoàn chỉnh với 2 portal:

- **🖥️ Owner Portal (Desktop)** - Dành cho chủ cửa hàng quản lý toàn diện
- **📱 Staff Portal (Mobile)** - Dành cho nhân viên xử lý đơn hàng nhanh chóng

## 🚀 Cài đặt

### Yêu cầu hệ thống

- Node.js 18.x hoặc cao hơn
- npm 9.x hoặc cao hơn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:5173`

### Build production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📁 Cấu trúc thư mục

```
src/
├── components/           # Các component tái sử dụng
│   ├── common/          # Component dùng chung (Header, Sidebar, StatsCard...)
│   ├── owner/           # Component cho Owner Portal
│   ├── staff/           # Component cho Staff Portal
│   └── landing/         # Component cho Landing Page
├── pages/               # Các trang
│   ├── owner/           # Dashboard, Orders, Inventory, Staff, Reports
│   ├── staff/           # Home, CreateOrder, Orders, OrderDetail, Profile
│   └── LandingPage.tsx  # Trang chủ
├── data/                # Mock data
├── types/               # TypeScript interfaces
├── hooks/               # Custom React hooks
└── styles/              # Global styles
```

## 🖥️ Owner Portal (Desktop)

Truy cập: `/owner/dashboard`

| Route | Trang |
|-------|-------|
| `/owner/dashboard` | Dashboard tổng quan |
| `/owner/orders` | Quản lý đơn hàng |
| `/owner/inventory` | Quản lý kho hóa chất |
| `/owner/staff` | Quản lý nhân viên |
| `/owner/reports` | Báo cáo & Thống kê |

## 📱 Staff Portal (Mobile)

Truy cập: `/staff`

| Route | Trang |
|-------|-------|
| `/staff` | Trang chủ nhân viên |
| `/staff/orders` | Danh sách đơn hàng |
| `/staff/orders/new` | Tạo đơn hàng mới |
| `/staff/orders/:id` | Chi tiết đơn hàng |
| `/staff/profile` | Thông tin cá nhân |

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#3B82F6` | CTA, links, active states |
| Success | `#10B981` | Positive actions, completed states |
| Warning | `#F59E0B` | Alerts, pending states |
| Danger | `#EF4444` | Errors, delete actions |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, modals |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** 600-700 weight
- **Body:** 400-500 weight

### Border Radius

- **Cards:** 12px
- **Buttons:** 8px
- **Badges:** 9999px (full)

## 📦 Dependencies chính

| Package | Purpose |
|---------|---------|
| `react-router-dom` | Routing |
| `recharts` | Charts & Analytics |
| `lucide-react` | Icons |
| `clsx` | Conditional classNames |
| `tailwindcss` | Styling |

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 License

MIT License - Copyright (c) 2026 LaundroMagic

---

<p align="center">
  Made with ❤️ by LaundroMagic Team
</p>

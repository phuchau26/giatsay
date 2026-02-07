# Design System: LaundroMagic
**Project ID:** 10041881444321079848

## 1. Visual Theme & Atmosphere

LaundroMagic embodies a **clean, professional, and trustworthy** aesthetic that reflects the freshness and reliability of a modern laundry service. The design is characterized by:

- **Crisp and airy** — generous whitespace creating a sense of cleanliness
- **Professional yet approachable** — balancing business functionality with friendly warmth
- **Modern minimalism** — clean lines, subtle shadows, and refined details
- **Water-inspired** — soft blues evoking freshness and cleanliness

## 2. Color Palette & Roles

| Role | Descriptive Name | Hex Code | Usage |
|------|-----------------|----------|-------|
| **Primary** | Ocean Fresh Blue | `#3B82F6` | Primary buttons, links, active states, key actions |
| **Primary Dark** | Deep Ocean Blue | `#1E40AF` | Hover states, pressed buttons |
| **Primary Light** | Sky Mist Blue | `#DBEAFE` | Backgrounds, subtle highlights |
| **Success** | Fresh Mint Green | `#10B981` | Completed status, success messages, positive indicators |
| **Warning** | Warm Sunshine Yellow | `#F59E0B` | Processing status, warnings, attention needed |
| **Danger** | Alert Coral Red | `#EF4444` | Errors, delete actions, critical alerts |
| **Text Primary** | Deep Charcoal | `#1E293B` | Headings, primary text |
| **Text Secondary** | Slate Gray | `#64748B` | Secondary text, labels, placeholders |
| **Background** | Cloud White | `#F8FAFC` | Page backgrounds, subtle separators |
| **Surface** | Pure White | `#FFFFFF` | Cards, panels, modals |
| **Border** | Soft Silver | `#E2E8F0` | Borders, dividers |

## 3. Typography Rules

- **Font Family**: Inter (Google Fonts) — clean, modern, highly readable
- **Headings**: Bold weight (700) with tight letter-spacing for impact
- **Subheadings**: Semibold weight (600) for hierarchy
- **Body Text**: Regular weight (400) for comfortable reading
- **Small Text**: Regular weight (400), reduced size for labels/captions

**Desktop Scale:**
- H1: 32px / Bold
- H2: 24px / Semibold
- H3: 18px / Semibold
- Body: 14-16px / Regular
- Small: 12px / Regular

**Mobile Scale:**
- H1: 24px / Bold
- H2: 20px / Semibold
- H3: 16px / Semibold
- Body: 14px / Regular
- Small: 12px / Regular

## 4. Component Stylings

### Buttons
- **Primary**: Ocean Fresh Blue (#3B82F6) background, white text, gently rounded corners (8px), subtle shadow on hover
- **Secondary**: Transparent with Ocean Fresh Blue border and text
- **Danger**: Alert Coral Red (#EF4444) for destructive actions
- **Disabled**: Muted gray with reduced opacity

### Cards/Containers
- **Background**: Pure White (#FFFFFF)
- **Border Radius**: Generously rounded (12px)
- **Shadow**: Whisper-soft shadow (0 1px 3px rgba(0,0,0,0.1))
- **Padding**: Comfortable 24px

### Inputs/Forms
- **Border**: 1px Soft Silver (#E2E8F0) stroke
- **Background**: Pure White (#FFFFFF)
- **Border Radius**: Subtly rounded (8px)
- **Focus State**: Ocean Fresh Blue (#3B82F6) border with light blue glow

### Status Badges
- **Received (Tiếp nhận)**: Slate Gray background
- **Processing (Đang giặt)**: Ocean Fresh Blue background
- **Ready (Chờ lấy)**: Warm Sunshine Yellow background
- **Completed (Hoàn thành)**: Fresh Mint Green background

### Tables (Desktop)
- **Header**: Cloud White (#F8FAFC) background, bold text
- **Rows**: Alternating white and subtle gray for zebra striping
- **Hover**: Light blue highlight

### Mobile Lists
- **Cards**: Rounded containers with subtle shadow
- **Swipe Actions**: Color-coded for quick status updates
- **Pull to Refresh**: Blue spinner

## 5. Layout Principles

### Desktop (Owner Portal)
- **Sidebar**: Fixed 256px width, dark themed with white text
- **Content Area**: Fluid width, max 1400px centered
- **Grid**: 12-column grid system
- **Spacing Unit**: 8px base, scaled for consistency

### Mobile (Staff Portal)
- **Bottom Navigation**: Fixed 64px height with 4-5 items
- **Content**: Full width with 16px horizontal padding
- **Cards**: 16px margin, full width minus padding
- **Touch Targets**: Minimum 44px height for accessibility

### General Spacing
- Section gaps: 32px
- Card padding: 24px (desktop), 16px (mobile)
- Element spacing: 16px
- Compact spacing: 8px

## 6. Design System Notes for Stitch Generation

When generating screens, always include this style block:

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web
- Theme: Light, clean, professional, trustworthy
- Background: Cloud White (#F8FAFC) for pages
- Surface: Pure White (#FFFFFF) for cards
- Primary Accent: Ocean Fresh Blue (#3B82F6) for buttons and links
- Success: Fresh Mint Green (#10B981) for completed states
- Warning: Warm Sunshine Yellow (#F59E0B) for processing
- Danger: Alert Coral Red (#EF4444) for errors
- Text Primary: Deep Charcoal (#1E293B)
- Text Secondary: Slate Gray (#64748B)
- Fonts: Inter, clean and modern
- Buttons: Gently rounded (8px), subtle hover shadows
- Cards: Generously rounded (12px), whisper-soft shadows
- Inputs: Subtly rounded (8px), soft silver borders

## 7. Icons & Imagery

- **Icon Style**: Outline icons (Lucide, Heroicons) for consistency
- **Icon Size**: 20-24px for navigation, 16px for inline
- **Illustrations**: Soft, friendly illustrations for empty states
- **Photos**: High-quality, bright images of laundry/clothing if needed

## 8. Responsive Behavior

| Breakpoint | Target |
|------------|--------|
| < 768px | Mobile (Staff Portal optimized) |
| 768px - 1279px | Tablet (adaptive) |
| ≥ 1280px | Desktop (Owner Portal optimized) |

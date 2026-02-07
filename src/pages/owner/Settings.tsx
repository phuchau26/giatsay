import { useState } from 'react'
import { 
  Settings, 
  User, 
  Store, 
  Bell, 
  Palette, 
  Lock,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Save,
  Moon,
  Sun
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'

const settingsSections = [
  {
    title: 'Thông tin cửa hàng',
    icon: Store,
    items: [
      { label: 'Tên cửa hàng', value: 'Giặt Sấy LaundroMagic', type: 'text' },
      { label: 'Địa chỉ', value: '123 Nguyễn Huệ, Q.1, TP.HCM', type: 'text' },
      { label: 'Số điện thoại', value: '1900 1234', type: 'text' },
      { label: 'Email', value: 'contact@laundromagic.vn', type: 'text' },
    ]
  },
  {
    title: 'Cài đặt dịch vụ',
    icon: Palette,
    items: [
      { label: 'Giặt thường (đ/kg)', value: '20000', type: 'number' },
      { label: 'Giặt hấp (đ/kg)', value: '35000', type: 'number' },
      { label: 'Giặt khô (đ/món)', value: '50000', type: 'number' },
      { label: 'Là/Ủi (đ/món)', value: '15000', type: 'number' },
    ]
  }
]

export default function OwnerSettings() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newOrder: true,
    lowStock: true,
    staffActivity: false
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header 
          title="Cài đặt" 
          showSearch={false}
          actions={
            <button 
              onClick={handleSave}
              className="btn-primary flex items-center gap-2"
            >
              {saved ? (
                <>
                  <span className="w-5 h-5 text-white">✓</span>
                  Đã lưu!
                </>
              ) : (
                <>
                  <Save size={18} />
                  Lưu thay đổi
                </>
              )}
            </button>
          }
        />
        
        <main className="p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Store Settings */}
              {settingsSections.map((section, sectionIndex) => (
                <div 
                  key={section.title} 
                  className="card animate-fade-in-up"
                  style={{ animationDelay: `${sectionIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary-light rounded-lg">
                      <section.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold text-text-primary">{section.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.items.map((item, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                          {item.label}
                        </label>
                        <input
                          type={item.type}
                          defaultValue={item.value}
                          className="input"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Notification Settings */}
              <div className="card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary-light rounded-lg">
                    <Bell className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Cài đặt thông báo</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'email', label: 'Email thông báo' },
                    { key: 'push', label: 'Push notification' },
                    { key: 'sms', label: 'SMS thông báo' },
                    { key: 'newOrder', label: 'Đơn hàng mới' },
                    { key: 'lowStock', label: 'Cảnh báo hết hàng' },
                    { key: 'staffActivity', label: 'Hoạt động nhân viên' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-2">
                      <span className="text-text-primary">{item.label}</span>
                      <button
                        onClick={() => setNotifications(prev => ({ 
                          ...prev, 
                          [item.key]: !prev[item.key as keyof typeof notifications] 
                        }))}
                        className={`switch ${notifications[item.key as keyof typeof notifications] ? 'switch-on' : 'switch-off'}`}
                      >
                        <span className={`switch-thumb ${notifications[item.key as keyof typeof notifications] ? 'switch-thumb-on' : 'switch-thumb-off'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Appearance */}
              <div className="card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-semibold text-text-primary mb-4">Giao diện</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                      !darkMode ? 'border-primary bg-primary-light' : 'border-border hover:border-gray-300'
                    }`}
                  >
                    <Sun className={`mx-auto mb-2 ${!darkMode ? 'text-primary' : 'text-text-secondary'}`} size={24} />
                    <p className={`text-sm font-medium ${!darkMode ? 'text-primary' : 'text-text-secondary'}`}>
                      Sáng
                    </p>
                  </button>
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                      darkMode ? 'border-primary bg-primary-light' : 'border-border hover:border-gray-300'
                    }`}
                  >
                    <Moon className={`mx-auto mb-2 ${darkMode ? 'text-primary' : 'text-text-secondary'}`} size={24} />
                    <p className={`text-sm font-medium ${darkMode ? 'text-primary' : 'text-text-secondary'}`}>
                      Tối
                    </p>
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-semibold text-text-primary mb-4">Liên kết nhanh</h3>
                <div className="space-y-1">
                  {[
                    { icon: User, label: 'Tài khoản của tôi', path: '#' },
                    { icon: Lock, label: 'Đổi mật khẩu', path: '#' },
                    { icon: CreditCard, label: 'Thanh toán & Hóa đơn', path: '#' },
                    { icon: HelpCircle, label: 'Trung tâm hỗ trợ', path: '#' },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <item.icon className="text-text-secondary group-hover:text-primary transition-colors" size={18} />
                      <span className="flex-1 text-text-primary">{item.label}</span>
                      <ChevronRight className="text-text-secondary group-hover:translate-x-1 transition-transform" size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="card border-2 border-red-100 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="font-semibold text-danger mb-4">Vùng nguy hiểm</h3>
                <button className="w-full btn-danger flex items-center justify-center gap-2">
                  <LogOut size={18} />
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

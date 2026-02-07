import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'

type UserRole = 'owner' | 'staff'

export default function LoginPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState<UserRole>('owner')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      setLoading(false)
      if (role === 'owner') {
        navigate('/owner/dashboard')
      } else {
        navigate('/staff')
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-primary to-blue-700 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-in-down">
          <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
            <span className="text-4xl">🧺</span>
          </div>
          <h1 className="text-3xl font-bold text-white">LaundroMagic</h1>
          <p className="text-blue-100 mt-2">Đăng nhập để tiếp tục</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up">
          {/* Role Switcher */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {(['owner', 'staff'] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  role === r 
                    ? 'bg-white text-primary shadow-sm transform scale-[1.02]' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {r === 'owner' ? '👔 Chủ cửa hàng' : '👷 Nhân viên'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Phone Input */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="0901234567"
                className="input text-lg py-3"
                required
              />
            </div>

            {/* Password Input */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="••••••••"
                  className="input text-lg py-3 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-text-secondary">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="text-primary hover:underline">Quên mật khẩu?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 animate-fade-in-up disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ animationDelay: '0.4s' }}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Đang đăng nhập...
                </>
              ) : (
                <>
                  Đăng nhập
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-6 pt-6 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-text-secondary text-center mb-3">Demo nhanh:</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setRole('owner')
                  setFormData({ phone: '0901234567', password: 'demo' })
                }}
                className="flex-1 btn-secondary text-sm py-2"
              >
                Demo Owner
              </button>
              <button
                onClick={() => {
                  setRole('staff')
                  setFormData({ phone: '0909876543', password: 'demo' })
                }}
                className="flex-1 btn-secondary text-sm py-2"
              >
                Demo Staff
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-blue-100 text-sm mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          © 2026 LaundroMagic. All rights reserved.
        </p>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  BarChart3, 
  Clock,
  Shield,
  Star,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'App Mobile cho nhân viên',
    description: 'Nhân viên dễ dàng tạo đơn, cập nhật trạng thái ngay trên điện thoại.'
  },
  {
    icon: BarChart3,
    title: 'Báo cáo chi tiết',
    description: 'Thống kê doanh thu, khách hàng, dịch vụ theo thời gian thực.'
  },
  {
    icon: Clock,
    title: 'Tiết kiệm thời gian',
    description: 'Tự động hóa quy trình, giảm 50% thời gian quản lý đơn hàng.'
  },
  {
    icon: Shield,
    title: 'Bảo mật dữ liệu',
    description: 'Dữ liệu được mã hóa và sao lưu tự động hàng ngày.'
  },
]

const testimonials = [
  {
    name: 'Chị Lan',
    business: 'Giặt Sấy Phú Nhuận',
    content: 'Từ khi dùng LaundroMagic, tôi quản lý 3 chi nhánh dễ dàng hơn nhiều!',
    rating: 5,
    avatar: '👩'
  },
  {
    name: 'Anh Tuấn',
    business: 'Clean & Fresh Laundry',
    content: 'Nhân viên thích app mobile vì dễ dùng, đơn hàng không còn bị nhầm lẫn.',
    rating: 5,
    avatar: '👨'
  },
  {
    name: 'Chị Hương',
    business: 'Giặt Ủi Minh Hương',
    content: 'Báo cáo tự động giúp tôi nắm được kinh doanh mà không cần Excel nữa.',
    rating: 5,
    avatar: '👩‍💼'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '299,000',
    period: '/tháng',
    features: ['1 cửa hàng', '3 nhân viên', 'App mobile', 'Báo cáo cơ bản'],
    popular: false
  },
  {
    name: 'Business',
    price: '599,000',
    period: '/tháng',
    features: ['3 cửa hàng', '10 nhân viên', 'App mobile', 'Báo cáo nâng cao', 'SMS thông báo', 'Hỗ trợ ưu tiên'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Liên hệ',
    period: '',
    features: ['Không giới hạn', 'Không giới hạn', 'Custom features', 'API integration', 'Account manager'],
    popular: false
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
              <span className="text-xl">🧺</span>
            </div>
            <span className="text-xl font-bold text-text-primary">LaundroMagic</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-text-secondary hover:text-primary transition-colors">Tính năng</a>
            <a href="#pricing" className="text-text-secondary hover:text-primary transition-colors">Bảng giá</a>
            <a href="#testimonials" className="text-text-secondary hover:text-primary transition-colors">Đánh giá</a>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/login" className="btn-ghost">Đăng nhập</Link>
            <Link to="/login" className="btn-primary flex items-center gap-2">
              Dùng thử miễn phí
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                <Star className="text-yellow-500 fill-yellow-500" size={14} />
                Được tin dùng bởi 500+ cửa hàng
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                Quản lý cửa hàng{' '}
                <span className="gradient-text">giặt sấy</span>
                {' '}thông minh
              </h1>
              
              <p className="text-lg text-text-secondary mb-8 max-w-lg">
                Tối ưu quy trình, tăng doanh thu với hệ thống quản lý toàn diện dành cho cửa hàng giặt sấy hiện đại.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                  Bắt đầu miễn phí
                  <ArrowRight size={20} />
                </Link>
                <a href="#features" className="btn-secondary text-lg px-8 py-4 text-center">
                  Xem tính năng
                </a>
              </div>
              
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-success" size={20} />
                  <span className="text-sm text-text-secondary">Không cần thẻ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-success" size={20} />
                  <span className="text-sm text-text-secondary">Dùng thử 14 ngày</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-success" size={20} />
                  <span className="text-sm text-text-secondary">Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image / Dashboard Preview */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-blue-100 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-primary">24</p>
                      <p className="text-xs text-text-secondary">Đơn hôm nay</p>
                    </div>
                    <div className="flex-1 bg-green-100 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-success">2.4M</p>
                      <p className="text-xs text-text-secondary">Doanh thu</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-primary-light rounded-full" />
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200 rounded w-24" />
                          <div className="h-2 bg-gray-100 rounded w-16 mt-1" />
                        </div>
                        <div className="h-6 bg-green-100 rounded-full w-16" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-bounce-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Đơn hoàn thành</p>
                    <p className="font-bold text-text-primary">+15 hôm nay</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Users className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Khách mới</p>
                    <p className="font-bold text-text-primary">+5 tuần này</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Giải pháp toàn diện giúp bạn quản lý cửa hàng giặt sấy hiệu quả hơn
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-hover text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <feature.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Bảng giá đơn giản
            </h2>
            <p className="text-lg text-text-secondary">
              Chọn gói phù hợp với quy mô cửa hàng của bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`card relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-4 py-1 rounded-full">
                    Phổ biến nhất
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                    <span className="text-text-secondary pb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-success flex-shrink-0" size={18} />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  Chọn gói này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Khách hàng nói gì?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.business}</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">"{testimonial.content}"</p>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sẵn sàng nâng cấp cửa hàng của bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng
          </p>
          <Link to="/login" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Bắt đầu ngay
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-xl">🧺</span>
              </div>
              <span className="text-xl font-bold">LaundroMagic</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 LaundroMagic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

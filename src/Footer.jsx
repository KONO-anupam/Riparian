import logoFinal from '../assets/logoFinal.png';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 relative" style={{ 
      background: 'linear-gradient(to bottom, rgba(125, 137, 110, 0.9), rgba(24, 41, 28, 0.95))',
      boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start">
              <img 
                src={logoFinal} 
                alt="ILNB FINSERV" 
                className="h-29 w-29 mb-4"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }} 
              />
              <p className="text-sm mt-4 text-green-100">
                AI-powered investment insights tailored to your risk profile.
              </p>
              <div className="flex items-center mt-4">
                <div className="h-2 w-2 rounded-full mr-2 bg-green-400" />
                <span className="text-xs font-medium text-green-100">All services are online</span>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg text-green-200">Products</h3>
            <ul className="space-y-2">
              {['Dashboard', 'Compare', 'Execute', 'Analytics', 'Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-green-300 text-green-100 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg text-green-200">Resources</h3>
            <ul className="space-y-2">
              {['Help Center', 'Guides', 'API Documentation', 'Market Insights', 'Webinars'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-green-300 text-green-100 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg text-green-200">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Press', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-green-300 text-green-100 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="h-px w-full my-6" style={{ background: 'linear-gradient(to right, transparent, rgba(167, 243, 208, 0.2), transparent)' }}></div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0 text-green-200">
            © 2025 ILNB•FINSERV • 2 Corporate Park, Mumbai, India. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Security'].map((item) => (
              <a key={item} href="#" className="text-sm hover:text-green-300 text-green-100">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
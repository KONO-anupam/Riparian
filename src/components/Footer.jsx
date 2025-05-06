import logoFinal from '../assets/logoFinal.png';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 relative" style={{ 
      background: 'linear-gradient(to bottom, rgba(178, 171, 242, 0.9), rgba(137, 4, 61, 0.95))',
      boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start">
              <img 
                src={logoFinal} 
                alt="ILNB FINSERV" 
                className="h-29 w-29 mb-4"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }} 
              />
              <p className="text-sm mt-4 text-[#f2eaff]">
                AI-powered investment insights tailored to your risk profile.
              </p>
              <div className="flex items-center mt-4">
                <div className="h-2 w-2 rounded-full mr-2 bg-[#f7c5e0]" />
                <span className="text-xs font-medium text-[#f2eaff]">All services are online</span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg text-[#e4dcff]">Products</h3>
            <ul className="space-y-2">
              {['Dashboard', 'Compare', 'Execute', 'Analytics', 'Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[#fce9f0] text-[#f2eaff] transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg text-[#e4dcff]">Resources</h3>
            <ul className="space-y-2">
              {['Help Center', 'Guides', 'API Documentation', 'Market Insights', 'Webinars'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[#fce9f0] text-[#f2eaff] transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg text-[#e4dcff]">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Press', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[#fce9f0] text-[#f2eaff] transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full my-6" style={{ background: 'linear-gradient(to right, transparent, rgba(242, 234, 255, 0.3), transparent)' }}></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0 text-[#e4dcff]">
            © 2025 ILNB•FINSERV • 2 Corporate Park, Mumbai, India. All rights reserved.
          </div>

          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Security'].map((item) => (
              <a key={item} href="#" className="text-sm hover:text-[#fce9f0] text-[#f2eaff]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

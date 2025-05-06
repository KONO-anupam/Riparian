import logoFinal from '../assets/logoFinal.png';
import { TextHoverEffect } from './ui/text-hover-effect';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: ['Dashboard', 'Compare', 'Execute', 'Analytics', 'Reports']
    },
    {
      title: "Resources",
      links: ['Help Center', 'Guides', 'API Documentation', 'Market Insights', 'Webinars']
    },
    {
      title: "Company",
      links: ['About Us', 'Careers', 'Press', 'Contact', 'Privacy Policy']
    }
  ];

  const socialIcons = [
    { name: 'LinkedIn', icon: <FaLinkedinIn /> },
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Instagram', icon: <FaInstagram /> },
  ];

  return (
    <footer className="w-full py-12 px-4 relative" style={{ 
      background: 'linear-gradient(to bottom, rgba(178, 171, 242, 0.3), rgba(137, 4, 61, 0.95), rgba(100, 2, 48, 1))',
      boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.2)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start">
              <img 
                src={logoFinal} 
                alt="ILNB FINSERV" 
                className="h-24 w-auto mb-4 transition-all duration-300 hover:brightness-125"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }} 
              />
              <p className="text-sm mt-2 text-[#f2eaff] leading-relaxed">
                AI-powered investment insights tailored to your risk profile and financial goals.
              </p>
              <div className="flex items-center mt-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 px-3 py-1.5 rounded-full">
                <div className="h-2 w-2 rounded-full mr-2 bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-[#f2eaff]">All services are online</span>
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold mb-4 text-lg text-[#e4dcff]">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm group flex items-center text-[#f2eaff] transition-all hover:translate-x-1 duration-300"
                    >
                      <span className="opacity-0 -ml-4 mr-1 group-hover:opacity-100 transition-all">→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

            <div className="flex space-x-4 mr-8 justify-end">
              {socialIcons.map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  aria-label={social.name}
                  className="text-[#e4dcff] hover:text-white transition-all transform hover:scale-110"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
      
        <div className="h-px w-full my-8" style={{ background: 'linear-gradient(to right, transparent, rgba(242, 234, 255, 0.3), transparent)' }}></div>
        
        <div className="flex justify-center items-center mb-8">
          <TextHoverEffect/>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-6 md:mb-0 text-[#e4dcff]">
          National Institute of Technology, Rourkela, Odisha, India. All rights reserved.
          </div>

          <div className="flex items-center">
            <div className="flex space-x-6">
              {['Terms', 'Privacy', 'Security'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm hover:text-white text-[#e4dcff] transition-all border-b border-transparent hover:border-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
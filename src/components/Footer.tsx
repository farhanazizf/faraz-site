import React from 'react';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/resume';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: `https://${personalInfo.github}`,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: `https://${personalInfo.linkedin}`,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: ExternalLink,
      href: personalInfo.portfolio,
      label: 'Portfolio'
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity duration-200"
            >
              {personalInfo.name}
            </button>
            <p className="text-dark-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and building exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-dark-400 group-hover:text-primary-400 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-100">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-dark-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-100">Get In Touch</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-dark-400 hover:text-primary-400 transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-dark-400 hover:text-primary-400 transition-colors duration-200"
              >
                {personalInfo.phone}
              </a>
              <p className="text-dark-400">{personalInfo.location}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-dark-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-dark-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-dark-400">
              <button
                onClick={scrollToTop}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Back to Top ↑
              </button>
              <span>•</span>
              <a
                href="#privacy"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Privacy
              </a>
              <span>•</span>
              <a
                href="#terms"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
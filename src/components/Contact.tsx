import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/resume';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Farhan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Based in Indonesia'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: `https://${personalInfo.github}`,
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://${personalInfo.linkedin}`,
      description: 'Connect professionally'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: personalInfo.portfolio,
      description: 'View my work'
    }
  ];

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-primary-400/3 rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-section animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 font-medium text-sm tracking-wide">LET'S CONNECT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold title-spacing">
            Get In <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'm always interested in discussing new opportunities 
            and exciting challenges. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-10 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold title-spacing">Let's Connect</h3>
              <p className="text-lg text-dark-300 leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-dark-800/40 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/30 hover:bg-dark-800/60 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-4 rounded-xl group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all duration-300 border border-primary-500/20">
                      <Icon size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-dark-100 group-hover:text-primary-400 transition-colors duration-200">{method.label}</div>
                      <div className="text-dark-400 text-base mb-1">{method.description}</div>
                      <div className="text-primary-400 font-medium">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold title-spacing flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Follow Me
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-dark-800/40 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/30 hover:bg-dark-800/60 transition-all duration-300 group hover:transform hover:scale-105"
                      title={social.description}
                    >
                      <Icon size={20} className="text-primary-400" />
                      <span className="text-dark-200 font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-dark-800/40 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/30"></div>
                <span className="font-bold text-lg text-dark-100">Available for Work</span>
              </div>
              <p className="text-dark-300 leading-relaxed">
                I'm currently open to new opportunities and interesting projects. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-10 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
              <h3 className="text-3xl font-bold title-spacing">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold text-dark-200 mb-4">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-dark-700/50 border border-dark-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 text-dark-100 placeholder-dark-400 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-dark-200 mb-4">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-dark-700/50 border border-dark-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 text-dark-100 placeholder-dark-400 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-base font-semibold text-dark-200 mb-4">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-dark-700/50 border border-dark-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 text-dark-100 placeholder-dark-400 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-dark-200 mb-4">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-dark-700/50 border border-dark-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 text-dark-100 placeholder-dark-400 resize-none transition-all duration-200"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
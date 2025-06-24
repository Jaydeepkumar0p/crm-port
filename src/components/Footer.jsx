import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Jaydeepkumar0p',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jaideep-kumar-000b5424b/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: '#contact',
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jaydeep Kumar
            </div>
            <p className="text-gray-400 max-w-sm">
              Full Stack Developer passionate about creating innovative web applications 
              and solving complex problems through code.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Ramgarh, Jharkhand, India</p>
              <p>jaideepkr.0123@gmail.com</p>
              <p>+91 9142803194</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jaydeepkumar0p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                style={{ fontSize: 32 }}
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaideep-kumar-000b5424b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                style={{ fontSize: 32 }}
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; {currentYear} Jaydeep Kumar. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

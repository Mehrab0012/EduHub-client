import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';


const Footer = () => {
    const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' }
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

const contactInfo = [
  { icon: Mail, text: 'support@eduhub.com' },
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: MapPin, text: 'San Francisco, CA' }
];
    return (
        <div>
             <footer className="w-full bg-base-200 border-t border-base-300">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold mb-4">EduHub</h3>
            <p className="text-base-content/70 text-sm mb-4">
              Empowering learners worldwide with high-quality online education.
            </p>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-base-content/70 text-sm">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base-content mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-base-content/70 hover:text-base-content transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base-content mb-4">Stay Updated</h4>
            <p className="text-base-content/70 text-sm mb-4">
              Subscribe to our newsletter for the latest courses and updates.
            </p>
            <div className="flex gap-2 flex-col ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-base-300 text-base-content px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary mt-2 text-primary-content px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center text-base-content/70 hover:bg-primary hover:text-primary-content transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-base-300 text-center"
        >
          <p className="text-base-content/70 text-sm">
            © 2024 EduHub. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;
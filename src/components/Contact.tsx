import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Github, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const handleEmailClick = () => {
    const email = 'izzonline@gmail.com';
    // Try to open email client
    window.location.href = `mailto:${email}`;
    // Also copy to clipboard as fallback
    navigator.clipboard.writeText(email).then(() => {
      toast.success('Email copied to clipboard!', {
        description: 'izzonline@gmail.com'
      });
    });
  };
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'izzonline@gmail.com',
      href: 'mailto:izzonline@gmail.com',
      color: 'from-cyan-500/10 to-blue-500/10',
      iconColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-400/50 hover:shadow-cyan-500/10',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+39 339 187 63 63',
      href: 'tel:+393391876363',
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50 hover:shadow-purple-500/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cologno Al Serio (BG), Italy',
      href: null,
      color: 'from-pink-500/10 to-rose-500/10',
      iconColor: 'text-pink-400',
      borderColor: 'hover:border-pink-400/50 hover:shadow-pink-500/10',
    },
    {
      icon: ExternalLink,
      label: 'Website',
      value: 'izzonline.it',
      href: 'http://izzonline.it',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-400/50 hover:shadow-emerald-500/10',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Looking for an experienced Java Backend Developer? Let's discuss how I can help bring your project to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 bg-slate-800/50 border-slate-700 ${item.borderColor} transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-200 hover:text-cyan-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-200">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-purple-400/30 shadow-lg shadow-purple-500/10">
              <h3 className="text-slate-100 mb-4">Ready to collaborate?</h3>
              <p className="text-slate-300 mb-6">
                I'm currently available for freelance projects and consulting opportunities. 
                Whether you need help with microservices architecture, AI integration, or enterprise backend development, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={handleEmailClick}
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50 transition-all cursor-pointer"
                >
                  <Mail size={18} />
                  Send Email
                </button>
                <a 
                  href="https://wa.me/393391876363" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md border border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400/10 transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Me
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500"
      >
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/st3fania/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-slate-500 hover:text-cyan-400"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/IzzOnLineV2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-400 hover:bg-purple-400/10 transition-all text-slate-500 hover:text-purple-400"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.facebook.com/izzonline"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-pink-400 hover:bg-pink-400/10 transition-all text-slate-500 hover:text-pink-400"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/izzonline"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-rose-400 hover:bg-rose-400/10 transition-all text-slate-500 hover:text-rose-400"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        <p>© 2025 IzzOnLine di Stefania Izzo. All rights reserved.</p>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p>PEC: <a href="mailto:izzonline@pec.net" className="text-slate-400 hover:text-purple-400 transition-colors">izzonline@pec.net</a></p>
          <span className="hidden sm:inline">•</span>
          <p>P.IVA: <span className="text-slate-400">04323170169</span></p>
        </div>
      </motion.footer>
    </section>
  );
}

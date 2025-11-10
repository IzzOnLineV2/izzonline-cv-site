import { motion } from 'motion/react';
import { MapPin, Mail, Phone, ExternalLink, Github, Linkedin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from 'figma:asset/f7bfc6a958b82b5a0ab60f201dbcee3fddfbe305.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/50">
                <img 
                  src={profileImage} 
                  alt="Stefania Izzo" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              STEFANIA IZZO
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">Senior Java Developer & AI Specialist</p>
              <p className="text-slate-400">15+ Years of Enterprise Backend Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8 text-slate-300"
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-pink-400" />
                <span>Cologno Al Serio (BG), Italy</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                <span>+39 339 187 63 63</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-cyan-400" />
                <a href="mailto:izzonline@gmail.com" className="hover:text-cyan-400 transition-colors">
                  izzonline@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50"
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                  onClick={() => window.open('https://wa.me/393391876363', '_blank')}
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/st3fania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-slate-400 hover:text-cyan-400"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/IzzOnLineV2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-400 hover:bg-purple-400/10 transition-all text-slate-400 hover:text-purple-400"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.facebook.com/izzonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-pink-400 hover:bg-pink-400/10 transition-all text-slate-400 hover:text-pink-400"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/izzonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-rose-400 hover:bg-rose-400/10 transition-all text-slate-400 hover:text-rose-400"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

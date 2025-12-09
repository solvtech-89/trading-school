import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-light border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Trading School" className="h-12 w-12 rounded-full" />
              <span className="text-xl font-bold text-gradient">Trading School</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Komunitas Trading Indonesia yang berfokus pada edukasi Forex & Crypto untuk membantu trader pemula hingga profesional.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Kontak Kami</h3>
            <div className="space-y-3">
              <a href="mailto:info@tradingschool.id" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>info@tradingschool.id</span>
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+62 812-3456-7890</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                <Facebook size={20} className="text-primary" />
              </a>
              <a href="#" className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                <Instagram size={20} className="text-primary" />
              </a>
              <a href="#" className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                <Twitter size={20} className="text-primary" />
              </a>
              <a href="#" className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                <Youtube size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Trading School</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

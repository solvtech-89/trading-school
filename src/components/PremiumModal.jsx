import { X, Lock } from 'lucide-react';

const PremiumModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative glass-card p-8 max-w-md w-full animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={40} className="text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gradient">
            Konten Premium
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Fitur ini hanya tersedia untuk <span className="text-primary font-semibold">Member Premium</span>. 
            Bergabunglah sekarang untuk mendapatkan akses penuh ke semua fasilitas eksklusif kami!
          </p>

          <div className="space-y-3">
            <a 
              href="#pricing" 
              onClick={onClose}
              className="btn-primary w-full block text-center"
            >
              Lihat Paket Premium
            </a>
            <button 
              onClick={onClose}
              className="btn-secondary w-full"
            >
              Nanti Saja
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;

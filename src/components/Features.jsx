import { Check } from 'lucide-react';

const Features = ({ onPremiumClick }) => {
  const features = [
    "Seluruh member sudah membuktikan bahwa kami dapat membantu mereka di Industri ini.",
    "Menghadirakan Pembelajaran 1 On 1 Via Zoom Meeting atau Google Meet.",
    "Memberikan Signal Trading Real Time TANPA IB (Kami tidak menerima komisi dari pihak broker manapun Member bebas menggunakan Broker apapun).",
    "Memberikan Informasi News yang berdampak ke pasar modal, sehingga membantu member untuk lebih memperkuat open posisi mereka.",
    "Komunitas Eksklusif khusus Member Premium.",
    "Sertifikat Trader Profesional sebagai tanda mereka sudah pernah belajar dan dapat eksekusi market dengan sendirinya.",
    "Memfasilitsasi Webinar, Seminar & Table Talk Gratis bagi member.",
    "Merchandise eksklusif Khusus Member Premium.",
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">TENTANG TRADING SCHOOL</h2>
        <p className="section-subtitle">
          Bergabunglah dengan ratusan hingga ribuan trader dari Trading School untuk pengalaman baru dan menyenangkan.
        </p>

        <div className="text-center mb-12">
          <button 
            onClick={onPremiumClick}
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2"
          >
            <span>CEK FASILITAS PREMIUM KAMI</span>
            <span className="text-xl">★</span>
          </button>
          <p className="text-sm text-gray-400 mt-2">
            *Tersedia untuk Member Premium
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 flex items-start gap-4 animate-on-scroll hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Check size={20} className="text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#pricing" className="btn-secondary text-lg px-10 py-4">
            GABUNG SEKARANG
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

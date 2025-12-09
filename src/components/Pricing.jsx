import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: "Premium 12 Bulan",
      originalPrice: "Rp. 799.000",
      price: "Rp. 499.000",
      duration: "12 Bulan",
      popular: false,
      benefits: [
        "Akses premium edukasi Private.",
        "Mentoring 1 One 1 Via Zoom atau Google Meet.",
        "Modul Eksklusif dari 0 – Medium.",
        "Sertifikat Trader (Selesai memahami pembelajaran)",
        "Outlook Premium Harian NO IB.",
        "Tugas atau Challenge harian.",
        "Grup Disscus Premium.",
        "Informasi Fundamental Premium."
      ]
    },
    {
      title: "Premium LIFETIME",
      originalPrice: "Rp. 1.299.000",
      price: "Rp. 799.000",
      duration: "LIFETIME",
      popular: true,
      benefits: [
        "Akses semua chanel Premium.",
        "Ratusan Modul Eksklusif 0 hingga Expert.",
        "Mentoring 1 On 1 Via Zoom atau Google Meet.",
        "Sesi Praktek bersama Mentor.",
        "Outlook Premimun Harian NO IB.",
        "Informasi Fundamental Premium.",
        "Sertifikat Trader (Selesai memahami pembelajaran).",
        "Premium Support 24 Jam.",
        "Marchandise Trading School Premium.",
        "Free eksklusif Webinar, Seminar & Table Talk.",
        "Grup Disscus Premium."
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">JOIN MEMBER PREMIUM</h2>
        <p className="section-subtitle">
          Pilih paket yang sesuai dengan kebutuhan trading Anda
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300 animate-on-scroll ${
                plan.popular ? 'border-2 border-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-white px-6 py-2 rounded-bl-2xl flex items-center gap-2">
                  <Sparkles size={16} />
                  <span className="font-bold text-sm">PALING POPULER</span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                
                <div className="mb-2">
                  <span className="text-gray-400 line-through text-lg">
                    {plan.originalPrice}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-gradient">
                    {plan.price}
                  </span>
                </div>
                
                <p className="text-primary font-semibold">
                  Dapatkan semua akses premium selama {plan.duration}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-lg text-primary mb-4">Benefits:</h4>
                {plan.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-primary text-white hover:shadow-glow-lg hover:scale-105' 
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-secondary hover:shadow-glow'
              }`}>
                Pilih Paket Ini
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-2xl mx-auto glass-card p-6">
          <p className="text-gray-300">
            💡 <span className="text-primary font-semibold">Garansi Uang Kembali</span> jika tidak puas dalam 7 hari pertama
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

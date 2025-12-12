import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Instagram } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alva Ahmad",
      role: "Trader Forex",
      instagram: "alvaahmad_",
      image: "/profil-1.jpeg",
      text: "Trading School benar-benar mengubah cara saya trading. Dari yang awalnya sering loss, sekarang sudah konsisten profit. Mentoring 1-on-1 nya sangat membantu!",
      rating: 5
    },
    {
      name: "Tanaaxy",
      role: "Crypto Trader",
      instagram: "tanaaxy",
      image: "/profil-2.jpeg",
      text: "Signal yang diberikan sangat akurat dan yang paling penting NO IB! Saya bebas pilih broker sendiri. Komunitas nya juga sangat supportive.",
      rating: 5
    },
    {
      name: "Dwipha",
      role: "CEO Solvtech.id & Entrepreneur",
      instagram: "dwpha_a",
      image: "/profil-3.jpeg",
      text: "Sudah ikut banyak kursus trading, tapi Trading School yang paling lengkap. Dari edukasi, signal, sampai sertifikat semua ada. Highly recommended!",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimoni</h2>
        <p className="section-subtitle">Apa Kata Mereka yang sudah bergabung???</p>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-primary/10 text-9xl font-bold">"</div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-glow"
                  style={{ objectPosition: currentIndex === 1 ? 'center 30%' : 'center center' }}
                />
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400 mb-2">{testimonials[currentIndex].role}</p>
                  
                  <a 
                    href={`https://instagram.com/${testimonials[currentIndex].instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 justify-center md:justify-start text-primary hover:text-primary/80 transition-colors mb-3"
                  >
                    <Instagram size={16} />
                    <span className="text-sm">@{testimonials[currentIndex].instagram}</span>
                  </a>
                  
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 rounded-full group"
            >
              <ChevronLeft className="text-primary group-hover:scale-110 transition-transform" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-primary' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 rounded-full group"
            >
              <ChevronRight className="text-primary group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

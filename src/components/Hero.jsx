const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-up">
            Belajar Trading <span className="text-gradient">Forex & Crypto</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Dari Komunitas Terbaik Di Indonesia
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Ratusan sampai Ribuan Orang sudah <span className="text-primary font-semibold">Cuan</span> dari Fasilitas Premium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#pricing" className="btn-primary text-lg px-10 py-4">
              JOIN NOW
            </a>
            <a href="#about" className="btn-secondary text-lg px-10 py-4">
              Pelajari Lebih Lanjut
            </a>
          </div>

          {/* Floating Logo */}
          <div className="mt-16 animate-float">
            <img 
              src="/logo.jpg" 
              alt="Trading School Logo" 
              className="w-48 h-48 mx-auto rounded-full shadow-glow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

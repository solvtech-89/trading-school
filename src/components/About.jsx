const About = () => {
  const photos = ["/slide-1.jpeg", "/slide-2.jpeg", "/slide-3.jpeg"];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">APA ITU TRADING SCHOOL?</h2>
        <p className="section-subtitle">Kumpulan Foto Dokumentasi</p>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={photo}
                alt={`Dokumentasi ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 animate-on-scroll">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Trading School Adalah Komunitas yang bergerak dibidang pasar
              modal. Pasar modal diantaranya,{" "}
              <span className="text-primary font-semibold">
                Forex, Crypto, Saham
              </span>
              . Trading School lebih cenderung berfokus ke instrument Forex &
              Crypto. Trading School diciptakan bagi Masyarakat umum yang mau
              belajar Forex maupun Crypto dari 0 hingga expert.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Hal ini dengan tujuan agar Masyarakat saat terjun tidak langsung
              terkena{" "}
              <span className="text-red-400 font-semibold">MARGIN CALL</span>,
              karena sudah memiliki bekal yang cukup untuk menghadapi pasar
              modal. Ratusan trader sudah merasakan PD saat dimarket dan{" "}
              <span className="text-primary font-semibold">Profit</span> saat
              mendapatkan fasilitas PREMIUM KAMI.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Anda bisa mendapatkan pengalaman, Ilmu Premium, outlook,
              sertifikat, grup discus premium dari trader Pemula-Profesional dan
              Mentoring 1 one 1 Via Zoom dan Google Meet. Kami Pastikan kepada
              member Premium Ketika lulus pembelajaran akan dijamin PD Ketika
              terjun dimarket, agar mereka lebih mandiri dengan ilmu mereka.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="btn-primary">
                JOIN NOW
              </a>
              <a href="#features" className="btn-secondary">
                CEK FASILITAS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

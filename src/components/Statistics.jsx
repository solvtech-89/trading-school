import { Users, DollarSign, TrendingUp } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: "1,000+",
      label: "Member Joined",
      color: "from-primary to-accent-cyan"
    },
    {
      icon: DollarSign,
      value: "$10,000+",
      label: "Profit Member",
      color: "from-accent-cyan to-accent-blue"
    },
    {
      icon: TrendingUp,
      value: "95%+",
      label: "Signal Accuracy yang telah terbukti kepada para member yang merasakan profit dari fasilitas dan signals premium dari kami.",
      color: "from-accent-blue to-primary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Kenapa Memilih Trading School?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                  <Icon size={40} className="text-white" />
                </div>
                
                <div className={`text-5xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

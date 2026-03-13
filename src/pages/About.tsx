import { motion } from 'framer-motion';

export const About = () => {
  const milestones = [
    {
      year: 'Foundation',
      title: 'From Commodity Trading',
      description:
        'BORGE TRADERS began as a regional tin trading business, supplying raw materials to local markets. 25+ years of trusted local.',
    },
    {
      year: 'Evolution',
      title: 'Toward Engineering Leadership',
      description:
        'Recognition that standardized engineering creates durability and predictable performance.',
    },
    {
      year: 'Today',
      title: 'Engineered Systems Company',
      description:
        'We now designs, specifies, and supplies complete roofing systems—not commodity sheets. Still 100% dedicated to local market excellence.',
    },
    {
      year: 'Future',
      title: 'Global Infrastructure Provider',
      description:
        'Positioned for regional, national, and global market expansion with standardized solutions.',
    },
  ];

  const values = [
    {
      icon: '⚙️',
      title: 'Engineering Excellence',
      description: 'Every system is purpose-engineered to exacting specifications and performance standards.',
    },
    {
      icon: '📏',
      title: 'Standardization',
      description: 'Predictable, repeatable design ensures consistent quality across all markets.',
    },
    {
      icon: '🛡️',
      title: 'Durability',
      description: 'Long-term performance assurance through rigorous testing and proven materials.',
    },
    {
      icon: '🌍',
      title: 'Scalability',
      description: 'Systems designed for regional adaptation and global growth.',
    },
    {
      icon: '📋',
      title: 'Transparency',
      description: 'Complete technical documentation, standards compliance, and warranty clarity.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Long-term relationships with customers, partners, and communities.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-heading mb-4">About BORGE TRADERS</h1>
            <p className="text-copper-500 font-semibold text-lg">25+ Years of Local Market Excellence</p>
            <p className="section-subheading">
              Evolution from commodity trading to engineered infrastructure solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="section-heading mb-6">Our Journey</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              For over 25 years, BORGE TRADERS has been the trusted local market partner, supplying raw materials and building deep relationships. 
              Through years of observation and partnership, we recognized a critical opportunity: the market didn't 
              need cheaper sheets—it needed predictable, engineered systems backed by our proven track record.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Today, BORGE TRADERS designs, specifies, and supplies complete roofing systems. Each system is standardized, tested, 
              and warranted. We're not selling tin. We're selling durability, consistency, and long-term value.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-base"
              >
                <p className="text-copper-500 font-bold text-sm mb-2 uppercase tracking-wider">
                  {milestone.year}
                </p>
                <h3 className="text-white font-bold text-lg mb-3">{milestone.title}</h3>
                <p className="text-slate-400 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="card-base text-center">
              <h3 className="text-white font-bold text-xl mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To engineer and deliver standardized roofing systems that provide predictable 
                long-term performance in demanding environments.
              </p>
            </div>

            <div className="card-base text-center">
              <h3 className="text-white font-bold text-xl mb-4">Our Vision</h3>
              <p className="text-slate-300">
                To become a global infrastructure systems provider, recognized for engineering 
                excellence, standardization, and unwavering quality.
              </p>
            </div>

            <div className="card-base text-center">
              <h3 className="text-white font-bold text-xl mb-4">Our Commitment</h3>
              <p className="text-slate-300">
                Long-term durability, transparent specifications, complete documentation, and 
                partnership-focused service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-4">Our Core Values</h2>
            <p className="section-subheading">
              Principles that guide every BORGE TRADERS decision and system—refined over
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="card-base"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-12 text-center">Standards & Compliance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-base"
            >
              <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                Engineering Standards
              </h3>
              <ul className="space-y-2">
                {[
                  'ISO 9001 Quality Management',
                  'ASTM B117 Corrosion Testing',
                  'Wind Load Analysis & Verification',
                  'Thermal Performance Testing',
                  'Load Capacity Certification',
                ].map((standard, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-copper-500 mt-1">✓</span>
                    <span className="text-slate-300">{standard}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-base"
            >
              <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                Regulatory Compliance
              </h3>
              <ul className="space-y-2">
                {[
                  'Local Building Codes Adaptation',
                  'Regional Climate Compliance',
                  'Material Safety Documentation',
                  'Warranty & Liability Coverage',
                  'Environmental Regulations',
                ].map((compliance, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-copper-500 mt-1">✓</span>
                    <span className="text-slate-300">{compliance}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-6">Positioned for Global Growth</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              BORGE TRADERS—25+ years of local market leadership—is building the infrastructure for regional excellence and global scalability. 
              Our standardized systems are adaptable to diverse climates and markets, enabling 
              sustainable growth while maintaining unwavering engineering standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-copper-500 font-bold mb-2 text-lg">🌏 Regional Base</p>
                <p className="text-slate-300 text-sm">
                  Established local presence and market expertise
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-copper-500 font-bold mb-2 text-lg">📊 Scalable Systems</p>
                <p className="text-slate-300 text-sm">
                  Engineered platforms adaptable across markets
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-copper-500 font-bold mb-2 text-lg">🚀 Growth Vision</p>
                <p className="text-slate-300 text-sm">
                  Path to national and global infrastructure leadership
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

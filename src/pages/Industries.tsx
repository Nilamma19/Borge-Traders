import { motion } from 'framer-motion';
import { IndustryCard } from '../components';
import { industriesData } from '../data/industries';

export const Industries = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-heading mb-4">
              Industries We Serve
            </h1>
            <p className="section-subheading">
              BORGE TRADERS Roofing Systems- serving diverse market sectors—engineered for all applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry, idx) => (
              <IndustryCard
                key={idx}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                applications={industry.applications}
                systemType={industry.systemType}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-4">Market Leadership</h2>
            <p className="section-subheading">
              BORGE TRADERS Roofing System - of proven market expertise—positioned for regional, national, and global expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-base text-center"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-white font-bold text-lg mb-3">Residential Expansion</h3>
              <p className="text-slate-400">
                Standardized systems for residential developments, from single-family to large-scale communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-base text-center"
            >
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-white font-bold text-lg mb-3">Industrial Scale</h3>
              <p className="text-slate-400">
                Heavy-duty systems for manufacturing, warehousing, and industrial infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-base text-center"
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-white font-bold text-lg mb-3">Global Ready</h3>
              <p className="text-slate-400">
                Climate-optimized systems designed for regional adaptation and global scalability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications by Industry */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading mb-12 text-center">System Selection Guide</h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-base"
            >
              <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                Residential Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-semibold text-copper-500">
                    Recommended System
                  </p>
                  <p className="text-white font-semibold">Residential Roofing Systems</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-semibold text-copper-500">
                    Key Performance
                  </p>
                  <p className="text-slate-300 text-sm">
                    30+ year lifespan, 200+ km/h wind resistance, Grade A corrosion protection
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-base"
            >
              <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                Industrial & Commercial
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-semibold text-copper-500">
                    Recommended System
                  </p>
                  <p className="text-white font-semibold">Industrial Roofing Systems</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-semibold text-copper-500">
                    Key Performance
                  </p>
                  <p className="text-slate-300 text-sm">
                    40+ year lifespan, 250+ km/h wind resistance, Grade AA corrosion protection
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-base"
            >
              <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                Regional & Specialized
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-semibold text-copper-500">
                    Recommended System
                  </p>
                  <p className="text-white font-semibold">Climate-Optimized Roofing Systems</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-semibold text-copper-500">
                    Key Performance
                  </p>
                  <p className="text-slate-300 text-sm">
                    Climate-specific variants, regional compliance, proven durability
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="section-heading mb-6">The BORGE TRADERS Global Vision</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              BORGE TRADERS—is positioning itself as a regional player with global scalability. 
              Our engineered roofing systems are standardized yet adaptable, enabling growth across 
              diverse markets while maintaining unwavering quality standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-copper-500 font-bold mb-2">🌐 Regional Hub</p>
                <p className="text-slate-300 text-sm">
                  Serve primary regional markets with tailored solutions
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-copper-500 font-bold mb-2">📈 National Growth</p>
                <p className="text-slate-300 text-sm">
                  Scale operations across national markets with proven systems
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-copper-500 font-bold mb-2">🚀 Global Expansion</p>
                <p className="text-slate-300 text-sm">
                  Position as global infrastructure systems provider
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

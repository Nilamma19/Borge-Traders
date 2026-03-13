import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PerformanceMetric, SystemCard, TrustBadge } from '../components';
import { systemsList } from '../data/systems';

export const Home = () => {
  const performanceMetrics = [
    {
      icon: '⏱️',
      label: 'Lifespan',
      value: '30-40+',
      description: 'Years of engineered durability',
    },
    {
      icon: '💨',
      label: 'Wind Resistance',
      value: '200+',
      description: 'km/h design capacity',
    },
    {
      icon: '🛡️',
      label: 'Corrosion Protection',
      value: 'Grade A/AA',
      description: 'ASTM B117 certified',
    },
    {
      icon: '📦',
      label: 'Standardization',
      value: '100%',
      description: 'Repeatable engineering',
    },
  ];

  const trustBadges = [
    { icon: '✓', label: 'ISO 9001' },
    { icon: '✓', label: 'ASTM Certified' },
    { icon: '✓', label: 'Engineering Standards' },
    { icon: '✓', label: 'Climate Tested' },
    { icon: '✓', label: 'Performance Rated' },
    { icon: '✓', label: 'Warranty Backed' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="section-heading mb-6">
             Roofing Systems Built for Performance and Longevity
          </h1>
          <p className="section-subheading mb-8">
            Standardized roofing systems designed for demanding environments. 
            BORGE TRADERS—25+ years of local market expertise—delivers customize solutions, not only commodity tin sheets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/systems" className="btn-primary">
              Explore Roofing Systems
            </Link>
            
          </div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {performanceMetrics.map((metric, idx) => (
              <PerformanceMetric
                key={idx}
                icon={metric.icon}
                label={metric.label}
                value={metric.value}
                description={metric.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Systems Overview */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">Our Roofing Systems</h2>
            <p className="section-subheading">
              Three engineered system categories to meet diverse market demands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemsList.map((system, idx) => (
              <SystemCard
                key={idx}
                title={system.title}
                description={system.description}
                icon={system.icon}
                specs={system.specs.slice(0, 4)}
                link={`/systems#${system.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-4">Engineered for Trust</h2>
            <p className="section-subheading">
              Standards-compliant, performance-rated, and backed by warranties
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, idx) => (
              <TrustBadge
                key={idx}
                icon={badge.icon}
                label={badge.label}
                description={undefined}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

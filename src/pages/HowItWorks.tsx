import { motion } from 'framer-motion';
import { ProcessStep } from '../components';

export const HowItWorks = () => {
  const processSteps = [
    {
      number: 1,
      title: 'System Selection',
      description: 'Choose the engineered roofing system that matches your project requirements.',
      details: [
        'Assess project scope and environmental conditions',
        'Select from Residential, Industrial, or Climate-Optimized systems',
        'Review system specifications and performance ratings',
        'Confirm compliance with local standards',
      ],
    },
    {
      number: 2,
      title: 'Specification & Sizing',
      description: 'We develop standardized specifications tailored to your project.',
      details: [
        'Technical assessment of building dimensions',
        'Load calculations and environmental analysis',
        'Component selection and configuration',
        'Documentation of engineered specifications',
      ],
    },
    {
      number: 3,
      title: 'System Supply',
      description: 'We delivers complete,  roofing system components.',
      details: [
        'Manufacturing to specification',
        'Quality assurance and testing',
        'Bundled system delivery (sheets, fasteners, flashings)',
        'Complete documentation and installation guides',
      ],
    },
    {
      number: 4,
      title: 'Long-term Performance Assurance',
      description: 'Our Roofing Systems backed by comprehensive warranties and support.',
      details: [
        'Material and workmanship warranties',
        'Performance monitoring and technical support',
        'Maintenance guidance and lifecycle support',
        'Long-term durability assurance',
      ],
    },
  ];

  const advantages = [
    {
      icon: '🎯',
      title: 'Standardized Engineering',
      description: 'Every system is engineered to exacting standards, ensuring predictable performance.',
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'Pre-engineered systems reduce design cycles and accelerate project timelines.',
    },
    {
      icon: '💪',
      title: 'Proven Durability',
      description: 'Manufactured for 30-40+ years of performance in demanding environments.',
    },
    {
      icon: '🛡️',
      title: 'Complete Coverage',
      description: 'Bundled systems include all components needed for installation.',
    },
    {
      icon: '📋',
      title: 'Full Documentation',
      description: 'Comprehensive technical specifications and installation procedures included.',
    },
    {
      icon: '🌍',
      title: 'Global Readiness',
      description: 'Systems designed for regional scalability and diverse climates.',
    },
  ];

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
              How Roofing Systems Work
            </h1>
            <p className="section-subheading">
              A four-step process from selection to long-term performance assurance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                details={step.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading mb-12 text-center">The BORGE TRADERS Process</h2>

          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-8">
              {['Selection', 'Specification', 'Supply', 'Assurance'].map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center flex-1"
                >
                  <div className="w-12 h-12 bg-copper-500 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    {idx + 1}
                  </div>
                  <p className="text-white font-semibold text-center">{stage}</p>

                  {idx < 3 && (
                    <div className="w-full h-1 bg-copper-500 mt-6 ml-4 relative">
                      <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-copper-500 text-xl">
                        →
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {['Selection', 'Specification', 'Supply', 'Assurance'].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-base flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-copper-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-white font-semibold">{stage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-4">Why BORGE TRADERS Systems</h2>
            <p className="section-subheading">
             Purpose-engineered solutions for modern infrastructure challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-base text-center"
              >
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{adv.title}</h3>
                <p className="text-slate-400 text-sm">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Flow Diagram */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-12 text-center">System Architecture</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Input Section */}
            <div className="card-base">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-copper-500">📥</span> Project Input
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="text-slate-300 text-sm">
                    <strong>Scope:</strong> Building dimensions & configuration
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="text-slate-300 text-sm">
                    <strong>Environment:</strong> Climate zone & exposure conditions
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="text-slate-300 text-sm">
                    <strong>Requirements:</strong> Performance & compliance standards
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Section */}
            <div className="card-base">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-copper-500">⚙️</span> Engineering Processing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  'Load Analysis',
                  'Material Selection',
                  'Component Design',
                  'Quality Verification',
                ].map((process, idx) => (
                  <div key={idx} className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <p className="text-slate-300 text-sm font-semibold">{process}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Output Section */}
            <div className="card-base">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-copper-500">📦</span> System Delivery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  'Roofing Sheets',
                  'Fasteners',
                  'Flashings',
                  'Documentation',
                ].map((component, idx) => (
                  <div key={idx} className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <p className="text-slate-300 text-sm font-semibold">{component}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

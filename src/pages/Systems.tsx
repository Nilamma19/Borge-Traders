import { useState } from 'react';
import { motion } from 'framer-motion';
import { SpecificationSection } from '../components';
import { systemsData, systemsList } from '../data/systems';

export const Systems = () => {
  const [activeSystem, setActiveSystem] = useState('residential');

  const activeSystemData = systemsData[activeSystem as keyof typeof systemsData];

  const residentialSpecs = [
    {
      category: 'Physical Specifications',
      specs: [
        { label: 'Sheet Gauge', value: '0.55 - 0.70 mm' },
        { label: 'Profile', value: 'Trapezoidal / Box' },
        { label: 'Width', value: '1000 - 1050 mm' },
        { label: 'Density', value: 'Z-profile optimized' },
      ],
    },
    {
      category: 'Performance Standards',
      specs: [
        { label: 'Wind Resistance', value: 'Up to 200+ km/h' },
        { label: 'Snow Load', value: '2000+ Pa' },
        { label: 'Thermal Cycling', value: '-20°C to +60°C' },
        { label: 'UV Stability', value: '>95% retention' },
      ],
    },
    {
      category: 'Corrosion Protection',
      specs: [
        { label: 'Salt Spray', value: 'Grade A (ASTM B117)' },
        { label: 'Coating System', value: 'Polyester or Polyvinylidene' },
        { label: 'Thickness', value: '200+ microns' },
        { label: 'Coverage', value: 'Both sides' },
      ],
    },
    {
      category: 'Warranty & Service',
      specs: [
        { label: 'Material Warranty', value: '15 years' },
        { label: 'Workmanship Warranty', value: '15 years' },
        { label: 'Performance Guarantee', value: 'Standardized' },
        { label: 'Technical Support', value: '24/7 available' },
      ],
    },
  ];

  const industrialSpecs = [
    {
      category: 'Heavy-Duty Specifications',
      specs: [
        { label: 'Sheet Gauge', value: '0.70 - 1.0 mm' },
        { label: 'Load Capacity', value: '3000+ Pa design' },
        { label: 'Profile', value: 'Reinforced trapezoidal' },
        { label: 'Installation', value: 'Bolted & welded' },
      ],
    },
    {
      category: 'Environmental Performance',
      specs: [
        { label: 'Wind Resistance', value: 'Up to 250+ km/h' },
        { label: 'Thermal Cycling', value: '-40°C to +80°C' },
        { label: 'Chemical Resistance', value: 'Grade AA+' },
        { label: 'Salt Spray', value: 'Grade AA (ASTM B117)' },
      ],
    },
    {
      category: 'Fastening Systems',
      specs: [
        { label: 'Fastener Material', value: 'Stainless Steel 304/316' },
        { label: 'Design Load', value: 'Engineered for 250+ km/h' },
        { label: 'Spacing', value: 'Optimized per load' },
        { label: 'Sealing', value: 'EPDM gaskets, sealed' },
      ],
    },
    {
      category: 'Warranty & Service',
      specs: [
        { label: 'Material Warranty', value: '20 years' },
        { label: 'Workmanship Warranty', value: '20 years' },
        { label: 'Performance Testing', value: 'Full load tested' },
        { label: 'Documentation', value: 'Certified specs' },
      ],
    },
  ];

  const climateSpecs = [
    {
      category: 'Climate Variants',
      specs: [
        { label: 'Tropical', value: 'Enhanced UV/salt spray' },
        { label: 'Arid', value: 'Thermal expansion mgmt' },
        { label: 'Temperate', value: 'Balanced performance' },
        { label: 'Extreme Weather', value: 'Hurricane rated' },
      ],
    },
    {
      category: 'Regional Compliance',
      specs: [
        { label: 'Material Standards', value: 'ISO 9001 certified' },
        { label: 'Local Codes', value: 'Regionally adapted' },
        { label: 'Performance Testing', value: 'Climate-specific' },
        { label: 'Durability', value: 'Proven in region' },
      ],
    },
    {
      category: 'Customization Options',
      specs: [
        { label: 'Coating', value: 'Regional-grade' },
        { label: 'Insulation', value: 'Climate-adapted' },
        { label: 'Fastening', value: 'Environment-optimized' },
        { label: 'Thickness', value: 'Adjustable' },
      ],
    },
    {
      category: 'Warranty & Service',
      specs: [
        { label: 'Material Warranty', value: '15-20 years' },
        { label: 'Climate Support', value: 'Regional teams' },
        { label: 'Performance Assurance', value: 'Guaranteed' },
        { label: 'Long-term Support', value: 'Lifetime access' },
      ],
    },
  ];

  const getSpecsForSystem = (systemId: string) => {
    switch (systemId) {
      case 'residential':
        return residentialSpecs;
      case 'industrial':
        return industrialSpecs;
      case 'climate':
        return climateSpecs;
      default:
        return residentialSpecs;
    }
  };

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
              Roofing Systems by Category
            </h1>
            <p className="section-subheading">
              Three engineered system categories designed for specific market demands. 
              
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Selection with Boxes */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {systemsList.map((system, idx) => (
              <motion.button
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveSystem(system.id)}
                className={`card-base text-left transition-all duration-300 cursor-pointer ${
                  activeSystem === system.id
                    ? 'ring-2 ring-copper-500 border-copper-500'
                    : 'hover:border-copper-500'
                }`}
              >
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{system.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{system.subtitle}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {system.description}
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-copper-500 font-semibold text-sm">
                    {activeSystem === system.id ? '▸ View Details' : '→ Click to Explore'}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected System Details */}
      <section className="py-20 px-6 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeSystem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* System Overview */}
            <div className="mb-16">
              <div className="text-4xl mb-3">{activeSystemData.icon}</div>
              <h2 className="section-heading mb-3">{activeSystemData.title}</h2>
              <p className="section-subheading mb-6">{activeSystemData.subtitle}</p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {activeSystemData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Key Specs */}
                <div className="card-base">
                  <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                    Key Specifications
                  </h3>
                  <ul className="space-y-3">
                    {activeSystemData.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-copper-500 mt-1 text-lg">✓</span>
                        <span className="text-slate-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warranty & Components */}
                <div className="space-y-6">
                  <div className="card-base">
                    <h3 className="text-white font-bold text-lg mb-3">Warranty</h3>
                    <p className="text-copper-500 font-semibold text-lg">
                      {activeSystemData.warranty}
                    </p>
                  </div>

                  <div className="card-base">
                    <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
                      Components Included
                    </h3>
                    <ul className="space-y-2">
                      {activeSystemData.components.map((component, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-copper-500 text-sm mt-1">→</span>
                          <span className="text-slate-300 text-sm">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="section-heading mb-8">Use Cases & Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeSystemData.useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card-base flex items-start gap-3"
                  >
                    <span className="text-copper-500 text-2xl flex-shrink-0">→</span>
                    <span className="text-slate-300">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Detailed Specifications */}
            <div>
              <h3 className="section-heading mb-8">Detailed Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getSpecsForSystem(activeSystem).map((specGroup, idx) => (
                  <SpecificationSection
                    key={idx}
                    category={specGroup.category}
                    specs={specGroup.specs}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

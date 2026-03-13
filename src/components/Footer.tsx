import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Roofing Systems', href: '#systems' },
      { label: 'Specifications', href: '#specs' },
      { label: 'Warranties', href: '#warranties' },
      { label: 'Technical Docs', href: '#docs' },
    ],
    Company: [
      { label: 'About BORGE TRADERS', href: '#about' },
      { label: 'Industries Served', href: '#industries' },
      { label: 'Global Vision', href: '#vision' },
      { label: 'Standards', href: '#standards' },
    ],
    Resources: [
      { label: 'How BORGE TRADERS Works', href: '#how-it-works' },
      { label: 'Certifications', href: '#certs' },
      { label: 'Case Studies', href: '#cases' },
      { label: 'Blog', href: '#blog' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-copper-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-white font-bold text-lg">BORGE TRADERS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              25+ years of local market expertise. Engineered roofing systems for demanding environments. Standardized. Predictable. Built to last.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-copper-500 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} BORGE TRADERS. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-slate-400 hover:text-slate-300 text-sm transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-slate-300 text-sm transition-colors">
                Terms
              </a>
              <a href="#compliance" className="text-slate-400 hover:text-slate-300 text-sm transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

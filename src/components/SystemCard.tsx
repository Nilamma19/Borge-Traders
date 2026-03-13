import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SystemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
  link: string;
}

export const SystemCard = ({
  title,
  description,
  icon,
  specs,
  link,
}: SystemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card-base flex flex-col h-full"
    >
      <div className="mb-4 text-copper-500 text-3xl">{icon}</div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-slate-400 mb-4 flex-grow">{description}</p>

      <div className="mb-6 space-y-2">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-copper-500 mt-1">✓</span>
            <span className="text-slate-300 text-sm">{spec}</span>
          </div>
        ))}
      </div>

      <Link
        to={link}
        className="btn-primary text-center"
      >
        Explore System
      </Link>
    </motion.div>
  );
};

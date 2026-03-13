import { motion } from 'framer-motion';

interface PerformanceMetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}

export const PerformanceMetric = ({
  icon,
  label,
  value,
  description,
}: PerformanceMetricProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card-base text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-copper-500/20 rounded-lg flex items-center justify-center text-copper-500 text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
      <p className="text-copper-500 text-3xl font-bold mb-2">{value}</p>
      <p className="text-slate-400 text-sm">{description}</p>
    </motion.div>
  );
};

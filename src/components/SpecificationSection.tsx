import { motion } from 'framer-motion';

interface SpecificationProps {
  category: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
}

export const SpecificationSection = ({
  category,
  specs,
}: SpecificationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-base"
    >
      <h3 className="text-white font-bold text-lg mb-4 pb-3 border-b border-slate-700">
        {category}
      </h3>
      <div className="space-y-3">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex justify-between items-start gap-4">
            <span className="text-slate-400 text-sm font-medium">{spec.label}</span>
            <span className="text-white text-sm font-semibold text-right">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

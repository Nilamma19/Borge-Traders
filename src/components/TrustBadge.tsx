import { motion } from 'framer-motion';

interface TrustBadgeProps {
  icon: string;
  label: string;
  description?: string;
}

export const TrustBadge = ({ icon, label, description }: TrustBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-copper-500 transition-colors"
    >
      <div className="text-3xl">{icon}</div>
      <h4 className="text-white font-semibold text-sm text-center">{label}</h4>
      {description && <p className="text-slate-400 text-xs text-center">{description}</p>}
    </motion.div>
  );
};

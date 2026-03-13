import { motion } from 'framer-motion';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  applications: string[];
  systemType: string;
}

export const IndustryCard = ({
  title,
  description,
  icon,
  applications,
  systemType,
}: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card-base"
    >
      <div className="text-4xl mb-4 text-copper-500">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>

      <div className="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-copper-400">System:</span> {systemType}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Key Applications
        </p>
        <ul className="space-y-1">
          {applications.map((app, idx) => (
            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
              <span className="text-copper-500">→</span>
              <span>{app}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

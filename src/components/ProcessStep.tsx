import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
}

export const ProcessStep = ({
  number,
  title,
  description,
  details,
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
      className="relative"
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-copper-500">
            <span className="text-white font-bold text-lg">{number}</span>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <p className="text-slate-400 mb-3">{description}</p>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-copper-500 text-sm mt-1">•</span>
                <span className="text-slate-400 text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

import { motion } from 'framer-motion';

const GradientText = ({ 
  children, 
  className = '',
  gradient = 'gold-blue',
  ...props 
}) => {
  const gradients = {
    'gold-blue': 'bg-gradient-to-r from-secondary-gold to-secondary-blue',
    'purple-blue': 'bg-gradient-to-r from-purple-400 to-blue-500',
    'gold-orange': 'bg-gradient-to-r from-secondary-gold to-orange-500'
  };

  return (
    <motion.span
      className={`${gradients[gradient]} bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
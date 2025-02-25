import { motion } from 'framer-motion';
import { ReactNode, Ref } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Framer Motion variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Scroll-triggered animation component
interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export const ScrollReveal = ({ children, ...props }: ScrollRevealProps) => {
  // Explicitly type ref to avoid conflicts
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>} // Type the ref correctly here
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      {...props} // Spread other props correctly
    >
      {children}
    </motion.div>
  );
};

// Animated component with hover effect
interface HoverScaleProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export const HoverScale = ({ children, ...props }: HoverScaleProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

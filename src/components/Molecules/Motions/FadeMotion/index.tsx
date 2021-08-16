import React from 'react';
import { motion } from 'framer-motion';
import { pageVariant } from '@/constants/Framers/General';

const FadeMotion: React.FC = props => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={pageVariant}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeMotion;

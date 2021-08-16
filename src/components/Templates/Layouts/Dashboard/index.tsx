import DashboardSidebar from '@/components/Organisms/Sibebars/DashboardSidebar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Container } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { pageVariant } from '@/constants/Framers/General';

interface Props {
  section: string;
  title: string;
  description: string;
}

const Dashboard: React.FC<Props> = props => {
  return (
    <>
      <Container>
        <aside>
          <DashboardSidebar section={props.section} />
        </aside>

        <motion.main
          initial="pageInitial"
          animate="pageAnimate"
          variants={pageVariant}
        >
          <header>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </header>
          {props.children}
        </motion.main>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Dashboard;

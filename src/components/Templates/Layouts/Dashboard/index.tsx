import DashboardSidebar from '@/components/Organisms/Sibebars/DashboardSidebar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Container } from './styles';
import 'react-toastify/dist/ReactToastify.css';

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
        <main>
          <header>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </header>
          {props.children}
        </main>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Dashboard;

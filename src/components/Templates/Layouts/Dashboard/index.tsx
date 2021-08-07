import DashboardSidebar from '@/components/Organisms/Sibebars/DashboardSidebar';
import React from 'react';

import { Container } from './styles';

interface Props {
  section: string;
  title: string;
  description: string;
}

const Dashboard: React.FC<Props> = props => {
  return (
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
  );
};

export default Dashboard;

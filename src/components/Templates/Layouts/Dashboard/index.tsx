import DashboardSidebar from '@/components/Organisms/Sibebars/DashboardSidebar';
import React from 'react';

import { Container } from './styles';

interface Props {
  section: string;
}

const Dashboard: React.FC<Props> = props => {
  return (
    <Container>
      <aside>
        <DashboardSidebar section={props.section}/>
      </aside>
      <main>{props.children}</main>
    </Container>
  );
};

export default Dashboard;

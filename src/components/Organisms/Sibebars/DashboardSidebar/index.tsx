import React from 'react';
import Link from 'next/link';

import { Container, Item } from './styles';
import { sidebarData } from 'constants/Sidebar';

interface Props {
  section: string;
}

const DashboardSidebar: React.FC<Props> = props => {
  return (
    <Container>
      <ul>
        {sidebarData.map(item => (
          <Item active={item.uid === props.section}>
            <b />
            <b />
            <Link href={`/${item.uid}`}>
              <a target="">
                <i>{item.icon}</i>
                <span>{item.title}</span>
              </a>
            </Link>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default DashboardSidebar;

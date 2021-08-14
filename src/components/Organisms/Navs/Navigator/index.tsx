import React from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Container } from './styles';

interface Props {
  section: string;
  handleSection(param: string): void;
  sections: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[];
}

const Navigator: React.FC<Props> = props => {
  return (
    <Container
      value={props.section}
      onChange={(e, value) => props.handleSection(value)}
      showLabels
    >
      {props.sections.map(item => (
        <BottomNavigationAction
          label={item.label}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </Container>
  );
};

export default Navigator;

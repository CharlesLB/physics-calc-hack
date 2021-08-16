import styled from 'styled-components';
import { BottomNavigation } from '@material-ui/core';

export const Container = styled(BottomNavigation)`
  width: 100%;
  height: 100%;
  background-color: #eee !important;
  border-radius: var(--border-radius);
  height: 5rem !important;

  .MuiBottomNavigation-root {
    width: 100%;
    border-radius: var(--border-radius);
    display: flex !important;
    justify-content: space-between !important;
  }

  .MuiBottomNavigationAction-root {
    width: 100%;
    max-width: 100%;
  }
`;

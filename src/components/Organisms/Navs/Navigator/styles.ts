import styled from 'styled-components';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

export const Container = styled(BottomNavigation)`
  margin-top: 1rem;
  border-radius: var(--border-radius);
  
  .MuiBottomNavigation-root {
    width: 100%;
    background-color: #eee;
    /* display: flex;
    justify-content: space-between; */
  }
`;

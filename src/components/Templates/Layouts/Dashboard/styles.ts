import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1440px;

  > aside {
    width: auto;
    height: 100%;
  }

  > main {
    width: 100%;
    height: 100%;
    margin-left: 3rem;

    > header{
      width: 100%;

      > h1{
        font-size: 1.7rem;
        font-weight: 600;
        color: #333;
      }
    }
  }
`;
import styled from 'styled-components';

export const FormSection = styled.form`
  border-radius: var(--border-radius);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  > footer {
    margin-top: 1rem;
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    width: 100% !important;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const FormResult = styled.div`
  border-radius: var(--border-radius);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #eee;
`;

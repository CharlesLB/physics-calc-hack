import React from 'react';

import { Container } from './styles';

const FormResult: React.FC = (props) => { 
  return <Container >
    <header>
      <h3>Resultados</h3>
    </header>
    <main>
      {props.children}
    </main>
  </Container>;
}

export default FormResult;
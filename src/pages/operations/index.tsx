import { FormGroup, FormSection } from '@/components/Atoms/Layouts/Form/styles';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { buttonTheme, inputTheme } from '@/utils/Config';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const [x, setX] = useState<number | null>(null);
  const [dx, setDx] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [dy, setDy] = useState<number | null>(null);

  const submit = (): void => {
    
  }

  return (
    <Dashboard
      section="operations"
      title="Operações e suas incertezas"
      description="Digite os valores e as incertezas para obter o resultado desejado:"
    >
      <FormSection>
        <FormGroup>
          <TextField
            value={x}
            onChange={e => setX(parseFloat(e.target.value))}
            variant={inputTheme}
            margin="dense"
            type="number"
            label="Valor de X"
          />
          <TextField
            value={dx}
            onChange={e => setDx(parseFloat(e.target.value))}
            variant={inputTheme}
            margin="dense"
            type="number"
            label="Valor de Dx"
          />
        </FormGroup>
        <FormGroup>
          <TextField
            value={y}
            onChange={e => setY(parseFloat(e.target.value))}
            variant={inputTheme}
            margin="dense"
            type="number"
            label="Valor de Y"
          />
          <TextField
            value={dy}
            onChange={e => setDy(parseFloat(e.target.value))}
            variant={inputTheme}
            margin="dense"
            type="number"
            label="Valor de Dy"
          />
        </FormGroup>
        <footer>
          <Button color='primary' variant={buttonTheme}>
            Calcular
          </Button>
        </footer>
      </FormSection>
    </Dashboard>
  );
};

export default Home;

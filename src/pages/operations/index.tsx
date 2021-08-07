import {
  FormGroup,
  FormResult,
  FormSection
} from '@/components/Atoms/Layouts/Form/styles';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { buttonTheme, inputTheme } from '@/utils/Config';
import { getResult } from '@/helpers/Operations';
import { toast } from 'react-toastify';
import { copy } from '@/utils/General';

const Home: React.FC = () => {
  const [x, setX] = useState<number | null>(null);
  const [dx, setDx] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [dy, setDy] = useState<number | null>(null);
  const [results, setResults] = useState<OperatorsResult>(null);

  const submit = (): void => {
    if (!x || !dx || !y || !dx) {
      toast('Preencha todos os campos', {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'error',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      return;
    }

    const sum = getResult(x, dx, y, dy, '+');
    const sub = getResult(x, dx, y, dy, '-');
    const product = getResult(x, dx, y, dy, '*');
    const div = getResult(x, dx, y, dy, '/');

    setResults({
      sum,
      sub,
      product,
      div
    });
  };

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
          <Button
            fullWidth
            onClick={() => submit()}
            color="primary"
            variant={buttonTheme}
          >
            Calcular
          </Button>
        </footer>
      </FormSection>

      {results && (
        <FormResult>
          <FormGroup>
            <TextField
              onClick={() => copy(results.sum)}
              disabled
              value={results?.sum}
              variant={inputTheme}
              margin="dense"
              label="Resultado da soma"
            />
            <TextField
              onClick={() => copy(results.sub)}
              value={results?.sub}
              disabled
              variant={inputTheme}
              margin="dense"
              label="Resultado da Subtração"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              onClick={() => copy(results.product)}
              disabled
              value={results?.product}
              variant={inputTheme}
              margin="dense"
              label="Resultado do Produto"
            />
            <TextField
              onClick={() => copy(results.div)}
              disabled
              value={results?.div}
              variant={inputTheme}
              margin="dense"
              label="Resultado da Divisão"
            />
          </FormGroup>
        </FormResult>
      )}
    </Dashboard>
  );
};

export default Home;

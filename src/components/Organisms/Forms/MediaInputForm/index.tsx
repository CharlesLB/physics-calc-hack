import React from 'react';

import { FormGroup, FormSection } from '@/components/Atoms/Layouts/Form/styles';
import FormResult from '@/components/Molecules/Containers/FormResult';
import {
  getMedia,
  getPopulationDeviation,
  getMediaDeviation,
  getSampleDeviation
} from '@/helpers/Media';
import { buttonTheme, inputTheme } from '@/utils/Config';
import { copy } from '@/utils/General';
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { toast } from 'react-toastify';
import FadeMotion from '@/components/Molecules/Motions/FadeMotion';

const MediaInputForm: React.FC = () => {
  const [values, setValues] = useState<number[]>([]);
  const [results, setResults] = useState<MediaResult>(null);

  const changeValue = (value: number, index: number): void => {
    if (!value) {
      return;
    }

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const submit = (): void => {
    if (values.length < 2) {
      toast('Preencha pelo menos 2 campos', {
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

    const media = getMedia(values);
    const populationDeviation = getPopulationDeviation(values);
    const sampleDeviation = getSampleDeviation(values);
    const mediaDeviation = getMediaDeviation(values);

    setResults({
      media,
      populationDeviation,
      sampleDeviation,
      mediaDeviation
    });
  };

  return (
    <FormSection>
      {values.map((value, index) => (
        <TextField
          onChange={e => {
            changeValue(parseFloat(e.target.value), index);
          }}
          type="number"
          value={value}
          variant={inputTheme}
          margin="dense"
          label={`Valor ${index + 1}`}
        />
      ))}

      <TextField
        onBlur={e => {
          changeValue(parseFloat(e.target.value), values.length);
          e.target.value = null;
        }}
        variant={inputTheme}
        margin="dense"
        type="number"
        label={`Valor ${values.length + 1}`}
      />

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

      {results && (
        <FadeMotion>
          <FormResult>
            <FormGroup>
              <TextField
                onClick={() => copy(results.media.toString().replace('.', ','))}
                disabled
                value={results.media.toString().replace('.', ',')}
                variant={inputTheme}
                margin="dense"
                label="Media"
              />
              <TextField
                onClick={() =>
                  copy(results.populationDeviation.toString().replace('.', ','))
                }
                value={results.populationDeviation.toString().replace('.', ',')}
                disabled
                variant={inputTheme}
                margin="dense"
                label="Desvio padr??o da Popula????o"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                onClick={() =>
                  copy(results.sampleDeviation.toString().replace('.', ','))
                }
                disabled
                value={results?.sampleDeviation
                  .toFixed(8)
                  .toString()
                  .replace('.', ',')}
                variant={inputTheme}
                margin="dense"
                label="Desvio Padr??o da Amostra (8 casas decimais)"
              />
              <TextField
                onClick={() =>
                  copy(results.mediaDeviation.toString().replace('.', ','))
                }
                disabled
                value={results.mediaDeviation.toString().replace('.', ',')}
                variant={inputTheme}
                margin="dense"
                label="Desvio padr??o da M??dia"
              />
            </FormGroup>
          </FormResult>
        </FadeMotion>
      )}
    </FormSection>
  );
};

export default MediaInputForm;

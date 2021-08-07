import OperatorsForm from '@/components/Organisms/Forms/OperatorsForm';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import React from 'react';

const Operations: React.FC = () => {
  return (
    <Dashboard
      section="operations"
      title="Operações e suas incertezas"
      description="Digite os valores e as incertezas para obter o resultado desejado:"
    >
      <OperatorsForm />
    </Dashboard>
  );
};

export default Operations;

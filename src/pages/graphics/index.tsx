import Dashboard from '@/components/Templates/Layouts/Dashboard';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Dashboard
      section="graphics"
      title="Operações e suas incertezas"
      description="Coloque os dados para auxiliar a montagem dos gráficos"
    ></Dashboard>
  );
};

export default Home;

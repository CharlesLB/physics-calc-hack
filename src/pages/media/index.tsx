import React from 'react';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import MediaInputForm from '@/components/Organisms/Forms/MediaInputForm';

import { useState } from 'react';
import Navigator from '@/components/Organisms/Navs/Navigator';
import { MdInput } from 'react-icons/md';
import { BsCardText } from 'react-icons/bs';

const Media: React.FC = () => {
  const [section, setSection] = useState<string>();

  return (
    <Dashboard
      section="media"
      title="Cálculo das médias"
      description="Coloque os valores e calcule as médias"
    >
      <Navigator
        section={section}
        handleSection={setSection}
        sections={[
          {
            label: 'Via Inputs',
            value: 'inputs',
            icon: <MdInput size='24' />
          },
          {
            label: 'Via texto',
            value: 'textarea',
            icon: <BsCardText size='24'/>
          }
        ]}
      />
      <MediaInputForm />
    </Dashboard>
  );
};

export default Media;

import { FaCalculator, FaTable } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import React from 'react';

export const sidebarData: SidebarItemProps[] = [
  {
    uid: 'operations',
    title: 'Operações',
    icon: <FaCalculator size={25} />
  },
  {
    uid: 'graphics',
    title: 'Gráficos',
    icon: <BsGraphUp size={25} />
  },
  {
    uid: 'media',
    title: 'Cálculo da Média',
    icon: <FaTable size={25} />
  }
];

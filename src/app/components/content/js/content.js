import React from 'react';
import Scope from '../components/scope/js/scope';
import Maps from '../components/map/js/map';
import WorkingHours from '../components/hours/js/hours';

const Content = () => {
  return (
    <main className={'main'}>
      <Scope></Scope>
      <WorkingHours></WorkingHours>
      <Maps></Maps>
    </main>
  );
};

export default Content;

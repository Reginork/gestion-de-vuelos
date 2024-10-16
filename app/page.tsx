import React from 'react';
import './styles/global.css';
import AirplaneForm from './components/RegisterAirplane';
import ConsultAirplane from './components/ConsultAirplane';

const app = () => {
  return (
    <div>
      <AirplaneForm />
      <ConsultAirplane />
    </div>
  );
};

export default app;

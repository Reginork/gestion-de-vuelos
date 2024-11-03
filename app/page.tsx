import React from 'react';
import './styles/global.css';
import AirplaneForm from './components/RegistrarAviones';
import ConsultAirplane from './components/ConsultarAviones';

const app = () => {
  return (
    <div>
      <AirplaneForm />
      <ConsultAirplane />
    </div>
  );
};

export default app;

'use client';

import React, { useState } from 'react';
import '../styles/global.css'; 

const RegisterAirplane: React.FC = () => {
  const [airplaneType, setAirplaneType] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [seatDistribution, setSeatDistribution] = useState('');
  const [airplaneId, setAirplaneId] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      airplaneType,
      seatCapacity,
      seatDistribution,
      airplaneId,
    });
  };

  return (
    <div className="register-airplane-container">
      <h1 className="title">Registro de aviones</h1>
      <p className="subtitle">Registre los aviones ingresados a la compañía</p>
      <form className="register-airplane-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="airplaneType">Tipo de avión<span className="required">*</span></label>
          <input
            type="text"
            id="airplaneType"
            placeholder="Ingrese el tipo de avión"
            value={airplaneType}
            onChange={(e) => setAirplaneType(e.target.value)}
            required
          />
          <small>Ejemplo: Boeing 737, Airbus A320</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="seatCapacity">Capacidad de asientos<span className="required">*</span></label>
          <input
            type="number"
            id="seatCapacity"
            placeholder="Ingrese la capacidad de asientos"
            value={seatCapacity}
            onChange={(e) => setSeatCapacity(e.target.value)}
            required
          />
          <small>Número entero</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="seatDistribution">Distribución de asientos<span className="required">*</span></label>
          <div className="seat-options">
            <button type="button" className={`seat-option ${seatDistribution === '2-4-2' ? 'selected' : ''}`} onClick={() => setSeatDistribution('2-4-2')}>2-4-2</button>
            <button type="button" className={`seat-option ${seatDistribution === '3-3-3' ? 'selected' : ''}`} onClick={() => setSeatDistribution('3-3-3')}>3-3-3</button>
            <button type="button" className={`seat-option ${seatDistribution === '2-2-2' ? 'selected' : ''}`} onClick={() => setSeatDistribution('2-2-2')}>2-2-2</button>
          </div>
          <small>Seleccione una opción de distribución</small>
        </div>

        <div className="form-group">
          <label htmlFor="airplaneId">ID</label>
          <input
            type="text"
            id="airplaneId"
            placeholder="Id de avión"
            value={airplaneId}
            onChange={(e) => setAirplaneId(e.target.value)}
          />
          <small>Ejemplo: N12345 o XA-ABC</small>
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterAirplane;

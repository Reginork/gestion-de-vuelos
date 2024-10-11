'use client';

import React, { useState } from 'react';
import '../styles/global.css'; 

const ConsultAirplane: React.FC = () => {
  const [maxSeats, setMaxSeats] = useState('');
  const [seatDistribution, setSeatDistribution] = useState('');
  const [airplaneId, setAirplaneId] = useState('');
  const [airplaneType, setAirplaneType] = useState('');
  const [status, setStatus] = useState(''); // Estado del avión

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      maxSeats,
      seatDistribution,
      airplaneId,
      airplaneType,
      status,
    });
  };

  return (
    <div className="consult-airplane-container">
      <h1 className="title">Consultar Aviones</h1>
      <p className="subtitle">Registre uno de los siguientes datos para la consulta</p>
      <form className="consult-airplane-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="maxSeats">Cantidad Máxima de Asientos</label>
          <input
            type="number"
            id="maxSeats"
            placeholder="Ingrese la cantidad máxima de asientos..."
            value={maxSeats}
            onChange={(e) => setMaxSeats(e.target.value)}
          />
          <small>(Ejemplo: 300)</small>
        </div>

        <div className="form-group">
          <label htmlFor="seatDistribution">Distribución de Asientos</label>
          <input
            type="text"
            id="seatDistribution"
            placeholder="Ingrese la distribución de asientos"
            value={seatDistribution}
            onChange={(e) => setSeatDistribution(e.target.value)}
          />
          <small>(Ejemplo: 3-3-3)</small>
        </div>

        <div className="form-group">
          <label htmlFor="airplaneId">Id Aeronave</label>
          <input
            type="text"
            id="airplaneId"
            placeholder="Ingrese el Id de la aeronave"
            value={airplaneId}
            onChange={(e) => setAirplaneId(e.target.value)}
          />
          <small>(Ejemplo: AA123)</small>
        </div>

        <div className="form-group">
          <label htmlFor="airplaneType">Tipo de Avión</label>
          <input
            type="text"
            id="airplaneType"
            placeholder="Ingrese el tipo de avión"
            value={airplaneType}
            onChange={(e) => setAirplaneType(e.target.value)}
          />
          <small>(Ejemplo: Boeing 747)</small>
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Seleccione el estado del avión</option>
            <option value="Activo">Activo</option>
            <option value="En mantenimiento">En mantenimiento</option>
            <option value="Inactivo o baja">Inactivo o baja</option>
          </select>
        </div>

        <div className="form-buttons">
          <button type="button" className="clear-button" onClick={() => {
            setMaxSeats('');
            setSeatDistribution('');
            setAirplaneId('');
            setAirplaneType('');
            setStatus('');
          }}>Limpiar</button>
          <button type="submit" className="search-button">Buscar</button>
        </div>
      </form>
    </div>
  );
};

export default ConsultAirplane;

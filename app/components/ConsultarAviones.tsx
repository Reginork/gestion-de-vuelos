'use client';

import React, { useState } from 'react';
import '../styles/global.css';

const ConsultarAviones: React.FC = () => {
  const [maxSeats, setMaxSeats] = useState('');
  const [seatDistribution, setSeatDistribution] = useState('');
  const [airplaneId, setAirplaneId] = useState('');
  const [airplaneType, setAirplaneType] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false); // Estado para el modal de aviso

  // Funciones de validación
  const validateMaxSeats = (value: string) => {
    const numberValue = Number(value);
    if (!value || isNaN(numberValue) || numberValue < 50 || numberValue > 500) {
      return 'La cantidad máxima de asientos debe ser un número entre 50 y 500';
    }
    return '';
  };

  const validateSeatDistribution = (value: string) => {
    const seatDistPattern = /^[0-9]+(-[0-9]+)*$/; // Valida formato tipo 3-3-3
    if (!value || !seatDistPattern.test(value)) {
      return 'La distribución de asientos debe tener el formato correcto (Ejemplo: 3-3-3)';
    }
    return '';
  };

  const validateAirplaneId = (value: string) => {
    if (!value || value.length < 5 || value.length > 10) {
      return 'El ID de la aeronave debe tener entre 5 y 10 caracteres';
    }
    return '';
  };

  const validateAirplaneType = (value: string) => {
    if (!value || value.length < 2 || value.length > 50) {
      return 'El tipo de avión debe tener entre 2 y 50 caracteres';
    }
    return '';
  };

  const validateStatus = (value: string) => {
    if (!value) {
      return 'Debe seleccionar un estado';
    }
    return '';
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Validamos los campos
    const maxSeatsError = validateMaxSeats(maxSeats);
    const seatDistributionError = validateSeatDistribution(seatDistribution);
    const airplaneIdError = validateAirplaneId(airplaneId);
    const airplaneTypeError = validateAirplaneType(airplaneType);
    const statusError = validateStatus(status);

    // Si hay errores, actualizamos el estado de errores y mostramos el modal de aviso
    if (maxSeatsError || seatDistributionError || airplaneIdError || airplaneTypeError || statusError) {
      setErrors({
        maxSeats: maxSeatsError,
        seatDistribution: seatDistributionError,
        airplaneId: airplaneIdError,
        airplaneType: airplaneTypeError,
        status: statusError,
      });
      setShowWarningModal(true); // Mostrar modal de aviso
      return;
    }

    // Si no hay errores, procesamos la búsqueda
    console.log({
      maxSeats,
      seatDistribution,
      airplaneId,
      airplaneType,
      status,
    });

    // Mostrar modal de éxito
    setSuccessMessage(true);

    // Limpiamos el formulario
    setMaxSeats('');
    setSeatDistribution('');
    setAirplaneId('');
    setAirplaneType('');
    setStatus('');
    setErrors({});
  };

  return (
    <div className="consult-airplane-container">
      <h1 className="title">Consultar aviones</h1>
      <p className="subtitle">Registre uno de los siguientes datos para la consulta</p>

      {/* Modal de éxito */}
      {successMessage && (
        <div className="modal">
          <div className="modal-content">
            <h2>¡Consulta realizada con éxito!</h2>
            <p>Los datos del avión han sido encontrados.</p>
            <button className="close-modal" onClick={() => setSuccessMessage(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de aviso cuando hay campos obligatorios sin completar */}
      {showWarningModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Campos obligatorios no completados</h2>
            <p>Por favor, complete todos los campos requeridos para realizar la consulta.</p>
            <button className="close-modal" onClick={() => setShowWarningModal(false)}>
              Volver al formulario
            </button>
          </div>
        </div>
      )}

      <form className="consult-airplane-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="maxSeats">Cantidad máxima de asientos</label>
          <input
            type="number"
            id="maxSeats"
            placeholder="Ingrese la cantidad máxima de asientos..."
            value={maxSeats}
            onChange={(e) => setMaxSeats(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, maxSeats: validateMaxSeats(e.target.value) })}
          />
          {errors.maxSeats && <small className="error-message">{errors.maxSeats}</small>}
          <small>(Ejemplo: 300)</small>
        </div>

        <div className="form-group">
          <label htmlFor="seatDistribution">Distribución de asientos</label>
          <input
            type="text"
            id="seatDistribution"
            placeholder="Ingrese la distribución de asientos"
            value={seatDistribution}
            onChange={(e) => setSeatDistribution(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, seatDistribution: validateSeatDistribution(e.target.value) })}
          />
          {errors.seatDistribution && <small className="error-message">{errors.seatDistribution}</small>}
          <small>(Ejemplo: 3-3-3)</small>
        </div>

        <div className="form-group">
          <label htmlFor="airplaneId">Id aeronave</label>
          <input
            type="text"
            id="airplaneId"
            placeholder="Ingrese el Id de la aeronave"
            value={airplaneId}
            onChange={(e) => setAirplaneId(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, airplaneId: validateAirplaneId(e.target.value) })}
          />
          {errors.airplaneId && <small className="error-message">{errors.airplaneId}</small>}
          <small>(Ejemplo: AA123)</small>
        </div>

        <div className="form-group">
          <label htmlFor="airplaneType">Tipo de avión</label>
          <input
            type="text"
            id="airplaneType"
            placeholder="Ingrese el tipo de avión"
            value={airplaneType}
            onChange={(e) => setAirplaneType(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, airplaneType: validateAirplaneType(e.target.value) })}
          />
          {errors.airplaneType && <small className="error-message">{errors.airplaneType}</small>}
          <small>(Ejemplo: Boeing 747)</small>
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, status: validateStatus(e.target.value) })}
          >
            <option value="">Seleccione el estado del avión</option>
            <option value="Activo">Activo</option>
            <option value="En mantenimiento">En mantenimiento</option>
            <option value="Inactivo o baja">Inactivo o baja</option>
          </select>
          {errors.status && <small className="error-message">{errors.status}</small>}
        </div>

        <div className="form-buttons">
          <button type="button" className="clear-button" onClick={() => {
            setMaxSeats('');
            setSeatDistribution('');
            setAirplaneId('');
            setAirplaneType('');
            setStatus('');
            setErrors({});
          }}>Limpiar</button>
          <button type="submit" className="search-button">Buscar</button>
        </div>
      </form>
    </div>
  );
};

export default ConsultarAviones;
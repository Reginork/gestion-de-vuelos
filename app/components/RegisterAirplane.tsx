'use client';

import React, { useState } from 'react';
import DOMPurify from 'dompurify'; // Para prevenir ataques XSS
import '../styles/global.css';

const RegisterAirplane: React.FC = () => {
  const [airplaneType, setAirplaneType] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [seatDistribution, setSeatDistribution] = useState('');
  const [airplaneId, setAirplaneId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false); // Estado para el modal de aviso

  // Funciones de validación individuales para cada campo
  const validateAirplaneType = (value: string) => {
    if (!value || value.length < 2 || value.length > 50) {
      return 'El tipo de avión debe tener entre 2 y 50 caracteres';
    }
    return '';
  };

  const validateSeatCapacity = (value: string) => {
    const numberValue = Number(value);
    if (!value || isNaN(numberValue) || numberValue < 50 || numberValue > 800) {
      return 'La capacidad debe ser un número entre 50 y 800';
    }
    return '';
  };

  const validateSeatDistribution = (value: string) => {
    if (!['2-4-2', '3-3-3', '2-2-2'].includes(value)) {
      return 'Seleccione una distribución de asientos válida';
    }
    return '';
  };

  const validateAirplaneId = (value: string) => {
    if (!value || value.length < 5 || value.length > 10) {
      return 'El ID de avión debe tener entre 5 y 10 caracteres';
    }
    return '';
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos los campos al enviar el formulario
    const airplaneTypeError = validateAirplaneType(airplaneType);
    const seatCapacityError = validateSeatCapacity(seatCapacity);
    const seatDistributionError = validateSeatDistribution(seatDistribution);
    const airplaneIdError = validateAirplaneId(airplaneId);

    // Si hay errores, actualizamos el estado de errores y mostramos el modal de aviso
    if (airplaneTypeError || seatCapacityError || seatDistributionError || airplaneIdError) {
      setErrors({
        airplaneType: airplaneTypeError,
        seatCapacity: seatCapacityError,
        seatDistribution: seatDistributionError,
        airplaneId: airplaneIdError,
      });
      setShowWarningModal(true); // Mostrar modal de aviso
      return;
    }

    // Si no hay errores, procesamos el formulario
    const sanitizedAirplaneType = DOMPurify.sanitize(airplaneType);
    const sanitizedSeatCapacity = DOMPurify.sanitize(seatCapacity);
    const sanitizedSeatDistribution = DOMPurify.sanitize(seatDistribution);
    const sanitizedAirplaneId = DOMPurify.sanitize(airplaneId);

    console.log({
      airplaneType: sanitizedAirplaneType,
      seatCapacity: sanitizedSeatCapacity,
      seatDistribution: sanitizedSeatDistribution,
      airplaneId: sanitizedAirplaneId,
    });

    // Mostrar modal de éxito
    setSuccessMessage(true);

    // Resetear formulario
    setAirplaneType('');
    setSeatCapacity('');
    setSeatDistribution('');
    setAirplaneId('');
    setErrors({});
  };

  return (
    <div className="register-airplane-container">
      <h1 className="title">Registro de aviones</h1>

      {/* Modal de éxito */}
      {successMessage && (
        <div className="modal">
          <div className="modal-content">
            <h2>¡Registro exitoso!</h2>
            <p>El avión ha sido registrado correctamente.</p>
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
            <p>Por favor, complete todos los campos requeridos antes de registrar el avión.</p>
            <button className="close-modal" onClick={() => setShowWarningModal(false)}>
              Volver al formulario
            </button>
          </div>
        </div>
      )}

      <form className="register-airplane-form" onSubmit={handleRegister} noValidate>
        <div className="form-group">
          <label htmlFor="airplaneType">Tipo de avión<span className="required">*</span></label>
          <input
            type="text"
            id="airplaneType"
            placeholder="Ingrese el tipo de avión"
            value={airplaneType}
            onChange={(e) => setAirplaneType(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, airplaneType: validateAirplaneType(e.target.value) })}
            required
          />
          {errors.airplaneType && <small className="error-message">{errors.airplaneType}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="seatCapacity">Capacidad de asientos<span className="required">*</span></label>
          <input
            type="number"
            id="seatCapacity"
            placeholder="Ingrese la capacidad de asientos"
            value={seatCapacity}
            onChange={(e) => setSeatCapacity(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, seatCapacity: validateSeatCapacity(e.target.value) })}
            required
          />
          {errors.seatCapacity && <small className="error-message">{errors.seatCapacity}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="seatDistribution">Distribución de asientos<span className="required">*</span></label>
          <div className="seat-options">
            <button
              type="button"
              className={`seat-option ${seatDistribution === '2-4-2' ? 'selected' : ''}`}
              onClick={() => {
                setSeatDistribution('2-4-2');
                setErrors({ ...errors, seatDistribution: validateSeatDistribution('2-4-2') });
              }}
            >
              2-4-2
            </button>
            <button
              type="button"
              className={`seat-option ${seatDistribution === '3-3-3' ? 'selected' : ''}`}
              onClick={() => {
                setSeatDistribution('3-3-3');
                setErrors({ ...errors, seatDistribution: validateSeatDistribution('3-3-3') });
              }}
            >
              3-3-3
            </button>
            <button
              type="button"
              className={`seat-option ${seatDistribution === '2-2-2' ? 'selected' : ''}`}
              onClick={() => {
                setSeatDistribution('2-2-2');
                setErrors({ ...errors, seatDistribution: validateSeatDistribution('2-2-2') });
              }}
            >
              2-2-2
            </button>
          </div>
          {errors.seatDistribution && <small className="error-message">{errors.seatDistribution}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="airplaneId">ID de avión</label>
          <input
            type="text"
            id="airplaneId"
            placeholder="Ingrese el ID del avión"
            value={airplaneId}
            onChange={(e) => setAirplaneId(e.target.value)}
            onBlur={(e) => setErrors({ ...errors, airplaneId: validateAirplaneId(e.target.value) })}
          />
          {errors.airplaneId && <small className="error-message">{errors.airplaneId}</small>}
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterAirplane;

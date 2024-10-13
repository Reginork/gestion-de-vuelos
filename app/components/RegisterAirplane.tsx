'use client';

import React, { useState } from 'react';
import '../styles/global.css';

const RegisterAirplane: React.FC = () => {
  const [airplaneType, setAirplaneType] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [seatDistribution, setSeatDistribution] = useState('');
  const [airplaneId, setAirplaneId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    const fieldsMissing: string[] = [];

    // Validación de campos
    if (!airplaneType) {
      newErrors.airplaneType = 'El tipo de avión es obligatorio';
      fieldsMissing.push('Tipo de avión');
    }
    if (!seatCapacity) {
      newErrors.seatCapacity = 'La capacidad de asientos es obligatoria';
      fieldsMissing.push('Capacidad de asientos');
    }
    if (!seatDistribution) {
      newErrors.seatDistribution = 'La distribución de asientos es obligatoria';
      fieldsMissing.push('Distribución de asientos');
    }

    // Si hay errores, mostrar en la ventana emergente
    if (fieldsMissing.length > 0) {
      setMissingFields(fieldsMissing); // Establece los campos faltantes
      setShowError(true); // Mostrar ventana emergente de error
      setErrors(newErrors); // Actualiza los errores
      return;
    }

    // Si todos los campos están llenos, aquí puedes realizar el registro
    console.log({
      airplaneType,
      seatCapacity,
      seatDistribution,
      airplaneId,
    });

    // Mostrar ventana de registro exitoso
    setShowSuccess(true);
    
    // Reiniciar el formulario después de un registro exitoso
    resetForm();
  };

  const resetForm = () => {
    setAirplaneType('');
    setSeatCapacity('');
    setSeatDistribution('');
    setAirplaneId('');
    setErrors({}); // Limpia los errores
  };

  const handleCloseErrorModal = () => {
    setShowError(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccess(false);
  };

  return (
    <div className="register-airplane-container">
      <h1 className="title">Registro de aviones</h1>
      <p className="subtitle">Registre los aviones ingresados a la compañía</p>
      <form className="register-airplane-form" onSubmit={handleRegister} noValidate>
        <div className="form-group">
          <label htmlFor="airplaneType">Tipo de avión<span className="required">*</span></label>
          <input
            type="text"
            id="airplaneType"
            placeholder="Ingrese el tipo de avión"
            value={airplaneType}
            onChange={(e) => {
              setAirplaneType(e.target.value);
              setErrors({ ...errors, airplaneType: '' }); // Limpia el error al escribir
            }}
            required
          />
          {errors.airplaneType && <small className="error-message">{errors.airplaneType}</small>}
          <small>Ejemplo: Boeing 737, Airbus A320</small>
        </div>

        <div className="form-group">
          <label htmlFor="seatCapacity">Capacidad de asientos<span className="required">*</span></label>
          <input
            type="number"
            id="seatCapacity"
            placeholder="Ingrese la capacidad de asientos"
            value={seatCapacity}
            onChange={(e) => {
              setSeatCapacity(e.target.value);
              setErrors({ ...errors, seatCapacity: '' }); // Limpia el error al escribir
            }}
            required
          />
          {errors.seatCapacity && <small className="error-message">{errors.seatCapacity}</small>}
          <small>Número entero</small>
        </div>

        <div className="form-group">
          <label htmlFor="seatDistribution">Distribución de asientos<span className="required">*</span></label>
          <div className="seat-options">
            <button type="button" className={`seat-option ${seatDistribution === '2-4-2' ? 'selected' : ''}`} onClick={() => {
              setSeatDistribution('2-4-2');
              setErrors({ ...errors, seatDistribution: '' }); // Limpia el error al seleccionar
            }}>2-4-2</button>
            <button type="button" className={`seat-option ${seatDistribution === '3-3-3' ? 'selected' : ''}`} onClick={() => {
              setSeatDistribution('3-3-3');
              setErrors({ ...errors, seatDistribution: '' }); 
            }}>3-3-3</button>
            <button type="button" className={`seat-option ${seatDistribution === '2-2-2' ? 'selected' : ''}`} onClick={() => {
              setSeatDistribution('2-2-2');
              setErrors({ ...errors, seatDistribution: '' }); 
            }}>2-2-2</button>
          </div>
          {errors.seatDistribution && <small className="error-message">{errors.seatDistribution}</small>}
          <small>Seleccione una opción de distribución</small>
        </div>

        <div className="form-group">
          <label htmlFor="airplaneId">ID</label>
          <input
            type="text"
            id="airplaneId"
            placeholder="Id de avión"
            value={airplaneId}
            onChange={(e) => {
              setAirplaneId(e.target.value);
            }}
          />
          <small>Ejemplo: N12345 o XA-ABC</small>
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>

      {/* Ventana emergente de error */}
      {showError && (
        <div className="modal">
          <div className="modal-content">
            <h2>Registro de aviones</h2>
            <p>Campos obligatorios no completados:</p>
            <div className="error">
              <span>❗</span> Campos faltantes: {missingFields.join(', ')}
            </div>
            <div className="buttons">
              <button onClick={handleCloseErrorModal}>Cancelar</button>
              <button onClick={handleCloseErrorModal}>Volver al Formulario</button>
            </div>
          </div>
        </div>
      )}

      {/* Ventana emergente de éxito */}
      {showSuccess && (
        <div className="modal">
          <div className="modal-content">
            <h2>Registro de aviones</h2>
            <p>El registro se realizó con exito.</p>
            <div className="buttons">
              <button onClick={handleCloseSuccessModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterAirplane;

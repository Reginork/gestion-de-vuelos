'use client';
import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/header.css';

const ConsultarVuelos = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    ciudadOrigen: '',
    numeroVuelo: '',
    ciudadDestino: '',
    tipoAvion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'ciudadOrigen':
        if (!value) {
          errors[name] = 'La ciudad de origen es obligatoria.';
        } else if (!/^[A-Z]{3}$/.test(value)) {
          errors[name] = 'Debe ser un código de ciudad válido (Ejemplo: MDE).';
        } else {
          delete errors[name];
        }
        break;
      case 'numeroVuelo':
        if (!value) {
          errors[name] = 'El número de vuelo es obligatorio.';
        } else if (!/^SA\d{4}$/.test(value)) {
          errors[name] = 'Debe ser un código de vuelo válido (Ejemplo: SA1234).';
        } else {
          delete errors[name];
        }
        break;
      case 'ciudadDestino':
        if (!value) {
          errors[name] = 'La ciudad de destino es obligatoria.';
        } else if (!/^[A-Z]{3}$/.test(value)) {
          errors[name] = 'Debe ser un código de ciudad válido (Ejemplo: BOG).';
        } else {
          delete errors[name];
        }
        break;
      case 'tipoAvion':
        if (!value) {
          errors[name] = 'El tipo de avión es obligatorio.';
        } else if (value.length < 3) {
          errors[name] = 'Debe ser un nombre válido (mínimo 3 caracteres).';
        } else {
          delete errors[name];
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleLimpiar = () => {
    setFormValues({
      ciudadOrigen: '',
      numeroVuelo: '',
      ciudadDestino: '',
      tipoAvion: '',
    });
    setFormErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(formErrors).length > 0 || Object.values(formValues).some((value) => !value)) {
      alert('Por favor, corrija los errores antes de continuar.');
      return;
    }

    alert('Búsqueda realizada correctamente.');
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <button className="menu-button">☰</button>
        <div className="logo-container">
          <img src="/img/logo.png" alt="Logo" className="logo" />
          <h1 className="title">Singapur</h1>
        </div>
        <img src="/img/profile.png" alt="Profile" className="profile-icon" />
      </header>

      <div className="form-consult-flights">
        <h1 className="title">Consultar vuelos</h1>
        <p className="text-center text-gray-600 mb-8">
          Registre uno de los siguientes datos para la consulta
        </p>

        <form id="form-consult-flights" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Ciudad de origen</label>
            <input
              type="text"
              name="ciudadOrigen"
              value={formValues.ciudadOrigen}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full p-3 border ${
                formErrors.ciudadOrigen ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingrese código ciudad origen"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: MDE)</p>
            {formErrors.ciudadOrigen && <p className="text-red-500 text-sm mt-1">{formErrors.ciudadOrigen}</p>}
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Número de vuelo</label>
            <input
              type="text"
              name="numeroVuelo"
              value={formValues.numeroVuelo}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full p-3 border ${
                formErrors.numeroVuelo ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingrese código de vuelo"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: SA1234)</p>
            {formErrors.numeroVuelo && <p className="text-red-500 text-sm mt-1">{formErrors.numeroVuelo}</p>}
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Ciudad de destino</label>
            <input
              type="text"
              name="ciudadDestino"
              value={formValues.ciudadDestino}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full p-3 border ${
                formErrors.ciudadDestino ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingrese código ciudad destino"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: BOG)</p>
            {formErrors.ciudadDestino && <p className="text-red-500 text-sm mt-1">{formErrors.ciudadDestino}</p>}
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Tipo de avión</label>
            <input
              type="text"
              name="tipoAvion"
              value={formValues.tipoAvion}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full p-3 border ${
                formErrors.tipoAvion ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Ingrese el tipo de avión"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: Boeing 747)</p>
            {formErrors.tipoAvion && <p className="text-red-500 text-sm mt-1">{formErrors.tipoAvion}</p>}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleLimpiar}
              className="limpiar-button"
            >
              Limpiar
            </button>
            <button
              type="submit"
              className="buscar-button"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultarVuelos;

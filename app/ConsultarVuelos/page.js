'use client';
import React from 'react';
import '../styles/global.css';
import '../styles/header.css';

const ConsultarVuelos = () => {
  const handleLimpiar = () => {
    document.getElementById('form-consult-flights').reset();
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

        <form id="form-consult-flights" className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Ciudad de origen</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese código ciudad origen"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: MDE)</p>
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Número de vuelo</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese código de vuelo"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: SA1234)</p>
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Ciudad de destino</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese código ciudad destino"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: BOG)</p>
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Tipo de avión</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese el tipo de avión"
            />
            <p className="text-gray-500 text-sm mt-1">(Ejemplo: Boeing 747)</p>
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

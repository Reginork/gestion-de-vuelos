'use client';
import React from 'react';
import DOMPurify from 'dompurify'; // Para prevenir ataques XSS
import '../styles/global.css';
import '../styles/header.css';

const ConsultarVuelos = () => {
  const handleLimpiar = () => {
    document.getElementById('form-consulta').reset();
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
      <div className="register-airplane-container">
        <h2 className="text-2xl font-bold text-center mb-4">Consultar vuelos</h2>
        <p className="text-center text-gray-600 mb-8">Registre uno de los siguientes datos para la consulta</p>
        
        <form id="form-consulta">
          <div className="mb-4">
            <label className="block font-semibold">Ciudad de origen</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Ingrese código ciudad origen" />
            <p className="text-gray-500 text-sm">(Ejemplo: MDE)</p>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Número de vuelo</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Ingrese código de vuelo" />
            <p className="text-gray-500 text-sm">(Ejemplo: SA1234)</p>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Ciudad de destino</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Ingrese código ciudad origen" />
            <p className="text-gray-500 text-sm">(Ejemplo: BOG)</p>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Tipo de avión</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Ingrese el tipo de avión" />
            <p className="text-gray-500 text-sm">(Ejemplo: Boeing 747)</p>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleLimpiar}
              className="w-1/2 py-2 mr-2 bg-white border border-blue-700 text-blue-700 font-semibold rounded-md hover:bg-gray-100"
            >
              Limpiar
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 ml-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800"
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

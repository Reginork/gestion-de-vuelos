'use client';

import { useState } from 'react';
import React from 'react';
import '../styles/global.css';
import '../styles/header.css';

export default function DetallesVuelo() {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleCancel = () => {
    setIsCancelModalOpen(false);
    setIsSuccessModalOpen(true);
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
      
      <div className="form-delete-flights">
        <h1 className="title">Detalles del vuelo</h1>
        <div className="space-y-5">
          {/* Campo origen */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Origen</label>
            <input
              type="text"
              value="Ciudad A"
              disabled
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 bg-gray-100 text-gray-700"
            />
            <p className="text-sm text-gray-500">(Medellín)</p>
          </div>

          {/* Campo Destino */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Destino</label>
            <input
              type="text"
              value="Ciudad B"
              disabled
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 bg-gray-100 text-gray-700"
            />
            <p className="text-sm text-gray-500">(Bogotá)</p>
          </div>

          {/* ID de Vuelo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ID de Vuelo</label>
            <input
              type="text"
              value="AB123"
              disabled
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 bg-gray-100 text-gray-700"
            />
            <p className="text-sm text-gray-500">(Ejemplo: AB123)</p>
          </div>

          {/* Estado */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Estado</label>
            <input
              type="text"
              value="Activo"
              disabled
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 bg-gray-100 text-gray-700"
            />
            <p className="text-sm text-gray-500">Estado de la reserva</p>
          </div>
        </div>

        {/* Botones */}
        <div className="form-buttons">
          <button className="back-button">
            Regresar
          </button>
          <button
            onClick={() => setIsCancelModalOpen(true)}
            className="cancel-button"
          >
            Cancelar vuelo
          </button>
        </div>
      </div>

      {/* Modal de Confirmación */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">¿Está seguro de que desea cancelar su vuelo?</h3>
            <div className="flex justify-between">
              <button
                onClick={() => setIsCancelModalOpen(false)}
                className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Confirmar cancelación
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Éxito */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">¡Su vuelo ha sido cancelado con éxito!</h3>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

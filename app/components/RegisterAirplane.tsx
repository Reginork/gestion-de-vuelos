import React from 'react';

function RegisterAirplane() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Registro de aviones</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Tipo de avión:
          </label>
          <input
            type="text"
            id="type"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
            Capacidad de asientos:
          </label>
          <input
            type="number"
            id="capacity"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="distribution" className="block text-sm font-medium text-gray-700">
            Distribución de asientos:
          </label>
          <input
            type="text"
            id="distribution"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            ID del avión:
          </label>
          <input
            type="text"
            id="id"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-medium text-white hover:bg-blue-700"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterAirplane;
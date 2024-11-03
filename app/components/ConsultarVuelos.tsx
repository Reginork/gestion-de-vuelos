import React from 'react';

const ConsultarVuelos: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Información Vuelos</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Número de vuelo</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="SA1234" />
        </div>
        <div>
          <label className="block font-semibold">Tipo de vuelo</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Nacional" />
        </div>
        <div>
          <label className="block font-semibold">Ciudad origen</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="MDE" />
        </div>
        <div>
          <label className="block font-semibold">Ciudad destino</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="BOG" />
        </div>
        <div>
          <label className="block font-semibold">Fecha y hora de salida</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="DIC-24-2024 16:00" />
        </div>
        <div>
          <label className="block font-semibold">Fecha y hora de llegada</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="DIC-24-2024 18:00" />
        </div>
        <div>
          <label className="block font-semibold">Tipo de aeronave</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="A320-800" />
        </div>
        <div>
          <label className="block font-semibold">Capacidad de pasajeros</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="240" />
        </div>
      </div>
      <button className="mt-8 w-full py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800">
        Inicio
      </button>
    </div>
  );
};

export default ConsultarVuelos;

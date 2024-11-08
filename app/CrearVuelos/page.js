"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/header.css';

const AgendarVueloDirecto = () => {
  const [showModal, setShowModal] = useState(false);
  const [numeroVuelo, setNumeroVuelo] = useState("");
  const [ciudadOrigen, setCiudadOrigen] = useState("");
  const [fechaSalida, setFechaSalida] = useState(null);
  const [tipoVuelo, setTipoVuelo] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [fechaLlegada, setFechaLlegada] = useState(null);
  const [tipoAvion, setTipoAvion] = useState("");

  const countries = [
    { value: 'CO', label: 'Colombia' },
    { value: 'MX', label: 'México' },
    // Agrega más países según tus necesidades
  ];

  const fetchCities = (countryCode) => {
    if (countryCode === 'CO') {
      return [
        { value: 'Medellin', label: 'Medellín' },
        { value: 'Bogota', label: 'Bogotá' },
        // Añade más ciudades para Colombia
      ];
    } else if (countryCode === 'MX') {
      return [
        { value: 'CDMX', label: 'Ciudad de México' },
        { value: 'Guadalajara', label: 'Guadalajara' },
        // Añade más ciudades para México
      ];
    }
    return [];
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null); // Resetea la ciudad al cambiar el país
  };

  const handleAccept = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      <div style={styles.container}>
      <h2 style={styles.title}>Agendar vuelo directo</h2>
      <p style={styles.description}>Registre los siguientes datos para agendar vuelos directos</p>

      <div style={styles.formGroup}>
        <label>Número de vuelo</label>
        <input
          type="text"
          placeholder="Ingresa el número de vuelo"
          value={numeroVuelo}
          onChange={(e) => setNumeroVuelo(e.target.value)}
          style={styles.input}
        />
        <p style={styles.exampleText}>(Ejemplo: 300)</p>
      </div>

      <div style={styles.formGroup}>
        <label>Ciudad de origen</label>
        <input
          type="text"
          placeholder="Ingresa la ciudad de origen"
          value={ciudadOrigen}
          onChange={(e) => setCiudadOrigen(e.target.value)}
          style={styles.input}
        />
        <p style={styles.exampleText}>(Ejemplo: Medellín)</p>
      </div>

      <div style={styles.formGroup}>
        <label>Fecha y hora de salida*</label>
        <DatePicker
          selected={fechaSalida}
          onChange={(date) => setFechaSalida(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Selecciona fecha y hora de salida"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Tipo de vuelo*</label>
        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.typeButton,
              backgroundColor: tipoVuelo === "Nacional" ? '#333' : '#ccc',
              color: tipoVuelo === "Nacional" ? '#fff' : '#000'
            }}
            onClick={() => setTipoVuelo("Nacional")}
          >
            Nacional
          </button>
          <button
            style={{
              ...styles.typeButton,
              backgroundColor: tipoVuelo === "Internacional" ? '#333' : '#ccc',
              color: tipoVuelo === "Internacional" ? '#fff' : '#000'
            }}
            onClick={() => setTipoVuelo("Internacional")}
          >
            Internacional
          </button>
        </div>
      </div>

      <div style={styles.formGroup}>
        <label>País*</label>
        <Select
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Selecciona un país"
        />
      </div>

      <div style={styles.formGroup}>
        <label>Ciudad de destino</label>
        <Select
          options={fetchCities(selectedCountry?.value)}
          value={selectedCity}
          onChange={(option) => setSelectedCity(option)}
          placeholder="Selecciona una ciudad"
          isDisabled={!selectedCountry}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Fecha y hora de llegada</label>
        <DatePicker
          selected={fechaLlegada}
          onChange={(date) => setFechaLlegada(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Selecciona fecha y hora de llegada"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Tipo de avión</label>
        <input
          type="text"
          placeholder="Ingresa el tipo de avión"
          value={tipoAvion}
          onChange={(e) => setTipoAvion(e.target.value)}
          style={styles.input}
        />
        <p style={styles.exampleText}>(Ejemplo: Boeing 737, Airbus A320)</p>
      </div>

      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.cancel }} onClick={() => alert("Formulario limpiado")}>Cancelar</button>
        <button style={{ ...styles.button, ...styles.accept }} onClick={handleAccept}>Aceptar</button>
      </div>

      {showModal && (
  <div style={styles.modalOverlay}>
    <div style={styles.modal}>
      <h3>Visualización de datos a agendar</h3>
      <p>¿Desea agendar el vuelo directo con los siguientes datos?</p>
      <div style={styles.formGroup}><strong>Número de vuelo:</strong> {numeroVuelo}</div>
      <div style={styles.formGroup}><strong>Ciudad de origen:</strong> {ciudadOrigen}</div>
      <div style={styles.formGroup}><strong>Fecha y hora de salida:</strong> {fechaSalida?.toLocaleString()}</div>
      <div style={styles.formGroup}><strong>Tipo de vuelo:</strong> {tipoVuelo}</div>
      <div style={styles.formGroup}><strong>País:</strong> {selectedCountry?.label}</div>
      <div style={styles.formGroup}><strong>Ciudad de destino:</strong> {selectedCity?.label}</div>
      <div style={styles.formGroup}><strong>Fecha y hora de llegada:</strong> {fechaLlegada?.toLocaleString()}</div>
      <div style={styles.formGroup}><strong>Tipo de avión:</strong> {tipoAvion}</div>

      <div style={styles.modalButtonGroup}>
        <button onClick={handleCloseModal} style={{ ...styles.modalButton, ...styles.modalButtonModify }}>Modificar</button>
        <button onClick={handleCloseModal} style={{ ...styles.modalButton, ...styles.modalButtonConfirm }}>Confirmar</button>
        <button onClick={handleCloseModal} style={{ ...styles.modalButton, ...styles.modalButtonDelete }}>Eliminar</button>
      </div>
    </div>
  </div>
)}
    </div>
    </div>
  );
};

// Estilos en línea
const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '20px',
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      textAlign: 'center',
      fontSize: '1rem',
      color: '#666',
      marginBottom: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    input: {
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    exampleText: {
      fontSize: '0.85rem',
      color: '#999',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      fontWeight: 'bold',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    cancel: {
      backgroundColor: '#ccc',
      color: '#333',
    },
    accept: {
      backgroundColor: '#333',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
    },
    typeButton: {
      padding: '0.5rem 1rem',
      backgroundColor: '#ccc',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  
    // Estilos para la ventana emergente (modal)
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10',
    },
    modal: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '100%',
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    modalDescription: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '1rem',
    },
    modalFormGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    modalInput: {
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f5f5f5',
      color: '#333',
    },
    modalButtonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      },
    modalButton: {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        margin: '0 10px',
        width: '30%',
        transition: 'background-color 0.2s ease',
    },
    modalButtonModify: {
      backgroundColor: '#ccc',
      color: '#fff',
    },
    modalButtonConfirm: {
      backgroundColor: '#333',
      color: '#fff',
    },
    modalButtonDelete: {
      backgroundColor: '#ccc',
      color: '#fff',
    },
  };  

export default AgendarVueloDirecto;

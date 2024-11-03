import React from 'react';
import Link from 'next/link';
import './styles/global.css';
import RegistrarAviones from './components/RegistrarAviones';
import ConsultarAviones from './components/ConsultarAviones';


const app = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <button style={styles.menuButton}>☰</button>
        <div style={styles.logoContainer}>
          <img src="/img/logo.png" alt="Logo" style={styles.logo} />
          <h1 style={styles.title}>Singapur</h1>
        </div>
        <img src="/img/profile.png" alt="Profile" style={styles.profileIcon} />
      </header>

      {/* Main section */}
      <main style={styles.main}>
        <button style={styles.backButton}>Regresar</button>
        <h2 style={styles.subtitle}>Gestión de vuelos</h2>
        <div style={styles.buttonContainer}>
          <Link href="/components/RegistrarAviones">
            <button style={styles.actionButton}>Registrar aviones</button>
          </Link>
          <Link href="/components/ConsultarAviones">
            <button style={styles.actionButton}>Consultar aviones</button>
          </Link>
          <Link href="/components/CrearVuelos">
            <button style={styles.actionButton}>Crear vuelos</button>
          </Link>
          <Link href="/components/ConsultarVuelos">
            <button style={styles.actionButton}>Consultar vuelos</button>
          </Link>
          <Link href="/components/EliminarVuelos">
            <button style={styles.actionButton}>Eliminar vuelos</button>
          </Link>
          <Link href="/components/CancelarVuelos">
            <button style={styles.actionButton}>Cancelar vuelo</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default app;


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  menuButton: {
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  title: {
    fontSize: '24px',
    color: '#0070f3',
  },
  profileIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: 'calc(100vh - 80px)',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: '10px 20px',
    backgroundColor: '#2a6a8c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  subtitle: {
    fontSize: '24px',
    margin: '20px 0',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    maxWidth: '400px',
  },
  actionButton: {
    width: '350px',
    height: '40px',
    padding: '10px',
    backgroundColor: '#2a6a8c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
"use client"; 

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/RegisterAirplane">Registrar avión</Link>
        </li>
        <li>
          <Link href="/ConsultAirplane">Consultar aviones</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background: #f0f0f0;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

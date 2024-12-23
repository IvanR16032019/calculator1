import React, { useEffect } from 'react';
import Calculator from './componentes/Calculator';
import './App.css'; // Asegúrate de que este archivo esté importado

function App() {
  useEffect(() => {
    // Esta función se ejecutará una vez al cargar la página.
    const logo = document.getElementById('logo');
    logo.classList.add('logo-animation'); // Añadimos la clase para iniciar la animación
  }, []);

  return (
    <div>
      <div className="header">
        <img
          id="logo"
          src="./imagenes/ircdev.png" // Reemplaza con la URL de tu logo
          alt="Logo de la empresa"
          className="logo"
        />
      </div>
      <Calculator />
    </div>
  );
}

export default App;

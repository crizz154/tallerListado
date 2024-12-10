import React, { useState, useEffect } from 'react';
import './App.css';
import Listado from './components/Listado';
import Detalle from './components/Detalle';

function App() {
  const [datos, setDatos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [detalle, setDetalle] = useState(null);

  // Cargar datos desde la API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // API pública para ejemplo
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  // Filtrar los datos según la búsqueda
  const filtrarDatos = () => {
    return datos.filter((item) =>
      item.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  return (
    <div className="App">
      <h1>Proyecto lista de Usuarios</h1>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {detalle ? (
        <Detalle detalle={detalle} setDetalle={setDetalle} />
      ) : (
        <Listado datos={filtrarDatos()} setDetalle={setDetalle} />
      )}
    </div>
  );
}

export default App;


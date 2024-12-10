import React from 'react';

function Listado({ datos, setDetalle }) {
  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <ul>
        {datos.map((item) => (
          <li key={item.id}>
            <button onClick={() => setDetalle(item)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listado;

import React from 'react';

function Detalle({ detalle, setDetalle }) {
  return (
    <div style="width: 18rem;">
      <h2>Detalles de {detalle.name}</h2>
      <p><strong>Correo electrónico:</strong> {detalle.email}</p>
      <p><strong>Dirección:</strong> {detalle.address.street}, {detalle.address.city}</p>
      <p><strong>Teléfono:</strong> {detalle.phone}</p>
      <button onClick={() => setDetalle(null)}>Volver</button>
    </div>
  );
}

export default Detalle;

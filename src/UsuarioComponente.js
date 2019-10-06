import React from "react";

const UsuarioComponente = ({
  id,
  nombre = "vacio",
  email,
  telefono,
  seleccionar = () => {}
}) => (
  <tr>
    <td>{id}</td>
    <td>{nombre}</td>
    <td>{email}</td>
    <td>{telefono}</td>
    <td>
      <button onClick={() => seleccionar({ id, nombre, email, telefono })}>
        editar
      </button>
    </td>
  </tr>
);

export default UsuarioComponente;

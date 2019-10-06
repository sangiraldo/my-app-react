import React from "react";

const FormularioUsuario = ({
  id = "",
  nombre = "",
  email = "",
  telefono = "",
  onUsuarioChange = () => {},
  editar = () => {}
}) => (
  <form action="#">
    <table cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
          <td>Nuevo registro</td>
          <td>
            <input name="nombre" value={nombre} onChange={onUsuarioChange} />
          </td>
          <td>
            <input name="email" value={email} onChange={onUsuarioChange} />
          </td>
          <td>
            <input name="telefono" value={telefono} onChange={onUsuarioChange} />
          </td>
          <td>
            <button onClick={() => editar({ id, nombre, email, telefono })} >Guardar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
);

export default FormularioUsuario;

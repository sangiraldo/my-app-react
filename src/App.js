import React from "react";
import "./App.css";
import UsuarioComponente from "./UsuarioComponente";
import FormularioUsuario from "./FormularioUsuario";
const axios = require('axios');


class App extends React.Component {

  constructor() {
    super();
    this.seleccionarUsuarioAEditar = this.seleccionarUsuarioAEditar.bind(this);
    this.getDataAxios();
  }

  state = {
    usuarioAEditar: {},
    usuarios: [
      {
        nombre: "usuario0",
        email: "usuario0@gmail.com",
        telefono: "2342354345435"
      },
      {
        nombre: "usuario1",
        email: "usuario1@gmail.com",
        telefono: "2342354345435"
      },
      {
        nombre: "usuario2",
        email: "usuario2@gmail.com",
        telefono: "2342354345435"
      },
      {
        nombre: "usuario3",
        email: "usuario3@gmail.com",
        telefono: "2342354345435"
      },
      {
        nombre: "usuario4",
        email: "usuario4@gmail.com",
        telefono: "2342354345435"
      }
    ]
  };

  seleccionarUsuarioAEditar(usuario) {
    this.setState({ usuarioAEditar: usuario });
  }

  async editarUsuario(usuario) {
    console.log("Entre: " + usuario.id);
    debugger;
    let response;
    if (usuario.id === "") {
      response =
        await axios.post("http://localhost:3001/usuarios",
          JSON.stringify(usuario),
          { headers: {'Content-Type': 'application/json'}}
        );
        this.setState({ usuarios: response.data });
    } else {
      response =
        await axios.put("http://localhost:3001/usuarios/" + usuario.id,
          JSON.stringify(usuario),
          { headers: {'Content-Type': 'application/json'}}
        );
        this.setState({ usuarios: response.data });
    }
    console.log(response.data);
  }

  async getDataAxios(){
    const response =
      await axios.get("http://localhost:3001/usuarios",
        { headers: {'Content-Type': 'application/json'}}
      )
    this.setState({ usuarios: response.data });
    console.log(response.data);
  }

  onUsuarioChange = evento => {
    const namedelinput = evento.target.name;
    console.log("namedelinput", namedelinput);

    const valordelinput = evento.target.value;
    console.log("valordelinput", valordelinput);

    this.setState({
      usuarioAEditar: {
        ...this.state.usuarioAEditar,
        [namedelinput]: valordelinput
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>email</th>
                <th>telefono</th>
                <th>Editar</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {this.state.usuarios.map((unUsuarioDelArray, indice) => (
                  <UsuarioComponente
                    key={indice}
                    {...unUsuarioDelArray}
                    seleccionar={this.seleccionarUsuarioAEditar}
                  />
                ))}
              </tbody>
            </table>
        </div>
        <div className="tbl-content">
          <FormularioUsuario
            {...this.state.usuarioAEditar}
            onUsuarioChange={this.onUsuarioChange}
            editar={this.editarUsuario}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react'
import { db } from '../firebase'
import './styles/styles.css'

const Filtrar = ({ setRegistros }) => {

  const [nombres, setNombres] = React.useState("");
  const [apellidos, setApellidos] = React.useState("");
  const [identificacion, setIdentificacion] = React.useState("");
  const [rol, setRol] = React.useState("");
  const [contraseña, setContraseña] = React.useState('')
  const [estado, setEstado] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [id, setId] = React.useState("");

  const compararFiltro = (newUser, user) => {

    return (

      newUser.nombres === user.nombres
      || newUser.apellidos === user.apellidos
      || newUser.identificacion === user.identificacion
      || newUser.rol === user.rol
      || newUser.estado === user.estado
      || newUser.telefono === user.telefono
      || newUser.correo === user.correo
    )
  }

  const filtrarRegistros = async (e) => {
    e.preventDefault()

    try {
      const data = await db.collection("registros").get()
      const arrayData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      const newUser = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        identificacion: identificacion,
        rol: rol,
        estado: estado,
        telefono: telefono,
        correo: correo,
      }

      let filtro = arrayData.filter(user => compararFiltro(newUser, user))

      const arrayEditado = filtro.map(user => ({
        id: user.id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        identificacion: user.identificacion,
        rol: user.rol,
        estado: user.estado,
        contraseña: user.contraseña,
        telefono: user.telefono,
        correo: user.correo,
      }))

      setRegistros(arrayEditado)
      console.log(arrayEditado)
    } catch (error) {
      console.log(error)
    }
  };

  function limpiarSetUsuarios() {
    setCorreo('')
    setEstado('')
    setIdentificacion('')
    setNombres('')
    setApellidos('')
    setRol('')
    setContraseña('')
    setTelefono('')
    setId('')
  }


  return (

    <div className="col-lg-10 col-xl-3 mr-xl-0  mr-lg-0 content-filters ">

      <div className="pt-2 mx-5 px-4">
        <div className="d-flex pb-4">
          <span className="text-primary pr-2 py-2">
            <i className="fa fa-user fa-2x"></i>
          </span>
          <h5 className="text-primary text-center font-weight-bold p-2 mt-1">
            Filtrar búsqueda
          </h5>
        </div>
        <form onSubmit={filtrarRegistros}>
          <label className="col-form-label lead">Nombres</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNombres(e.target.value)}
            value={nombres}
          />
          <label className="col-form-label lead">Apellidos</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setApellidos(e.target.value)}
            value={apellidos}
          />
          <label className="col-form-label lead">Identificación (C.C)</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setIdentificacion(e.target.value)}
            value={identificacion}
          />
          <label className="col-form-label lead">Rol asociado</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setRol(e.target.value)}
            value={rol}
          />
          <label className="col-form-label lead">Estado</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          />
          <label className="col-form-label lead">Contraseña</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
          <label className="col-form-label lead">Teléfono</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
          <label className="col-form-label lead">Correo electrónico</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
          <div className="row py-4">
            <div className="col-xl-6 col-lg-6">
              <button
                className="btn btn-primary bg-custom-2 w-100 py-2 filtrar"
                type="submit"   
              >
                Filtrar
              </button>
            </div>
            <div className="col-xl-6 col-lg-6">
              <button
                className="btn btn-outline w-100 py-2 limpiar"
                type="button"
                onClick={() => limpiarSetUsuarios()}
              >
                Limpiar
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Filtrar

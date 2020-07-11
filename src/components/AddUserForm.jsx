import React from 'react'
import { db} from '../firebase'
import { withRouter } from "react-router-dom";


const AddUserForm = () => {

    const [registros, setRegistros] = React.useState([])
    const [nombres, setNombres] = React.useState('')
    const [apellidos, setApellidos] = React.useState('')
    const [identificacion, setIdentificacion] = React.useState('')
    const [rol, setRol] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [contraseña, setContraseña] = React.useState('')
    const [telefono, setTelefono] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [id, setId] = React.useState('')
    
    const [modoEdicion, setModoEdicion] = React.useState(false)

    React.useEffect(() => {

        const obtenerDatos = async () => {

            try {
                
                const data = await db.collection('registros').get()
                const arrayData = data.docs.map(doc => ({ 
                    id: doc.id,
                    ...doc.data()
                 }))
                //  console.log(arrayData)
                 setRegistros(arrayData)
            } catch (error) {
                console.log(error)
            }

        }
        obtenerDatos()
    }, [])

    // Agregar usuario
    const agregar = async (e) => {

        e.preventDefault()

        let validar = validarCampos();

        if(validar === 'validado'){

            //console.log(newUser)
            try {
                const newUser = {
                    nombres: nombres,
                    apellidos: apellidos,
                    identificacion: identificacion,
                    rol: rol,
                    estado: estado,
                    contraseña: contraseña,
                    telefono: telefono,
                    correo: correo
                }
                const data = await db.collection('registros').add(newUser)

                setRegistros([
                    ...registros,
                    {...newUser, id: data.id}
                ])
                
            

                limpiarSetUsuarios()
                console.log(newUser)
            } catch (error) {
                console.log(error)
            }
        }
        
    }

    

    
    function validarCampos(){

        let mensaje = 'está vacio'

        if(!(nombres.trim()) || !(apellidos.trim()) || !(identificacion.trim()) || !(rol.trim())
        || !(estado.trim()) || !(contraseña.trim()) || !(telefono.trim()) || !(correo.trim()) || !(id.trim()))
        {
            console.log(mensaje)
            
        }else{

            mensaje = 'validado'   
        }

        return mensaje
    }

    function limpiarSetUsuarios(){
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

    // Eliminar usuarios
    const eliminar = async (id) => {
        try {
            
            await db.collection('registros').doc(id).delete()

            // Recibe los usuarios y filtra cuando el id sea distinto al id del parametro
            const arrayFiltrado = registros.filter(user => user.id !== id)
            setRegistros(arrayFiltrado)

        } catch (error) {
            console.log(error)
        }
    }

    const activarEdicion = (user) => {

        setModoEdicion(true)
        setNombres(user.nombres)
        setApellidos(user.apellidos)
        setIdentificacion(user.identificacion)
        setRol(user.rol)
        setEstado(user.estado)
        setTelefono(user.telefono)
        setContraseña(user.contraseña)
        setCorreo(user.correo)
        setId(user.id)
    }
    const desactivarEdicion = () => {

        setModoEdicion(false)
    }

    const editar = async (e) => {
        e.preventDefault()

        let validar = validarCampos()
        if(validar === 'validado'){

            try {   
                await db.collection('registros').doc(id).update({
                    nombres: nombres,
                    apellidos: apellidos,
                    identificacion: identificacion,
                    rol: rol,
                    estado: estado,
                    contraseña: contraseña,
                    telefono: telefono,
                    correo: correo
                })
                const arrayEditado = registros.map(user => (
                        user.id === id ? {
                        id: user.id, 
                        nombres: nombres, 
                        apellidos: apellidos,
                        identificacion: identificacion,
                        rol: rol,
                        estado: estado,
                        contraseña: contraseña,
                        telefono: telefono,
                        correo: correo
                    } : user
                ))
                
                setRegistros(arrayEditado)
                
                // setModoEdicion(false)
                limpiarSetUsuarios()
                //setId('')
                

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Identificación</th>
              <th>Rol asociado</th>
              <th>Estado</th>
              <th>Teléfono</th>
              <th>Correo electrónico</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {registros.length > 0 ? (
              registros.map((user) => (
                <tr key={user.id}>
                  <td>{user.nombres}</td>
                  <td>{user.apellidos}</td>
                  <td>{user.identificacion}</td>
                  <td>{user.rol}</td>
                  <td>{user.estado}</td>
                  <td>{user.telefono}</td>
                  <td>{user.correo}</td>
                  <td>
                    <a
                      href="#editUsersModal"
                      className="edit"
                      data-toggle="modal" 
                      data-target="#exampleModalCenter"
                      onClick={() => activarEdicion(user)}
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteUsersModal"
                      className="delete"
                      data-toggle="modal"
                      onClick={() => eliminar(user.id)}
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>0 usuarios registrados</td>
              </tr>
            )}
          </tbody>
        </table>


        {/* Modal para agregar y editar usuarios */}

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLongTitle">
                  {
                      modoEdicion ? 'Editar usuario' : 'Agregar usuario'
                  }
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">

                  <form onSubmit={modoEdicion ? editar : agregar}>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="col-form-label">Nombres</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setNombres(e.target.value)}
                          value={nombres}
                        />

                        <label className="col-form-label">
                          Identificación (CC)
                        </label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setIdentificacion(e.target.value)}
                          value={identificacion}
                        />
                        <label className="col-form-label">Estado</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setEstado(e.target.value)}
                          value={estado}
                        />
                        <label className="col-form-label">Telefono</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setTelefono(e.target.value)}
                          value={telefono}
                        />
                      </div>
                      <div className="col-md-6 ml-auto">
                        <label className="col-form-label">Apellidos</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setApellidos(e.target.value)}
                          value={apellidos}
                        />
                        <label className="col-form-label">Rol asociado</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setRol(e.target.value)}
                          value={rol}
                        />
                        <label className="col-form-label">Contraseña</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setContraseña(e.target.value)}
                          value={contraseña}
                        />
                        <label className="col-form-label">
                          Correo electrónico
                        </label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setCorreo(e.target.value)}
                          value={correo}
                        />
                      </div>
                    </div>
                    <div className="row py-4">
                      <div className="col-sm-6 col-md-6 text-right">
                        <button 
                            className={
                                modoEdicion ? 'btn btn-warning' : 'btn btn-success'
                            }
                            type="submit"
                        >
                          {
                              modoEdicion ? 'Editar' : 'Aceptar'
                          }
                        </button>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={() => desactivarEdicion()}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default withRouter(AddUserForm)
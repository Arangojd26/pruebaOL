import React from 'react'
import './styles/styles.css'

const Filtrar = () => {
    
    return (
      <div className="pt-2 px-5">
        <div className="d-flex pb-4">
          <span className="text-primary pr-2 py-2">
            <i className="fa fa-user fa-2x"></i>
          </span>
          <h5 className="text-primary text-center font-weight-bold p-2 mt-1">
            Filtrar búsqueda
          </h5>
        </div>
        <form>
          <label className="col-form-label lead">Nombres</label>
          <input
            type="text"
            className="form-control"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />
          <label className="col-form-label lead">Apellidos</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <label className="col-form-label lead">Identificación (C.C)</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <label className="col-form-label lead">Rol asociado</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <label className="col-form-label lead">Estado</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <label className="col-form-label lead">Contraseña</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <label className="col-form-label lead">Teléfono</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <label className="col-form-label lead">Correo electrónico</label>
          <input
            type="text"
            className="form-control"
            //onChange={(e) => setPass(e.target.value)}
            //value={pass}
          />
          <div className="row py-4">
            <div className="col-xl-6 col-lg-6">
              <button className="btn btn-primary bg-custom-2 w-100 py-2 filtrar" type="input">
                Filtrar
              </button>
            </div>
            <div className="col-xl-6 col-lg-6">
              <button className="btn btn-outline w-100 py-2 limpiar" type="input">
                Limpiar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Filtrar

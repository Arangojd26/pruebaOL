import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import UserTable from './UserTable';
import './styles/userTable.css'
import Filtrar from './Filtrar';

const Sidebar = () => {

    const [estadoCrear, setEstadoCrear] = React.useState(false)

    const cambiarACrear = () => {

        setEstadoCrear(true)

    }

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-2 navbar-dark bg-custom bg-primary sidebar sidebar-sticky fixed-top fixed-left" id="sidebar">
                    
                    <nav className="navbar navbar-expand-lg flex-lg-column text-left">
                        <a className="h3 py-lg-5 text-light" href="#login">OLSoftware</a>
                        <hr className="line w-100"></hr>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav flex-lg-column pb-4">                        
                                <a className="nav-link nav-link lead" data-scroll href="#login"><i className="fa fa-map pr-4" aria-hidden="true"></i>Programación</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login"><i className="fa fa-sliders pr-4" aria-hidden="true"></i>Gestión de operaciones</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login"><i className="fa fa-server pr-4" aria-hidden="true"></i>Perfiles</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login"><i className="fa fa-users pr-4" aria-hidden="true"></i>Roles</a>
                                <li className="nav-item active">
                                    <a className="nav-item nav-link lead" data-scroll href="#login"><i className="fa fa-user-plus pr-4" aria-hidden="true"></i>Usuario</a>
                                </li>
                                <a className="nav-item nav-link lead" data-scroll href="#login">Reportes</a>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="col-lg-10 col-xl-7 ml-xl-5 pl-xl-5 pb-5 content-table position-container">
                        <div className="row d-flex p-md-5 pt-lg-2 p-xl-0 pt-xl-2">
                            <span className="text-primary pr-2 py-2">
                                <i className="fas fa-users fa-2x"></i>
                            </span>
                            <h5 className="text-primary text-center font-weight-bold p-2 mt-1">Usuarios existentes</h5>
                            <button type="button" className="btn btn-primary py-2 mr-5 ml-auto" data-toggle="modal" data-target="#exampleModalCenter" id="btn-crear" onClick={() => cambiarACrear()}>Crear</button>
                            
                        </div>
                        <div className=" pt-4">
                            <UserTable estadoCrear={estadoCrear} />
                        </div>
                </div>
                <div className="col-lg-10 col-xl-3 mr-xl-2  mr-lg-0 content-filters">
                    <Filtrar />
                </div>
            </div>
        </div>
            
            

      
    );
}

export default withRouter(Sidebar)
import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import './styles/userTable.css'


const Sidebar = () => {

    
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                
                <div className="col-lg-2 col-xl-2 navbar-dark bg-custom bg-primary sidebar sidebar-sticky fixed-top fixed-left" id="sidebar">
                    
                    <nav className="navbar navbar-expand-lg flex-lg-column text-left">
                        <a className="h3 py-lg-5 text-light" href="#login">OLSoftware</a>
                        <hr className="line w-100"></hr>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav flex-lg-column pb-4">                        
                                <a className="nav-link nav-link lead text-sidebar" data-scroll href="#login"><i className="fa fa-map pr-4" aria-hidden="true"></i>Programación</a>
                                <a className="nav-item nav-link lead text-sidebar" data-scroll href="#login"><i className="fa fa-sliders pr-4" aria-hidden="true"></i>Gestión de operaciones</a>
                                <a className="nav-item nav-link lead text-sidebar" data-scroll href="#login"><i className="fa fa-server pr-4" aria-hidden="true"></i>Perfiles</a>
                                <a className="nav-item nav-link lead text-sidebar" data-scroll href="#login"><i className="fa fa-users pr-4" aria-hidden="true"></i>Roles</a>
                                <li className="nav-item active">
                                    <a className="nav-item nav-link lead text-sidebar" data-scroll href="#login"><i className="fa fa-user-plus pr-4" aria-hidden="true"></i>Usuario</a>
                                </li>
                                <a className="nav-item nav-link lead text-sidebar" data-scroll href="#login">Reportes</a>
                            </div>
                        </div>
                    </nav>

                </div>
               
            </div>
        </div>
            
            

      
    );
}

export default withRouter(Sidebar)
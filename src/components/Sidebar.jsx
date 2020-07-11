import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import UserTable from './UserTable';
import './styles/userTable.css'
import AddUserForm from './AddUserForm';
import Filtrar from './Filtrar';

const Sidebar = () => {

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-2 navbar-dark bg-primary sidebar sidebar-sticky fixed-top fixed-left" id="sidebar">
                    
                    <nav className="navbar navbar-expand-lg flex-lg-column text-center">
                        <a className="h3 py-lg-5 text-light" href="#login">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav flex-lg-column pb-4">
                                <a className="nav-item nav-link lead" data-scroll href="#login">Home</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login">Features</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login">Pricing</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login">Disabled</a>
                                <a className="nav-item nav-link lead" data-scroll href="#login">Disabled</a>
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
                            <button type="button" className="btn btn-primary py-2 mr-5 ml-auto" data-toggle="modal" data-target="#exampleModalCenter" id="btn-crear">Crear</button>
                            
                        </div>
                        <div className=" pt-4">
                            <UserTable />
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
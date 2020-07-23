import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import AddUserForm from './AddUserForm';

const Inicio = () => {

    return (

          <AddUserForm />  
      
    );
}

export default withRouter(Inicio)

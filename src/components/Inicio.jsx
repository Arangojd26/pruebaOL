import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import AddUserForm from './AddUserForm';
import Navbar from './Navbar';

const Inicio = ({firebaseUser}) => {

    return (
      <div>
        <Navbar firebaseUser={firebaseUser} />
        <AddUserForm />
      </div>
    );
}

export default withRouter(Inicio)

import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import './styles/userTable.css'
import AddUserForm from './AddUserForm';

const UserTable = ({estadoCrear}) => {

    //console.log(estadoCrear)

    return (
      <div>
        <AddUserForm cambiarACrear={estadoCrear} />
      </div>
    );
}

export default withRouter(UserTable)
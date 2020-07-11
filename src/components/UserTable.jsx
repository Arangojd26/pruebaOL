import React from 'react'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import './styles/userTable.css'
import { db} from '../firebase'
import AddUserForm from './AddUserForm';

const UserTable = () => {

    return (
      <div>
        <AddUserForm />
      </div>
    );
}

export default withRouter(UserTable)
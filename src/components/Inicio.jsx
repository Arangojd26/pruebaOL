import React from 'react'
import {auth} from '../firebase'
import { withRouter } from "react-router-dom";
import './styles/styles.css'

const Inicio = (props) => {

    const [user, setUser] = React.useState(null)

    // React.useEffect(() => {
    //     if(auth.currentUser){
    //         console.log('Existe un usuario')
    //         setUser(auth.currentUser)
    //     }else{
    //         console.log('No existe el usuario')
    //         props.history.push('/login')
    //     }
    // }, [props.history])

    return (
      <div className="col-lg-4">
        
      </div>
    );
}

export default withRouter(Inicio)

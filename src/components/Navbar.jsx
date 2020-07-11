import React from 'react'
import { NavLink} from 'react-router-dom'
import { auth } from '../firebase'
import { withRouter } from "react-router-dom";
import './styles/styles.css'
import Sidebar from './Sidebar';

const Navbar = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }

    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('Existe un usuario')
            setUser(auth.currentUser)
        }else{
            console.log('No existe el usuario')
            props.history.push('/login')
        }
    }, [props.history])

    return (
      <div>
        <div className="row">
          <div className="col-12">
            {
                props.firebaseUser !== null ? (
                <div
                    className="navbar navbar-light bg-light fixed-right"
                    id="nav-horizontal"
                >
                    <div>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand text-primary font-weight-bold">
                        Prueba Front-end
                    </span>
                    </div>

                    {/* <Link className="navbar-brand  pr-5" to="/">
                    Prueba Front-end
                    </Link> */}
                    <div>
                    <div className="d-flex">
                        <span className="navbar-brand mt-2">
                        <i className="far fa-user-circle"></i>
                        </span>
                        {
                            user && (
                            <span className="navbar-text text-dark mt-2 mr-2 font-weight-bold">
                                {user.email}
                            </span>
                            )
                        }
                        {
                            props.firebaseUser !== null ? (
                            <button
                                className="btn btn-dark"
                                onClick={() => cerrarSesion()}
                            >
                                Cerrar sesión
                            </button>
                            ) : (
                            <NavLink className="btn btn-dark mr-2" to="/login">
                                Login
                            </NavLink>
                            )
                        }
                        
                    </div>
                    </div>
                </div>
                
                ) : null
                
            }
            
            
          </div>
        </div>
        {
                props.firebaseUser !== null ? (
                    <Sidebar />
                ) : null
        }
      </div>
    );
}

export default withRouter(Navbar)

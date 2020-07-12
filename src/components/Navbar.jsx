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
                    className="navbar navbar-light fixed-right"
                    id="nav-horizontal"
                >
                    <div>
                    <button className="navbar-toggler text-primary menu-nav" type="button">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <span className="navbar-brand text-primary font-weight-bold" id="prueba-text">
                        Prueba Front-end
                    </span>
                    </div>

                    {/* <Link className="navbar-brand  pr-5" to="/">
                    Prueba Front-end
                    </Link> */}
                    <div>
                    <div className="d-flex">
                        <span className="navbar-brand pt-3">
                            <i className="fa fa-user-circle perfil-icon"></i>
                        </span>
                        {
                            user && (
                            <span className="navbar-text text-dark pt-3 mr-2 ">
                                <p id="email-nav">{user.email}</p>
                            </span>
                            )
                        }
                        {
                            props.firebaseUser !== null ? (
                            <button
                                className="navbar-toggler text-primary mb-1 pl-5"
                                onClick={() => cerrarSesion()}
                            >
                                <i className="fa fa-sign-in"></i>
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

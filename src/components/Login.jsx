import React from 'react'
import { auth, db } from '../firebase'
import { withRouter } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            // console.log('Ingrese Email')
            setError('Ingrese Email')
            return
        }
        if(!pass.trim()){
            // console.log('Ingrese Constraseña')
            setError('Ingrese Constraseña')
            return
        }
        if(pass.length < 6){
            // console.log('Password mayor a 6 caracteres')
            setError('Password de 6 caracteres o más')
            return
        }

        setError(null);
        console.log('Correcto...');

        if(esRegistro){
            registrar()
        }else{
            login()
        }
    }

    const login = React.useCallback(async() => {
        try {
            const respuesta = await auth.signInWithEmailAndPassword(email, pass)
            console.log(respuesta.user)

            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/')

        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/user-not-found'){
                setError('Usuario no registrado')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Constraseña incorrecta')
            }
        }
    }, [email, pass, props.history])


    const registrar = React.useCallback(async() => {
        try {
            const respuesta = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(respuesta.user)
            await db.collection('usuarios').doc(respuesta.user.email).set({
                email: respuesta.user.email,
                uid: respuesta.user.uid
            })
            
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/')

        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('El email ya está en uso')
            }
            
        }
    }, [email, pass, props.history])

    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    esRegistro ? 'Registro de usuarios' : 'Inicio de sesión'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                            type="email"
                            className="form-control mb-2"
                            placeholder="Ingrese un email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password"
                            className="form-control mb-2"
                            placeholder="Ingrese un password"
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                        <button 
                            className="btn-dark btn-lg btn-block"
                            type='input'
                        >
                            {
                                esRegistro ? 'Registrase' : 'Iniciar sesión'
                            }
                        </button>
                        <button 
                            className="btn btn-info btn-sm btn-block"
                            onClick={() => setEsRegistro(!esRegistro)}
                            type='button'
                        >
                            {
                                esRegistro ? '¿Ya estás registrado?' : 'Registrarse'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
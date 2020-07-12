import React from 'react'
import { auth, db } from '../firebase'
import { withRouter } from "react-router-dom";
import './styles/styles.css'

const Login = (props) => {

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);
  const [esRegistro, setEsRegistro] = React.useState(false);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      // console.log('Ingrese Email')
      setError("Ingrese Email");
      return;
    }
    if (!pass.trim()) {
      // console.log('Ingrese Constraseña')
      setError("Ingrese Constraseña");
      return;
    }
    if (pass.length < 6) {
      // console.log('Password mayor a 6 caracteres')
      setError("Password de 6 caracteres o más");
      return;
    }

    setError(null);
    console.log("Correcto...");

    if (esRegistro) {
      registrar();
    } else {
      login();
    }
  };

  const login = React.useCallback(async () => {
    try {
      const respuesta = await auth.signInWithEmailAndPassword(email, pass);
      console.log(respuesta.user);

      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Constraseña incorrecta");
      }
    }
  }, [email, pass, props.history]);


  const registrar = React.useCallback(async () => {
    try {
      const respuesta = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(respuesta.user);
      await db.collection("usuarios").doc(respuesta.user.email).set({
        email: respuesta.user.email,
        uid: respuesta.user.uid,
      });

      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya está en uso");
      }
    }
  }, [email, pass, props.history]);

  return (
    <div className="mt-md-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-4 col-sm-12 align-self-center pt-0 mb-0 mt-md-5 pt-md-5 mt-sm-0 pb-sm-5" id="titulo-login">
            <div className="mt-0 pt-0 pt-md-4 mt-md-5 ">
                <h2 className="pt-5 mt-5">Aplicación <br></br> OLSoftware</h2>
                <h5 className="mt-5">Prueba práctica Front-end</h5>
            </div>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-3" >
          <div className="card Card-Login" id="Position-Card"> 
            <div className="card-body text-center mx-5 my-5">
              <h3 className="text-center pb-3 mb-4">
                {esRegistro ? "Registro de usuarios" : "Inicio de sesión"}
              </h3>

              <form onSubmit={procesarDatos}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-control-lg border-right-0 border"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <span className="input-group-append">
                    <div className="input-group-text bg-transparent">
                      <i className="fa fa-user"></i>
                    </div>
                  </span>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control form-control-lg input-lg border-right-0 border"
                    placeholder="Contraseña"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                  <span className="input-group-append">
                    <div className="input-group-text bg-transparent">
                      <i className="fa fa-lock"></i>
                    </div>
                  </span>
                </div>
                <button className=" btn btn-primary btn-lg btn-block mt-5 mb-4" type="input">
                  {esRegistro ? "Registrase" : "Iniciar sesión"}
                </button>
                <a
                  href="#login"
                  className=""
                  onClick={() => setEsRegistro(!esRegistro)}
                  type="button"
                >
                  {esRegistro ? "¿Ya estás registrado?" : "¿Aún no te has registrado?"}
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login)
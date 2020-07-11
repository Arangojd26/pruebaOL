import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Inicio from './components/Inicio';
import {auth, db} from './firebase'
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';



function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  }, [])


  // Agregar Usuarios
  const greeting = (user) => {
    console.log(user)
  };

  return firebaseUser !== false ? (
    <Router>
      <div className="container-fluid">
        
        <Navbar firebaseUser={firebaseUser} />
        {/* <AddUserForm value={greeting} /> */}
        
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <h3>Estamos preparando todo para tí...</h3>
  )
}

export default App;

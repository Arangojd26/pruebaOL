import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Inicio from './components/Inicio';
import {auth} from './firebase'

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

  return firebaseUser !== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
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

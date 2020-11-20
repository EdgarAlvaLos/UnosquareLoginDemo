import React from "react";
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cinema from './components/Cinema';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" exact component={Login} />
        <Route exact path="/LandingPage" exact component={Cinema} />
      </Switch>

    </div>
  );
}

export default App;

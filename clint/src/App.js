import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.scss';
import Signin from './components/Authentication/Signin';
import Home from './components/Home';
import Topbar from "./components/topbar/Topbar";
import { useSelector } from 'react-redux';
import Login from './components/Authentication/Login'
import Cart from "./components/cart/Cart";



function App() {

  const user = useSelector(state => state.user.token)

  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={Signin} />
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

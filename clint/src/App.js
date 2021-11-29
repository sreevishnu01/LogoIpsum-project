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
import Singleprodct from "./components/main/Singleprodct";
import Footer from "./components/footer/Footer";



function App() {

  const user = useSelector(state => state.user.token)

  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route path="/" exact>{user ? <Home /> : <Login />}</Route>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={Signin} />
          <Route path="/product/:id" component={Singleprodct} />

        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;

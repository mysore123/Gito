import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Aboveheader from './Aboveheader';
import 'semantic-ui-css/semantic.min.css'
import Checkout from './Checkout';
import Login from './Login';
import MoreProducts from './MoreProducts';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/more">
            <Aboveheader/>
            <Header/>
            <MoreProducts/>
          </Route>
          <Route path="/">
            <Aboveheader/>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

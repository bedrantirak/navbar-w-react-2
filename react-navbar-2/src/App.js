import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import Marketing from './components/pages/Marketing';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Home from "./components/pages/Home";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/contact-us" exact component={ContactUs}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route path="/marketing" exact component={Marketing}></Route>
        <Route path="/consulting" exact component={Consulting}></Route>
        
      </Switch>
      </Router>
  );
}

export default App;

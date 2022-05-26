import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Galeria from './components/pages/Galeria';
import Testimonios from './components/pages/Testimonios';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Galeria} />
          <Route path='/products' component={Testimonios} />
          <Route path='/sign-up' component={Contacto} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import About from './pages/About';

function App() {
  return (
    <>
      <Router >
        <div className='main'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' component={ContactMe} />
          <Route path='/About' component={About} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
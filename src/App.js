import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import CoinPage from './components/pages/CoinPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/coin-page' component={CoinPage}/>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/register' component={Register}/>
          <Route path='/' exact component={Home} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;

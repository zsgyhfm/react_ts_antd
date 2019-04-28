import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Whois from './pages/Whois'
const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/whois" component={Whois} />
      </Switch>
    </div>
  );
}

export default App;

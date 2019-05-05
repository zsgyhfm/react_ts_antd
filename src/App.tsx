import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Trade from './pages/Trade'
import GRW from './pages/GRW'
import Login from './pages/Login'
import Regin from "./pages/Regin"

import loadable from 'react-loadable'
const Home = loadable({
  loader:()=>import("./pages/Home"),
  loading(){
    return <div>loading</div>
  }
});
const Whois = loadable({
  loader:()=> {
    return import("./pages/Whois")
  },
  loading(){
    return <div>loading</div>
  }
});
const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/whois" component={Whois} />
        <Route path="/trade" component={Trade} />
          <Route path="/grw" component={GRW} />
          <Route path="/login" component={Login} />
          <Route path="/regin" component={Regin} />
      </Switch>
    </div>
  );
}

export default App;

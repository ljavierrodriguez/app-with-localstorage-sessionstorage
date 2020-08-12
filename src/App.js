import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';
import NotFound from './views/notfound';
import Settings from './views/settings';
import Navbar from './components/navbar';

import injectContext from './store/appContext';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);

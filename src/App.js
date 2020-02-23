import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Create from './component/Create';
import Edit from './component/Edit';
import Index from './component/Index';

function App() {
  return (
    <div className="Container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">Movies</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
              <Link to={'/index'} className="nav-link">Index</Link>
            </li>
          </ul>
        </div>
      </nav> <br/>
      <Switch>
        <Route exact path='/create' component={Create} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/index' component={Index} />
      </Switch>
    </div>
  );
}

export default App;

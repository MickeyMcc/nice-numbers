import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './index.css'
import './App.css';
import Rate from './Pages/Rate';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Nav';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Rate />
          </Route>
          <Route path="/about"><About /></Route>
          <Route path="/rate"><Redirect to="/" /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
      <Router>

    <div className="App">
      <Helmet title="Hello React!" />
      <header className="App-header">
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/page1">About</Link>
                  </li>
                  <li>
                      <Link to="/page2">Users</Link>
                  </li>
              </ul>
          </nav>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Switch>
                <Route path="/page2">
                    <Page2 />
                </Route>
                <Route path="/page1">
                    <Page1 />
                </Route>
                <Route path="/">
                    <h2>home</h2>
                </Route>
            </Switch>
        </a>
      </header>
    </div>
      </Router>
  );
}

export default App;

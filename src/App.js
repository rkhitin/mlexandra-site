import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import styles from 'src/App.module.css'

import Page1 from 'src/pages/Page1'
import Page2 from 'src/pages/Page2'
import SwitchAnimation from 'src/components/SwitchAnimation/SwitchAnimation'
import NoiseBackground from 'src/components/NoiseBackground/NoiseBackground'

function App() {
  return (
    <Router>
      <div className={styles.root}>
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

          <p className={styles.red}>
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

      <SwitchAnimation />
      <NoiseBackground />
    </Router>
  )
}

export default App

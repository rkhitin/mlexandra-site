import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import styles from 'src/App.module.css'

import Page1 from 'src/pages/Page1'
import Page2 from 'src/pages/Page2'
import Page3 from 'src/pages/Page3'
import SwitchAnimation from 'src/components/SwitchAnimation/SwitchAnimation'
import NoiseBackground from 'src/components/NoiseBackground/NoiseBackground'
import NavBar from 'src/components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <Helmet title="Hello React!" />

      <NavBar />

      <div className={styles.root}>
        <Switch>
          <Route path="/page3">
            <Page3 />
          </Route>
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
      </div>

      <SwitchAnimation />
      <NoiseBackground />
    </Router>
  )
}

export default App

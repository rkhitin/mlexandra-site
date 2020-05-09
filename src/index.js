import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import * as serviceWorker from './serviceWorker'

import 'normalize.css/normalize.css'
import './vars.css'
import './main.css'

render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

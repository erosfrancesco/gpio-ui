import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

import '../ws/client.js'

// graphic based on:
// https://github.com/tutRPi/Raspberry-Pi-Simple-Web-GPIO-GUI
render(<App />, document.getElementById('app')!)

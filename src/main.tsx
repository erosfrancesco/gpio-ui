import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import './ws/index.js'

render(<App />, document.getElementById('app')!)

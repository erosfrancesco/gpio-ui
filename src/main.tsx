// import 'dotenv/config'
import './ws/index.ts'
import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

render(<App />, document.getElementById('app')!)

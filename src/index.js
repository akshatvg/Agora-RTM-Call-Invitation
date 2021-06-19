import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ContainerProvider } from './utils/container'
import { ThemeProvider } from '@material-ui/styles'
import THEME from './utils/theme'

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <ContainerProvider>
      <App />
    </ContainerProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

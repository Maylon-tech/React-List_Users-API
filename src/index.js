import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

  // Pode desestrutura as cores que forem usar.
import { purple, indigo, teal } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: indigo[500],
    },
    therdy: teal[800]
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

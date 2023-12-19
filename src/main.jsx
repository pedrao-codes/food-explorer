import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from "./styles/global"
import theme from './styles/theme'

import { ThemeProvider } from 'styled-components'

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { Dish } from './pages/Dish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Dish>
      
        </Dish>
    </ThemeProvider>
  </React.StrictMode>
)
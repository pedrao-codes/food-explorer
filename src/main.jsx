import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from "./styles/global"
import theme from './styles/theme'

import { ThemeProvider } from 'styled-components'

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
<<<<<<< HEAD
import { Dish } from './pages/Dish'
=======
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
<<<<<<< HEAD
        <Dish>
      
        </Dish>
=======
        <Home>
      
        </Home>
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
    </ThemeProvider>
  </React.StrictMode>
)
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Login from './components/Login'
import Topbar from './components/Topbar'
import theme from './setupTheme'
import { AuthProvider } from './contexts/AuthContext'

let App = () => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Topbar />
            <Routes>
              <Route path="/" element={<h1>Hello React</h1>} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </MuiThemeProvider>
    </>
  )
}

export default App
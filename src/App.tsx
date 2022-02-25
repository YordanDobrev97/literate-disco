import { useState } from 'react'
import { useCookies } from 'react-cookie'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Box } from '@mui/material'

import { Home } from './pages/home/Home'
import Login from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { ProjectList } from './pages/projects/ProjectList'
import { ECommerce } from './pages/projects/index'
import AuthContext from './context/authContext'

function App() {
  const [cookies] = useCookies(['jwt'])
  const [isAuthenticated, setAuthenticated] = useState(cookies?.jwt || false)
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/signIn" element={<Login />} />
            <Route path="/auth/signUp" element={<Register />} />
            <Route path="projects" element={<ProjectList />} />
            <Route path="projects/ecommerce" element={<ECommerce />} />
            
          </Routes>
        </Box>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;

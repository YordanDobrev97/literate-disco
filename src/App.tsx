import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { ProjectList } from './pages/projects/ProjectList'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signIn" element={<Login />} />
          <Route path="/auth/signUp" element={<Register />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

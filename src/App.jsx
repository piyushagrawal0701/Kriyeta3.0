import { useState } from 'react'
import './App.css'
import NavbarFinal from './Components/Navbar/Navbar_Final'
import ScrollToTop from './Components/Scroll to top/ScrollToTop'
import { Route, Routes } from 'react-router-dom'
import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './Context/AuthContext'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'

function App() {

    // -------- DASHBOARD REDIRECT --------
    const PrivateRoute = ({ children }) => {
      const { user } = useAuth();
      return user ? children : <Navigate to="/login" />;
    };

  return (
    <>
      <AuthProvider>
        <NavbarFinal />
        <ScrollToTop/>
        <ToastContainer/>

        <Routes>
          {/* ------- AUTHENTICATION ROUTES ----------  */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* ------- PAGES ROUTES ----------  */}

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>

        <Faq />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App

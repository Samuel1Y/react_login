import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext";
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Login";
import basketball from "./img/basketball.jpg"

function App() {
    return (
        <div style={{
            backgroundImage: `url(${basketball})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100vw', height: '100vh', backgroundSize:'cover'
        }} >
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px"}}>
                    <Router>
                        <AuthProvider>
                        <Routes>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/" element={<Login />} />
                        </Routes>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
            </div>
        )
}

export default App

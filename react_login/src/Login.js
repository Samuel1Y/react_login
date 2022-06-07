import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link } from 'react-router-dom'

export default function Login() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login, currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    async function handleLogOut() {
        setError('')

        try {
            await logout()
        } catch {
            setError('Failed to Log out')
        }
    }

    return (
        <>
            <div className="text-center mb-5">
            {currentUser && <h3 style={{ backgroundColor: 'white' }}> Hi { currentUser.displayName } </h3>}
            {currentUser && <Button className="w-100" onClick={logout} >Log out</Button>}
            </div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-5">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2" style={{ backgroundColor:'white' }}>
                You don't have an account yet ? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
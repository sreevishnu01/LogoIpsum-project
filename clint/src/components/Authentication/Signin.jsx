import { Form, Container, Button, Row, Col, NavLink } from 'react-bootstrap'
import axios from '../../Assets/axiosconfig'
import { useState } from 'react'

function Signin() {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSignin = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/users/register', {
                firstname, lastname, email, username, password
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
            console.log(err);
        }


    };

    return (
        <div className="min-vh-100">
            <Container className="mt-5" >
                <div className="form-signin  align-items-center justify-content-center d-flex">
                    <Form >
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="firstname" placeholder="First name" onChange={e => setFirstname(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="lastname" placeholder="Last name" onChange={e => setLastname(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSignin} >
                            Submit
                        </Button>
                        <NavLink href='/'>Login</NavLink>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {error && <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>}
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Signin

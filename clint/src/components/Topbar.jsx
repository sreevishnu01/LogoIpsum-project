import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Button, Image, Form, FormControl } from 'react-bootstrap'


function Topbar() {
    return (
        <>
            <Navbar bg="primary">
                <Container>
                    <p>+221336622</p>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container className="border-bottom py-3">
                    <Navbar.Brand href="/">logoIpsum</Navbar.Brand>
                    <Nav onSelect className="me-auto">
                        <NavDropdown title="Classifieds" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>


                </Container>
            </Navbar >
        </>
    )
}

export default Topbar

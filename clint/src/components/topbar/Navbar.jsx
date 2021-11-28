import React from 'react'
import Topbar from './Topbar'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

function Navbar1() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className="mb-5">
                    <Nav onSelect className="me-5">
                        <NavDropdown title="All Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Books</Nav.Link>
                        <Nav.Link href="/about">Electronic</Nav.Link >
                        <Nav.Link href="/Tutorial">Real Estate</Nav.Link>
                        <Nav.Link href="#link">Cars-Bikes</Nav.Link>
                        <Nav.Link href="#link">Dorm-Furniture</Nav.Link>
                        <Nav.Link href="#link">Men</Nav.Link>
                        <Nav.Link href="#link">Women</Nav.Link>
                        <Nav.Link href="#link">Music</Nav.Link>
                        <Nav.Link href="#link">Hobbies Games</Nav.Link>
                        <Nav.Link href="#link">Toys</Nav.Link>
                        <Nav.Link href="#link">Kids</Nav.Link>
                    </Nav>

                </Container>
            </Navbar >

        </>
    )
}

export default Navbar1

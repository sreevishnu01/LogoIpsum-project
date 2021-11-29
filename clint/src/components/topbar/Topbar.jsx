import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Button, Form, FormControl } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';
// import { BsCurrencyDollar } from "react-icons/bs";


function Topbar() {

    const dispatch = useDispatch();
    const handellogout = () => {
        dispatch(logOut());
    }

    const { cart, user } = useSelector(state => state)
    return (
        <>
            <Navbar variant="dark" className="top-notice">
                <Container>
                    <Nav>
                        <Nav.Link href="#deets" className="c-white"><FaPhoneAlt color="white" />+221336622</Nav.Link>
                        <Nav.Link href="#memes" className="c-white">
                            <FaEnvelope color="white" /> support@elextra.io
                        </Nav.Link>
                    </Nav>

                    <Nav className="c-white">
                        <Nav.Link href="#deets" className="c-white ml-5"><FaMapMarkerAlt color="white" />Locations</Nav.Link>
                        <Navbar.Text className="c-white ml-5">
                            |
                        </Navbar.Text>
                        <Nav.Link href="#memes" className="c-white ml-5">
                            $ Dollar (US)
                        </Nav.Link>
                        <NavDropdown title="EN" id="basic-nav-dropdown" className="ml-5">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                </Container>
            </Navbar >


            <Navbar bg="light" expand="lg" className="top-navbar">
                <Container >
                    <Navbar.Brand href="/">
                        <img
                            src='/images/logo61.png'
                            width="258"
                            height="145"
                            className="d-inline-block align-top"
                            alt="logo"
                        /></Navbar.Brand>
                    <Nav onSelect className="me-auto">
                        <NavDropdown title="Classifieds" id="basic-nav-dropdown" className="nav-buttonbg">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search here..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav className="navbar-iterm3 mr-5">
                        <Nav.Link href="#deets"><FaHeart color="red" /></Nav.Link>
                        <Nav.Link href="/cart">
                            <FaShoppingCart /><span className="Danger">{cart.totalQuntity}</span>
                        </Nav.Link>

                        <Nav.Link href="/">
                            <FaUser />
                        </Nav.Link>
                    </Nav>
                    {user.token ? (
                        <Button variant="secondary" onClick={handellogout} className="secondary">Logout</Button>
                    ) : (
                        <Button variant="secondary" className="secondary">Classifieds</Button>
                    )}



                </Container>
            </Navbar >
        </>
    )
}

export default Topbar

import React from 'react';
import { Navbar, Nav,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './myStyles.css';

function CustomNavBar2() {
    return (
        <div>
            <Navbar bg="danger" expand="lg">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Japan" className="text-white h5">Japan</Nav.Link>
                        <Nav.Link href="/Korea" className="text-white h5">Korea</Nav.Link>
                        <Nav.Link href="/China" className="text-white h5">China</Nav.Link>
                    </Nav>
                    <Link to="/BookNow" className="hoverBtn"><Button variant="outline-light">Book Now</Button></Link>
            </Navbar>
        </div>
    )
}

export default CustomNavBar2;
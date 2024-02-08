import React from 'react';
import { Navbar,Nav, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './myStyles.css';


function CustomNavBar() {
    return (
        <div >
            <Navbar expand="lg">
                <Navbar.Brand ><Link to="/" className="text-dark noUnderLine">Travel Asia</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Row >
                        <Col>
                            <Button variant="outline-primary" size="sm" /*onClick={this.showHide}*/ className="my-1">Show/Hide</Button>
                        </Col>
                        <Col lg="auto" className="p-0">
                            <Link to="#"><Image src="twitter.png" rounded className="imageSize" /></Link>
                            <Link to="#"><Image src="instagram.png" rounded className="imageSize" /></Link>
                            <Link to="#"><Image src="fb.png" rounded className="imageSize" /></Link>
                        </Col>
                        <Col className="p-0">
                            <Nav.Item>
                                <Nav.Link href="#footer" className="text-dark pl-0">
                                    About
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg="auto" className="p-0">
                            <Nav.Item>
                                    <Navbar.Text className="text-dark">Email: TravelAsia@travelholdings.com</Navbar.Text>
                            </Nav.Item>

                        </Col>


                    </Row>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default CustomNavBar;
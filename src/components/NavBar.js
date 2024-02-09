import React from 'react';
import { Navbar,Nav, Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './myStyles.css';


function CustomNavBar(props) {
	const handleClick = () => {
        props.onDarkMode();
    };
	let txtColor = props.darkMode ? 'text-white' : 'text-dark';

    return (
        <div >
            <Navbar expand="lg">
                <Navbar.Brand ><Link to="/" className={`${txtColor} noUnderLine`}>Travel Asia</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Row >
                        <Col lg="auto" className="p-0 switchStyle smallScreenStyle">
							<Image src="sun.png" rounded className="switchIconStyle mr-2" />
							<Form>
                                <Form.Check type="switch" id="darkMode" label="" onClick={handleClick} />
                            </Form>
                            <Image src="night.png" rounded className="switchIconStyle" />
                        </Col>
						{/* Social Media Icons */}
                        <Col lg="auto" className="p-0">
                            <Link to="#"><Image src="twitter.png" rounded className="imageSize" /></Link>
                            <Link to="#"><Image src="instagram.png" rounded className="imageSize" /></Link>
                            <Link to="#"><Image src="fb.png" rounded className="imageSize" /></Link>
                        </Col>
                        <Col className="p-0">
                            <Nav.Item>
                                <Nav.Link href="#footer" className={`${txtColor} pl-0 text-center`}>
                                    About
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg="auto" className="p-0 text-center">
                            <Nav.Item>
                                    <Navbar.Text className={txtColor}>Email: TravelAsia@travelholdings.com</Navbar.Text>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default CustomNavBar;
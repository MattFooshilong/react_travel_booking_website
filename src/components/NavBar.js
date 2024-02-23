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
                    <Row>
                        <Col lg="auto" className="iconStyle" style={{marginTop:"3px"}}>
							<Image src="sun.png" rounded className="imageSize mr-2" alt="sun.png"/>
							<Form>
                                <Form.Check type="switch" id="darkMode" label="" onClick={handleClick} />
                            </Form>
                            <Image src="night.png" rounded className="imageSize" alt="night.png"/>
                        </Col>
						{/* Social Media Icons */}
                        <Col lg="auto" className="iconStyle socialMediaSmallScreenStyle">
							<Link to="#"><Image src="twitter.png" rounded className="imageSize mr-2" alt="twitter.png"/></Link>
							<Link to="#"><Image src="instagram.png" rounded className="imageSize mr-2" alt="insta.png"/></Link>
							<Link to="#"><Image src="fb.png" rounded className="imageSize mr-2" alt="fb.png"/></Link>
                        </Col>
                        <Col lg="auto">
                            <Nav.Item>
                                <Nav.Link href="#footer" className={`${txtColor} text-center`}>
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
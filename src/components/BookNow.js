import React, { useState } from 'react';
import { Form, Row, Col, Button, Alert} from 'react-bootstrap';
import './myStyles.css';
import dayjs from 'dayjs'

const BookNow = (props) => {
	const [formFields, setFormFields] = useState({
		validated: false,
		lastName: '',
		firstName:'',
		fromDate:'',
		toDate:'',
		country:'Japan',
		email:'',
		address:'',
		city:'',
		stateOfCtry:'',
		zipcode:'',
		cardType:'',
		showSensitiveFields: false ,
		cardNo:'',
		expDate:'',
		cvv:'',
		formSuccess: false
	})

    const submitHandler = (event) => {
		event.preventDefault()
		event.stopPropagation()
        const form = event.currentTarget
		setFormFields(prevState => ({ ...prevState, validated: true, formSuccess:form.checkValidity()}))
	}
    

    const onChangeHandler = (e) => setFormFields({...formFields, [e.target.name]: e.target.value})
    
    const cardTypeHandler = (type) => setFormFields(prevState => ({...prevState, cardType: type}))
     
    const showHide = () => setFormFields(prevState => ({...prevState, showSensitiveFields: !formFields.showSensitiveFields}))
	
    const checkNumber = (event) => {
        const zip = new RegExp('^[0-9]{1,6}$');//6 digits only
        const cardNo = new RegExp('^[0-9 ]{1,19}$');//16 digits and 3 spaces
        const expDate = new RegExp('^[0-9\/]{1,5}$');//4 digits and a slash
        const cvv = new RegExp('^[0-9]{1,3}$');//3 digits only
        let name = event.target.name;
        let val = event.target.value;
         if(name ==="zipcode"){
            if(zip.test(val)||val===''){
                setFormFields(prevState => ({...prevState, [name]: val}))
            }
         }else if(name ==="cardNo"){
            if(cardNo.test(val)||val===''){
                setFormFields(prevState => ({...prevState, [name]: val}))
            }
         }else if(name ==="expDate"){
            if(expDate.test(val)||val===''){
                setFormFields(prevState => ({...prevState, [name]: val}))
            }
         }else if(name ==="cvv"){
            if(cvv.test(val)||val===''){
                setFormFields(prevState => ({...prevState, [name]: val}))
            }
         }
     }

    const alphabetsOnly = (event) => {
        const abc = new RegExp('^[a-zA-Z ]{1,}$');//abcs only, at least 1
        let name = event.target.name;
        let val = event.target.value;
        if(abc.test(val)||val===''){
			setFormFields(prevState => ({...prevState, [name]: val}))
        }
    }
    
        let textColor = props?.darkMode? 'white':'black';
		const greyBoxCSS = {
			display:'inline-block',
			height:'20px',
			width:'100px',
			backgroundColor:'#c9c9c9'
		}

        return (
            <div style={{color:`${textColor}`}}>
                <Row className="my-3">
                    <Col lg={8}>
                        <Form noValidate validated={formFields.validated} onSubmit={submitHandler}>
                            {/* Travel Details */}
                            <h3>Travel Details</h3>
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="fromDate">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        name='fromDate'
                                        value={formFields.fromDate}
                                        onChange={onChangeHandler}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6" controlId="toDate">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        name='toDate'
                                        value={formFields.toDate}
                                        onChange={onChangeHandler}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="countries">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" name="country" value={formFields.country} required onChange={onChangeHandler} >
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea</option>
                                        <option value="China">China</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <h3>Billing Details</h3>
                            {/* Name */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="fName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Jackie"
                                        value={formFields.firstName} name="firstName" onChange={alphabetsOnly}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6" controlId="lName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Chan"
                                        value={formFields.lastName} name="lastName" onChange={alphabetsOnly}
                                    />
                                    <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            {/* Email */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required name='email' value={formFields.email} onChange={onChangeHandler}/>
                                </Form.Group>
                            </Form.Row>
                            {/* Address */}
                            <Form.Group controlId="Address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Blk 123 Tampines Road" required name='address' value={formFields.address} onChange={onChangeHandler}/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required value={formFields.city} name="city" onChange={alphabetsOnly}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" controlId="State">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required value={formFields.stateOfCtry} name="stateOfCtry" onChange={alphabetsOnly}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" controlId="zipcode">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="text" placeholder="Zipcode" name="zipcode" value={formFields.zipcode} required onChange={checkNumber}/>
                                    <Form.Text style={{color:`${textColor}`}}>
                                        6 digits only
                                    </Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <h3>Payment Details</h3>

                            <Form.Group>
                                <Form.Label >Card Type</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Credit Card"
                                    name="payment"
                                    id="Radios1"
									required
                                    onClick={() => cardTypeHandler('Credit Card')}
                                    feedback="Please choose one"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Debit Card"
                                    name="payment"
                                    id="Radios2"
									required
                                    onClick={() => cardTypeHandler('Debit Card')}
                                    feedback="Please choose one"
                                />
                                
                            </Form.Group>
                            {/* Name */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="firstNameCard">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Jackie"
                                        value={formFields.firstName} name="firstName" onChange={alphabetsOnly}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6" controlId="lastNameCard">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Chan"
                                        value={formFields.lastName} name="lastName" onChange={alphabetsOnly}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            {/* Card No */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="cardNo">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" required name="cardNo" value={formFields.cardNo} onChange={checkNumber}/>
                                    <Form.Text style={{color:`${textColor}`}}>
                                        16 digits
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            {/* Card Details */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="expireDate">
                                    <Form.Label>Expiration Date</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Month/Year"
                                        name="expDate" value={formFields.expDate} onChange={checkNumber}
                                    />
                                    <Form.Text style={{color:`${textColor}`}}>
                                        Example: 06/13
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" controlId="cvv">
                                    <Form.Label xs="12">CVV</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder=""
                                        name="cvv" value={formFields.cvv} onChange={checkNumber}
                                    />
                                    <Form.Text style={{color:`${textColor}`}}>
                                        The 3 numbers back of the card
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
							{formFields.formSuccess && <Alert variant='success'>Your trip has been booked!</Alert>}

                            {/* Submit */}
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="I Agree to the terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>

                    {/* Confirmation */}
                    <Col lg={4} >
                        <div className="iti">
                    <h3>Hi {formFields.firstName} {formFields.lastName}</h3>
                    <p>Your trip is from {formFields.fromDate ? dayjs(formFields.fromDate).format('DD/MM/YYYY') : '01/01/2024'} to {formFields.toDate ? dayjs(formFields.toDate).format('DD/MM/YYYY') : '01/01/2024'}, to {formFields.country}.</p>
                    <p className='mb-0'>Your billing details are:</p> 
                    <p className='my-0'> Email: {formFields.email}</p>
                    <p className='mt-0'> Address: {formFields.address} {formFields.city} {formFields.stateOfCtry} {formFields.zipcode}</p>
                    <p> You have chosen to pay by: {formFields.cardType}.</p>

                    <p className='my-0'>Check your details by clicking below</p>
                    <Button variant="outline-primary" size="sm" onClick={showHide} className="my-1">{formFields.showSensitiveFields ? "Hide" : "Show"}</Button>
                    {/*Hiding and showing like below is not secure but don't want effort to go to waste */}
                    <p className='my-0'>Card No: 
						{formFields.showSensitiveFields && formFields.cardNo}
						{!formFields.showSensitiveFields && <span style={greyBoxCSS}></span>}
                    </p>
                    <p className='my-0'>Expiration Date: 
						{formFields.showSensitiveFields && formFields.expDate}
						{!formFields.showSensitiveFields && <span style={greyBoxCSS}></span>}
                    </p>
                    <p className='mt-0'>CVV: 
						{formFields.showSensitiveFields && formFields.cvv}
						{!formFields.showSensitiveFields && <span style={greyBoxCSS}></span>}
                    </p>
                    
                    <p> Enjoy your trip!</p>
                    </div>
                    </Col>
                </Row>



            </div>
        )
}
export default BookNow
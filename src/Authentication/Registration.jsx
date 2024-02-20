import React, { useState } from 'react'
import ModalCom from '../commonComp/ModalCom'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputFieldErrorMsg from '../commonComp/InputFieldErrorMsg';
export default function Registration(props) {
  const { handleFalseModal, openModal, openLogin } = props;
  const [registerData, handleRegister] = useState({});
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    console.log('regiterData', registerData)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true)
    }

  }
  const handleAnswers = (inputType) => {
    handleRegister({
      ...registerData,
      [inputType.target.name]: inputType.target.value
    })
  }

  return (
    <div>
      <ModalCom
        modalTitle='Registration'
        handleCloseModal={handleFalseModal}
        isOpen={openModal}
        closeTitle='Close'
        submitTitlte={'Register'}
        handleSubmitModal={handleSubmit}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name='firstName'
              onChange={handleAnswers}
              required />
            <InputFieldErrorMsg />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiclastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name="LastName"
              onChange={handleAnswers}
              required />
              <InputFieldErrorMsg />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="Number" placeholder="Enter phone" name="phone"
              onChange={handleAnswers}
              required />
            <InputFieldErrorMsg />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"
              onChange={handleAnswers}
              required />
                        <InputFieldErrorMsg />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password'
              onChange={handleAnswers}
              required />
            <InputFieldErrorMsg />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Terms and Conditions" name='termsAndConditions'
              onChange={handleAnswers}
              required />
            <InputFieldErrorMsg />
          </Form.Group>
        </Form>
        <Row style={{ paddingTop: '20px', position: 'relative' }}>
          <Col sm={8} style={{ position: 'absolute', top: '3.5rem' }}>
            <p> Go to
              <span style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => {
                  openLogin();
                  handleFalseModal();
                }}
              >
                {' '}Login
              </span>
            </p>
          </Col>
        </Row>
      </ModalCom>
    </div>
  )
}

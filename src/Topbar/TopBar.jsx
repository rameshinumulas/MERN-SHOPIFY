import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Login from '../Authentication/Login';
import Registration from '../Authentication/Registration';


function TopBar() {
  const [openModal, setModal] = useState(false)
  const [registerModal, setRegister] = useState(false)
  return (
    <Navbar className="bg-primary">
      <Container className='me-0'>
        <Navbar.Brand href="#home" className='text-white'>Easy Shop In</Navbar.Brand>
        <Navbar.Toggle />
        <InputGroup className="">
        <Form.Control
          placeholder="Search product..."
          aria-label="Search product..."
          aria-describedby="basic-addon2"
        />
        <Button id="button-addon2">
          Search
        </Button>
      </InputGroup>
        <Navbar.Collapse className="justify-content-evenly">
          <Navbar.Text>
            <Button type="submit" onClick={() => setModal(true)}>Login</Button>
          </Navbar.Text>
          <Navbar.Brand className='ms-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
      {openModal && <Login handleFalseModal={() => setModal(false)}
        openModal={openModal}
        openRegistration={() => setRegister(true)}
      />}
      {registerModal && <Registration
        handleFalseModal={() => setRegister(false)}
        openModal={registerModal}
        openLogin={() => setModal(true)}
      />}
    </Navbar>
  );
}

export default TopBar;
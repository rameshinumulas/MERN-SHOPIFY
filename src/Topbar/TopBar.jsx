import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Login from '../Authentication/Login';
import Registration from '../Authentication/Registration';
import { useSelector } from 'react-redux';
import Profile from '../UserInfo/Profile';


function TopBar() {
  const navigate = useNavigate();
  const { profileInfo } = useSelector(state => state)
  const [openModal, setModal] = useState(false)
  const [registerModal, setRegister] = useState(false)
  return (
    <Navbar className="bg-primary">
      <Container className='me-0'>
        <Navbar.Brand href="/" className='text-white fw-bold fs-4'>Vizag Shopper's Hub</Navbar.Brand>
        <Navbar.Toggle />
        <InputGroup className="" style={{ width: '50%' }}>
          <Form.Control
            placeholder="Search product..."
            aria-label="Search product..."
            aria-describedby="basic-addon2"
          />
          <Button id="button-addon2" className='fw-bold fs-5 button-bg'>
            Search
          </Button>
        </InputGroup>
        <div className='text-center ps-5' onClick={() => navigate('/viewProducts')}>
          <h4 className='fw-bold fs-5 text-white mb-0' role='button'>All Products</h4>
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {profileInfo?.userLogin ? (
              <>
                <Profile userDetails={profileInfo?.profile} />
              </>
            ) : (
              <>
                <Button type="submit" onClick={() => setModal(true)}>Login</Button>
              </>
            )}
          </Navbar.Text>
          <Navbar.Brand className='ms-3'>
            <svg class="GAbRIN" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="cziJ98" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
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
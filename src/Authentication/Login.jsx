import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalCom from '../commonComponents/ModalCom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Registration from './Registration';
import InputFieldErrorMsg from '../commonComponents/InputFieldErrorMsg';
import { dataClearAction, userLoginCheck } from '../redux/actions';



export default function Login(props) {
  const { handleFalseModal, openModal, openRegistration } = props;
  const [loginInfo, handleLoginInfo] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const { profileInfo, profileInfoAction } = useSelector(state => state);


  useEffect(() => {
    dispatch(dataClearAction({ profileInfo: {} }));
}, [openModal, dispatch])

  useEffect(() => {
    if(profileInfoAction?.loading === false && profileInfoAction?.success === true && profileInfo?.userLogin) {
      handleFalseModal();
    }
  }, [profileInfoAction, handleFalseModal, profileInfo])
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true)
      dispatch(userLoginCheck(loginInfo));
    }
  }
  return (
    <div>
      <ModalCom
        modalTitle='Login'
        handleCloseModal={handleFalseModal}
        isOpen={openModal}
        closeTitle='Close'
        submitTitlte={'Login'}
        handleSubmitModal={handleSubmit}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text
           aria-label="Checkbox for following text input"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </InputGroup.Text>
          <Form.Control
            aria-label="Text input with checkbox"
            placeholder='Enter username or email...'
            onChange={(e) => handleLoginInfo({ ...loginInfo, email: e.target.value  })}
            value={loginInfo?.email}
            type="email"
            required
          />
          <InputFieldErrorMsg />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text aria-label="Radio button for following text input" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
          </InputGroup.Text>
          <Form.Control aria-label="Text input with radio button"
            placeholder='Enter password...'
            type='password'
            onChange={(e) => handleLoginInfo({ ...loginInfo, password: e.target.value  })}
            value={loginInfo?.password}
            required

          />
          <InputFieldErrorMsg />
        </InputGroup>
        <p style={{ color: 'red', marginBottom: '0px' }} >{!profileInfo?.userLogin && profileInfo?.message}</p>
        </Form>
        <Row style={{ paddingTop: '20px', position: 'relative' }}>
          <Col sm={8} style={{ position: 'absolute', top: '3.5rem' }}>
          <p> Don't have account {' '}
          <span style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              openRegistration();
              handleFalseModal();
            }}
          >
            Register here
          </span>
          </p>
          </Col>
        </Row>
      </ModalCom>
      {loginInfo?.openRegitration && (
        <Registration
         openModal={loginInfo?.openRegitration}
         handleFalseModal={handleFalseModal}
        />
      )}
    </div>
  )
}

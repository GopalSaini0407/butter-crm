import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilEnvelopeClosed } from '@coreui/icons';

// import { baseURL } from '../../../constants'

import { baseURL } from '../constants';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
  
    if (!email) {
      setError('Please enter your email');
      return;
    }
  
    try {
      const response = await fetch(`${baseURL}api/v1/forget/password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'

        },
        body: JSON.stringify({ email }),
      });
  
      // Response text check
      const text = await response.text();
      // console.log("Raw Response:", text);
  
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error("Invalid JSON response from server");
      }
    //  console.log(data);
     const password_token=data.data.access_token;

    //  console.log(password_token);
        console.log(response.ok);

      if (response.ok) {
        setMessage(data.message || 'OTP has been sent to your email');
        localStorage.setItem("password_token",password_token);
        navigate('/password-verification');

      } else {
        setError(data.message || 'Something went wrong. Please try again');
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || 'Failed to connect to the server. Please try again later.');
    }
  };
  

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h2>Forgot Password</h2>
                    <p className="text-body-secondary">Enter your email to receive an OTP for password reset</p>
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Submit
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/login">
                          <CButton color="link" className="px-0">Back to Login</CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Need Help?</h2>
                    <p>
                      Enter your email, and we will send you an OTP for password reset. If you face any issues, contact our support.
                    </p>
                    <Link to="/register">
                      <CButton color="light" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPassword;

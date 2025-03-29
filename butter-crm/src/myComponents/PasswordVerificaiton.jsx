import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { cilShieldAlt } from '@coreui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { baseURL } from '../constants';

const PasswordVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const OTP = otp.join('');

    console.log("Entered OTP length:", OTP.length);

    if (OTP.length !== 4) {
      setError("Invalid OTP, please enter a 4-digit code.");
      console.log("OTP is invalid:", OTP);
      return; // Stop execution if OTP is invalid
    }

    try {
      const response = await fetch(`${baseURL}api/v1/verify/otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({ OTP }),
      });

      const data = await response.json();

      if (response.status === 400) {
        console.log("Error:", response.status);
        setError(data.message || "Invalid OTP.");
      } else if (response.status === 200) {
        console.log("Success:", response.status);
        setMessage("OTP verified successfully!");
      } else {
        setError("Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to verify OTP. Please try again.");
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
                    <h1 className="text-center">OTP Verification</h1>
                    <p className="text-body-secondary text-center">
                      Enter the 4-digit code sent to your email
                    </p>
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="d-flex justify-content-center gap-2">
                      {otp.map((digit, index) => (
                        <CFormInput
                          key={index}
                          className="otp-input text-center"
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                        />
                      ))}
                    </div>
                    <CRow className="mt-4">
                      <CCol xs={12} className="text-center">
                        <CButton color="primary" className="px-4" type="submit">
                          Verify
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Secure Your Account</h2>
                    <p>
                      Enter the OTP sent to your email to verify your identity. If you didn't receive it, request a new one.
                    </p>
                    <Link to="/resend-otp">
                      <CButton color="light" className="mt-3" active tabIndex={-1}>
                        Resend OTP
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

export default PasswordVerification;

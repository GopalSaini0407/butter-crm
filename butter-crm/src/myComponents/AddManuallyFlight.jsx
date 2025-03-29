import React, { useState } from 'react'
import { CButton,CRow, CCard, CCardBody, CCardHeader, CCardText, CCardTitle,CFormCheck ,CCol,CFormLabel,CFormInput,CFormFeedback} from '@coreui/react'
import { func } from 'prop-types'

export default function AddManuallyFlight() {



  return (
    <div>
   <CCard>
      <CCardHeader>Add Flight Manually</CCardHeader>
      <CCardBody>
        <CCardText>
          <p className='mb-2 fw-bold'> Fligh Info</p>
            <CRow>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Flight Number</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>      
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Airline Code</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>    
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Airline Name</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <p className='my-2 mt-3 fw-bold' >Departure Details</p> 
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Airport Name (Departure)</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol> 
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">IATA Code</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol> 
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Flight Date</CFormLabel>
              <CFormInput type="date" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol> 
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Departure Time</CFormLabel>
              <CFormInput type="date" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <p className='mt-3 mb-2 fw-bold'> Arrival Details</p>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Airport Name (Arrival)</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">IATA Code</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Flight Date</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Arrival Time</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={3} className='d-flex align-items-center mt-3'>
            <CButton color="primary" href="#">
              Save Flight
            </CButton>
            </CCol>
            </CRow>
         
          </CCardText>
   
      </CCardBody>
    </CCard>
    </div>
 
  )
}

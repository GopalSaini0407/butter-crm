
import { useState } from 'react';
import { 
  CButton, 
  CModal, 
  CModalHeader, 
  CModalTitle, 
  CModalBody, 
  CModalFooter 
} from '@coreui/react';
import CIcon from '@coreui/icons-react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import {
   
  cilPlus,
  cilFile
} from '@coreui/icons'
import '@coreui/coreui/dist/css/coreui.min.css';

import { Link } from 'react-router-dom';

export default function AddItineraries() 
    {
        const [visible, setVisible] = useState(false);
        const [validated, setValidated] = useState(false)
        const handleSubmit = (event) => {
          const form = event.currentTarget
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          setValidated(true)
        }

        return(
              <div className='add-itinery'>
            <div className='d-flex align-items-center justify-content-between'>
            <h3>Create Itinerary</h3>
            </div>
            <CRow>
                <CCol md={8}>
                <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
              <CCol md={12}>
              <CFormLabel htmlFor="validationCustom02">Itinerary Name</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="Please type your tour name..." Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
      
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Tour start</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="Tour starts from" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>

            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom02">Tour End</CFormLabel>
             
              <CFormInput type="text" id="validationCustom02" placeholder="Tour ends" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={4} className='d-flex flex-column'>
              <CFormLabel htmlFor="validationCustom02">Tour Duration</CFormLabel>
              <div className='d-flex'>
              <CFormInput type="text"  placeholder="No. of Night" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              <CFormInput type="text"  placeholder="No. of Day" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </div>
            </CCol>
            <CCol md={8}>
              <CFormLabel htmlFor="validationCustom02">Tour Destinations</CFormLabel>
             
              <CFormInput type="text"  placeholder="Search Destination name here..." Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={4}>
            <CFormLabel htmlFor="validationCustom02">Tour Includes</CFormLabel>
            <div className='d-flex flex-column'>
            <CFormCheck inline id="inlineCheckbox1" value="option1" label="Flights"/>
             <CFormCheck inline id="inlineCheckbox2" value="option2" label="Accomodation"/>
             <CFormCheck inline id="inlineCheckbox3" value="option3" label="Local Transfer"/>
            </div>
            </CCol>
             
             <CCol md={4}>
             <CFormLabel htmlFor="validationCustom02">Choose Feature Image (Optional)</CFormLabel>
             <CFormInput type="file"  placeholder="Search Destination name here..." Value="" required />
             <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
              <CButton className='btn btn-primary'> Add Overview </CButton>
             </CCol>
             <CCol md={12}>
             <CFormLabel htmlFor="validationCustom02"><span className='text-danger'>Note</span>: Choose feature image</CFormLabel>
              </CCol>
            <CCol xs={12} className="text-end">
              <CButton color="primary" type="submit">
                Save & Next
              </CButton>
            </CCol>
      
             </CForm>
                </CCol>
                <CCol md={4}>
                    
                </CCol>
            </CRow>
            
             </div>
        )

    }
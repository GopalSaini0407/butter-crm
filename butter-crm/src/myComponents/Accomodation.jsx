
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
  cilFile,
  cilStar
} from '@coreui/icons'
import '@coreui/coreui/dist/css/coreui.min.css';
import { DayCard } from './DayCard';
import { Link } from 'react-router-dom';
import StarRating from './RatingStar';
export default function Accomodation() 
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
            <h5>Itinerary Accomodation</h5>
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
              <CFormLabel htmlFor="validationCustom02">Search Hotel/Accomodation Name</CFormLabel>
              <div className='d-flex align-items-center justify-content-center'>
              <CFormInput type="text" id="validationCustom02" placeholder="Please type your tour name..." Value="" required />
              <CFormCheck inline id="inlineCheckbox1" value="option1" className='w-100 ps-5' label="Similar Hotel"/>
              </div>
             
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={12}>
            <CFormLabel htmlFor="validationCustom02">Select Days*</CFormLabel>
            <div className='d-flex'>
            <CFormCheck inline id="inlineCheckbox1" value="option1" label="Day 1"/>
             <CFormCheck inline id="inlineCheckbox2" value="option2" label="Day 2"/>
             <CFormCheck inline id="inlineCheckbox3" value="option3" label="Day 3"/>
             <CFormCheck inline id="inlineCheckbox4" value="option4" label="Day 4"/>
             <CFormCheck inline id="inlineCheckbox5" value="option5" label="Day 5"/>
             <CFormCheck inline id="inlineCheckbox6" value="option6" label="Day 6"/>
            </div>
            </CCol>

            <CCol md={6} className='d-flex flex-column'>
            <CFormLabel htmlFor="validationCustom02">Accommodation Star</CFormLabel>
          {/* <div className='d-flex gap-2'> 
          <CIcon icon={cilStar} />
            <CIcon icon={cilStar} />
            <CIcon icon={cilStar} />
            <CIcon icon={cilStar} />
            <CIcon icon={cilStar} />
          </div> */}
          <StarRating/>
            </CCol>

            <CCol md={6}>
            <CFormLabel htmlFor="validationCustom02">Accommodation Type*  </CFormLabel>
            <CFormSelect id="validationCustom04">
          <option>Select Accommodation Type</option>
          <option>Hotel</option>
          <option>Resort</option>
          <option>HomeStay</option>
          <option>FarmStay</option>
         </CFormSelect>
        <CFormFeedback invalid>Please provide a valid type</CFormFeedback>
            </CCol>

            <CCol md={4}>
            <CFormLabel htmlFor="validationCustom02">Destination*  </CFormLabel>
            <CFormSelect id="validationCustom04">
          <option>Select Location</option>
          <option>Baku</option>
          <option>shaki</option>
         </CFormSelect>
        <CFormFeedback invalid>Please provide a valid type</CFormFeedback>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Region</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="Region" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Country*</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="Country" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
   
            <CCol md={6}>
         <CFormLabel htmlFor="validationCustom02">Address*</CFormLabel>
        <CFormTextarea id="validationCustom02" placeholder="address" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={6}>
         <CFormLabel htmlFor="validationCustom02">Description</CFormLabel>
        <CFormTextarea id="validationCustom02" placeholder="description" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

             <CCol md={4}>
             <CFormLabel htmlFor="validationCustom02">Accommodation Image</CFormLabel>
             <CFormInput type="file"  placeholder="Search Destination name here..." Value="" required />
             <CFormFeedback valid>Looks good!</CFormFeedback>
             <div>no imge</div>
             </CCol>




            <CCol xs={12} className="text-end">
              <CButton color="primary" type="submit">
                Save
              </CButton>
            </CCol>
      
             </CForm>
                </CCol>
                <CCol md={4}>
                    <DayCard/>
                </CCol>
            </CRow>

             </div>
        )
    }

import { useState } from 'react';
import { 
 CRow,
 CCol,
 CFormLabel,
 CFormInput,
 CFormFeedback
} from '@coreui/react';

export default function Price()
{
    return(
         <CRow>
              <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Per person on Single Occupancy</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Per person on Double Occupancy</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Per person on Triple Occupancy</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Per Child with Bed 6-11 yrs</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Per Child No Bed 0-5 yrs</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Per Infrant</CFormLabel>
              <CFormInput type="number" id="validationCustom02" placeholder="" Value="" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>

         </CRow>
      
    )
}
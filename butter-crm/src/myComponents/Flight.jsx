import React,{useState} from 'react'
import { CButton,CRow, CCard, CCardBody, CCardHeader, CCardText, CCardTitle,CFormCheck ,CCol,CFormLabel,CFormInput,CFormFeedback} from '@coreui/react'
import { func } from 'prop-types'
import AddManuallyFlight from './AddManuallyFlight';
export default function Flight() {
    const [manual,setManual]=useState(false);
    console.log(manual);
  return (
    <div>
     <div className='d-flex justify-content-between align-items-center'>
        <span className='d-flex gap-3'> 
        <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Originating Flight" defaultChecked/>
        <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Returning Flight"/>
        </span>
        <button className='btn btn-primary' onClick={()=>setManual(!manual)}>Add Manually </button>
        </div>
{
    (manual)? <AddManuallyFlight/>
    :
    <CCard>
      <CCardHeader>Origination Flight</CCardHeader>
      <CCardBody>
        <CCardText>
            <CRow>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Airline Code</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="AI" Value="" required /> 
              <span><span className='text-danger'>EX:-</span>Code I5-748 <b>I5</b> is the Airline code</span>            
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>      
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Flight Number</CFormLabel>
              <CFormInput type="text" id="validationCustom02" placeholder="748" Value="" required /> 
              <span><span className='text-danger'>EX:-</span>Code I5-748 <b>748</b> is the Airline No.</span>            
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>    
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustom02">Flight Date</CFormLabel>
              <CFormInput type="date" id="validationCustom02" placeholder="AI" Value="" required /> 
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol> 
            <CCol md={1} className='d-flex align-items-center'>
            <CButton color="primary" href="#">
              Search
            </CButton>
            </CCol>
            </CRow>
         
          </CCardText>
   
      </CCardBody>
    </CCard>
}
    
    </div>
 
  )
}

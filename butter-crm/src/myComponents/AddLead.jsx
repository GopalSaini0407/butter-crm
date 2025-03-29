import { CButton, COffcanvas, COffcanvasHeader, COffcanvasBody } from "@coreui/react";
import CIcon from '@coreui/icons-react'
import React, { useState } from 'react'
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
    cilX,
    
  } from '@coreui/icons'
  
  import { FaPlus } from "react-icons/fa";
import "@coreui/coreui/dist/css/coreui.min.css"; // Ensure CoreUI styles are included
import {
   
    cilPlus
  } from '@coreui/icons'
const AddLead = () => {
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
  return (
    <div>
      {/* Button to Open Offcanvas */}
      <CButton color="primary" onClick={() => setVisible(true)}>
      <span><FaPlus /></span> <span>New Lead</span>
      </CButton>

      {/* Right Side Offcanvas */}
      <COffcanvas
        placement="end" // "end" means right side
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
            <div className="d-flex justify-content-between align-items-center w-100">
            <h5>Add New Leads</h5>
          <CButton color="danger" onClick={()=>setVisible(false)} className="btn">
          <CIcon className="text-white fw-bold" icon={cilX} />
        </CButton>
            </div>
        
          <CButton close onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
         <CCol><small>Leads information</small></CCol>
        <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom04">Salutation</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>Mr.</option>
          <option>Mrs.</option>
          <option>Ms.</option>
          <option>Dr.</option>
          <option>Prof.</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6} className="d-flex flex-column">
        <CFormLabel htmlFor="validationCustom02">Lead Owner</CFormLabel>
        {/* <CFormInput type="text" id="validationCustom02" Value="Otto" required /> */}
        {/* <CFormFeedback valid>Looks good!</CFormFeedback> */}
        <CFormLabel htmlFor="validationCustom02">SWATI KHOWAL</CFormLabel>

      </CCol>
      
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Creation</CFormLabel>
        <CFormInput type="text" id="validationCustom02" placeholder="Select source" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Source</CFormLabel>
        <CFormInput type="text" id="validationCustom02" placeholder="Select source Medium" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">First Name</CFormLabel>
        <CFormInput type="text" id="validationCustom02" placeholder="first Name" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Last Name</CFormLabel>
        <CFormInput type="text" id="validationCustom02" placeholder="last Name" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Title</CFormLabel>
        <CFormInput type="text" id="validationCustom02" placeholder="last Name" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Company</CFormLabel>
        <CFormInput type="text" id="validationCustom02" placeholder="last Name" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
         
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput type="email" id="validationCustom02" placeholder="email" Value="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
         
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom04">Industry</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>Agriculture</option>
          <option>Apparel</option>
          <option>Banking</option>
          <option>Chemical</option>
          <option>Constraction</option>
          <option>Education</option>   
         <option>Communications</option>
         <option>Communications</option>
         <option>Communications</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">Website</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">No of Employees</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">No of Employees</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">Phone</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom04">Rating</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>Hot</option>
          <option>Cold</option>
          <option>Category 'A'</option>
          <option>Category 'B'</option>
          <option>Category 'C'</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">Mobile</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom04">Lead Status</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>Contacted</option>
          <option>Open</option>
          <option>Qulified</option>
          <option>Unqulified</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Date of Birth</CFormLabel>
        <CFormInput type="date" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Date of Travel</CFormLabel>
        <CFormInput type="date" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationCustom03">Destination(s)</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>

  
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">No of Nights</CFormLabel>
        <CFormInput type="number" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom05">No of Pax</CFormLabel>
        <CFormInput type="number" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>

      <CCol><small>Address Information</small></CCol>

      <CCol md={12}>
        <CFormLabel htmlFor="validationCustom03">Mailing Street</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required placeholder="search for location" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Mailing Country</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required placeholder="search for location" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Mailing State</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required placeholder="search for location" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Mailing City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required placeholder="search for location" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Mailing Zip</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required placeholder="search for location" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>

      <CCol md={12} ><small>Address Information</small></CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Mailing Zip</CFormLabel>
        <CFormInput type="file" id="validationCustom03" required placeholder="Add Attachment" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={12}><small>Additional information</small></CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom04">Segment</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option>Select</option>
          <option>B2C</option>
          <option>B2B</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Destination</CFormLabel>
        <CFormInput type="file" id="validationCustom03" required placeholder="destination" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Destination</CFormLabel>
        <CFormInput type="textarea" id="validationCustom03" required placeholder="description" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">No Of Passengers</CFormLabel>
        <CFormInput type="number" id="validationCustom03" required placeholder="no of passengers" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Date of Travel</CFormLabel>
        <CFormInput type="date" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={6}>
      <CFormLabel htmlFor="validationCustom03">BNPL</CFormLabel>
      <div className="d-flex">
      <CFormCheck id="flexCheckDefault" label="Yes"/>
      <CFormCheck id="flexCheckChecked" label="No" className="mx-3"/>
        </div> 
      <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>

      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Campaign</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol> <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Experience</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      {/* <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol> */}
      <CCol xs={12} className="text-end">
      
        <CButton color="primary" type="submit">
          Add
        </CButton>
      </CCol>
    </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </div>
  );
};

export default AddLead;

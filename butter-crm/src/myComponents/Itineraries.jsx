import React from 'react'
import CIcon from '@coreui/icons-react'
import { Link } from "react-router-dom";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormInput,
  CFormLabel,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  

} from '@coreui/react'
import {
  cilFile,
  cilBriefcase,
  cilLoopCircular,
  cilFilter,
  cilUser,
  cilPlus,
  cilColorBorder
} from '@coreui/icons'

import { DocsComponents, DocsExample } from 'src/components'

import { useNavigate } from 'react-router-dom';

export default function Itineraries() {

  const navigate=useNavigate();

    return (
      <div className="accounts">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Itineraries</h3>
        <button title='import PersonAccont'>
          <Link to="/addCSV" className='text-white'><CIcon icon={cilFile} /></Link>
          </button>
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex align-items-center">
                <span className='briefcase bg-primary me-2'><CIcon icon={cilUser} /> </span>
                  <span>Itineraries Builder</span>
              </div>
              <div className="right-account-detail">
                   <CForm>
                    <div className="mb-3 d-flex align-items-center">
                      <CFormInput type="text" id="exampleFormControlInput1" placeholder="search..."/>
                      <CButton color="primary" className='ms-2' onClick={() => setVisible(true)}>
                      <span onClick={()=>navigate('/additineraries')}><CIcon icon={cilPlus} /></span>
                      </CButton>
                    </div>
                  </CForm>
              
            </div>
            </div>
          </CCardHeader>
          <CCardBody>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Itinerary Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Starts From</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Destinations</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Durations</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Created On</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell onClick={()=>navigate('/updateitineraries')}                    >
                      <div style={{ cursor:"pointer"}} className='text-primary'>
                      <span>imgicon</span>
                      <span>Baku holiday</span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>Baku</CTableDataCell>
                    <CTableDataCell>Sheki</CTableDataCell>
                    <CTableDataCell>5N/6D</CTableDataCell>
                    <CTableDataCell>
                      <span>05 Feb 2025</span>
                      <span>
                      <CDropdown variant="nav-item list-style-none">
                  <CDropdownToggle color="secondary">Action</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">
                    <CIcon icon={cilColorBorder} /> Edit
                    </CDropdownItem>  
                    <CDropdownItem href="#">
                     Preview & Generate Pdf
                    </CDropdownItem>  
                    <CDropdownItem href="#">
                     E-mail Itinerary
                    </CDropdownItem>  
                    <CDropdownItem href="#">
                     Copy
                    </CDropdownItem>  
                    <CDropdownItem href="#">
                     Delete
                    </CDropdownItem>  
                  </CDropdownMenu>
                </CDropdown>
                      </span>
                      </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            {/* </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
      </div>
    );
  }
  
  
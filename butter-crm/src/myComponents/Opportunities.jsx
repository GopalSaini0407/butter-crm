  
import React from 'react'
import CIcon from '@coreui/icons-react'

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
  CFormCheck,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import {
  cilFile,
  cilBriefcase,
  cilLoopCircular,
  cilFilter,
  cilSun
} from '@coreui/icons'

import { FaFileCsv } from "react-icons/fa";

import { DocsComponents, DocsExample } from 'src/components'


export default function Opportunities() {
    return (
      <div className="accounts leads">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Opportunity</h3>
          <button title='import Opportunites' className='btn btn-primary' >
          <FaFileCsv />
          </button>
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex aligh-items-center">
                <span className='briefcase bg-primary me-2 mt-3 text-white'><CIcon icon={cilSun} /> </span>
                <div>
                  <span>Opportunity</span>
                  <CForm>
                    <div className="mb-3">
                      <CFormInput type="text" id="exampleFormControlInput1" placeholder="search..."/>
                    </div>
                  </CForm>
                </div>
              </div>
              <div className="right-account-detail d-flex align-items-center justify-content-center">
               <span className='me-2 bg-secondary py-2 px-3 rounded-3 text-white'> <CIcon icon={cilLoopCircular} /> </span>
               <span className='px-2 me-2'><CIcon icon={cilFilter} /></span>
               <span>
               <CDropdown variant="nav-item list-style-none">
                  <CDropdownToggle color="primary">Settings</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">New</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
               </span>
            </div>
            </div>
          </CCardHeader>
          <CCardBody>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Opportunity Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Destination(s)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Account Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Account Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">State</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Sales Stage</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Travel Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Close Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Owner</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Creation</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Source</CTableHeaderCell>
                    <CTableHeaderCell scope="col">No Of Pax</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Territory Manager</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Update</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* <CTableRow>
                  </CTableRow>
                  */}
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
  
  
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
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import {
  cilFile,
  cilBriefcase,
  cilLoopCircular,
  cilFilter
} from '@coreui/icons'

import { FaUsers } from "react-icons/fa";
import { DocsComponents, DocsExample } from 'src/components'


export default function Suppliers() {
    return (
      <div className="accounts">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Suppliers</h3>
         
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex aligh-items-center">
                <span className='briefcase bg-primary me-2 mt-3 text-white'><FaUsers /></span>
                <div>
                  <span>Suppliers</span>
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
                    <CDropdownItem href="#">Action</CDropdownItem>
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
                    <CTableHeaderCell scope="col">Supplier Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Supplier Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Vivek</CTableDataCell>
                    <CTableDataCell>Airlines</CTableDataCell>
                    <CTableDataCell>1300 88 3000</CTableDataCell>
                    <CTableDataCell>viveksaini121004@gmail.com</CTableDataCell>
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
  
  
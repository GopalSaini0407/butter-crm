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

} from '@coreui/react'
import {
  cilFile,
  cilBriefcase,
  cilLoopCircular,
  cilFilter,
  cilUser
} from '@coreui/icons'

import { FaFileCsv ,FaUserTie} from "react-icons/fa";


import { DocsComponents, DocsExample } from 'src/components'


export default function PersonAccounts() {
    return (
      <div className="accounts person-account">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Account</h3>
        <button title='import person-account' className='btn btn-primary px-2'>
          <Link to="/addCSV" className='text-white'><FaFileCsv size={22}/></Link>
          </button>
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex aligh-items-center">
                <span className='briefcase bg-primary me-2 mt-3 text-white'><FaUserTie /> </span>
                <div>
                  <span>Person Accounts</span>
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
                    <CDropdownItem href="#">New View</CDropdownItem>
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
                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Owner</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Vivek</CTableDataCell>
                    <CTableDataCell>Saini</CTableDataCell>
                    <CTableDataCell>viveksaini121001@gmail.com</CTableDataCell>
                    <CTableDataCell>7291939349</CTableDataCell>
                    <CTableDataCell>7291939349</CTableDataCell>
                    <CTableDataCell>Reetika Sharma</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Vivek</CTableDataCell>
                    <CTableDataCell>Saini</CTableDataCell>
                    <CTableDataCell>viveksaini121001@gmail.com</CTableDataCell>
                    <CTableDataCell>7291939349</CTableDataCell>
                    <CTableDataCell>7291939349</CTableDataCell>
                    <CTableDataCell>Reetika Sharma</CTableDataCell>
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
  
  
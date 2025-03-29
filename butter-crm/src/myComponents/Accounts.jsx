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
} from '@coreui/icons'

import { DocsComponents, DocsExample } from 'src/components';


export default function Accounts() {
    return (
      <div className="accounts">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Account</h3>
          <button title='import Accont' className='btn bg-primary'>  
          <Link to="/addCSV" className='text-white'><CIcon icon={cilFile} /></Link>
          </button>
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex aligh-items-center">
                <span className='briefcase bg-primary text-white me-2 mt-3'><CIcon icon={cilBriefcase} /> </span>
                <div>
                  <span>Accounts</span>
                  <CForm>
                    <div className="mb-3">
                      <CFormInput type="text" id="exampleFormControlInput1" placeholder="search..."/>
                    </div>
                  </CForm>
                </div>
              </div>
              <div className="right-account-detail d-flex align-items-center justify-content-center">
                <span className='me-2'><button className='btn btn-secondary'>Merge Account</button></span>
               <span className='me-2 bg-secondary text-white py-2 px-3 rounded-3'> <CIcon icon={cilLoopCircular} /> </span>
               <span className='px-2 me-2'><CIcon icon={cilFilter} /></span>
               <span>
               <CDropdown variant="nav-item list-style-none">
                  <CDropdownToggle color="primary">Settings</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">New</CDropdownItem>
                   
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
                    <CTableHeaderCell scope="col">Account Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Billing Street</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Billing City</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Account Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Owner</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>7291939349</CTableDataCell>
                    <CTableDataCell>chawla colony ballabgarh faridabad haryana</CTableDataCell>
                    <CTableDataCell>Faridabad</CTableDataCell>
                    <CTableDataCell>Travel Agent</CTableDataCell>
                    <CTableDataCell>Reetika Sharma</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>7291939349</CTableDataCell>
                    <CTableDataCell>chawla colony ballabgarh faridabad haryana</CTableDataCell>
                    <CTableDataCell>Faridabad</CTableDataCell>
                    <CTableDataCell>Travel Agent</CTableDataCell>
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
  
  
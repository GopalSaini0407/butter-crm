  
import React from 'react'
import CIcon from '@coreui/icons-react'
import AddLead from './AddLead'
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
  cilPlus
} from '@coreui/icons'

import { MdLeaderboard } from "react-icons/md";
import { FaFileCsv,FaPlus } from "react-icons/fa";
import { DocsComponents, DocsExample } from 'src/components'


export default function Leads() {
    return (
      <div className="accounts leads">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Leads</h3>
        <button title='import lead' className='btn btn-primary'>
          <Link to="/addCSV" className='text-white'><FaFileCsv /></Link>
          </button>
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex aligh-items-center">
                <span className='briefcase bg-primary me-2 mt-3'><MdLeaderboard /> </span>
                <div>
                  <span>Leads</span>
                  <CForm>
                    <div className="mb-3">
                      <CFormInput type="text" id="exampleFormControlInput1" placeholder="search..."/>
                    </div>
                  </CForm>
                </div>
              </div>
              <div className="right-account-detail d-flex align-items-center justify-content-center">
                <span className='me-2 d-flex align-items-center'> <AddLead/></span>
               <span className='me-2 bg-secondary py-2 px-3 rounded-3'> <CIcon icon={cilLoopCircular} /> </span>
               <span className='px-2 me-2'><CIcon icon={cilFilter} /></span>
               <span>
               <CDropdown variant="nav-item list-style-none">
                  <CDropdownToggle color="primary">Settings</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">New View</CDropdownItem>
                    {/* <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem> */}
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
                    <CTableHeaderCell scope="col"><CFormCheck inline id="inlineCheckbox1" value="option1" label=""/></CTableHeaderCell>
                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">City of Orgin</CTableHeaderCell>
                    <CTableHeaderCell scope="col">New</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Travel Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">No of Pax</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Destination(s)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Segment</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Source Medium</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Convert Lead</CTableHeaderCell>
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
  
  
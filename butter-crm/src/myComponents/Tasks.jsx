  
import React from 'react'
import CIcon from '@coreui/icons-react'
import AddTask from './AddTask'
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
  cilCheckCircle
} from '@coreui/icons'

import { DocsComponents, DocsExample } from 'src/components'


export default function Tasks() {
    return (
      <div className="accounts leads">
        <div className='d-flex align-items-center justify-content-between'>
        <h3>Tasks</h3>
          <button title='import Accont' >
          <CIcon icon={cilFile} />
          </button>
        </div>
           <CRow>
             
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="left-account-detail d-flex align-items-center">
                <span className='briefcase bg-primary me-2 mt-3 text-white'><CIcon icon={cilCheckCircle} /> </span>
                  <span>Tasks</span>
                
              </div>
              <div className="right-account-detail d-flex align-items-center justify-content-center">
                <span className='me-2 d-flex align-items-center'> <AddTask/></span>
               <span className='me-2 bg-secondary py-2 px-3 rounded-3 text-white'> <CIcon icon={cilLoopCircular} /> </span>
               <span className='px-2 me-2'><CIcon icon={cilFilter} /></span>
               <span>
               <CDropdown variant="nav-item list-style-none">
                  <CDropdownToggle color="dark">View</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
               </span>
               <span>
               <CDropdown variant="nav-item list-style-none">
                  <CDropdownToggle color="primary">Settings</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
               </span>
            </div>
            </div>
          </CCardHeader>
          
        </CCard>
      </CCol>
    </CRow>
      </div>
    );
  }
  
  
import React from 'react'
import {CFormLabel,CFormInput,CFormFeedback,CFormCheck, CTab, CTabContent, CTabList, CTabPanel, CTabs,CRow,CCol, CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react'
import HtmlEditor from './simpleTextEditor';
import FilterCard from './FilterCard';

export default   function DayWise() {
  return (
    <div>
              <CCard>
      <CCardHeader as="h5" className='d-flex justify-content-between align-items-center'>
        <h4>Baku</h4>
        <CCol md={3}>
              <CFormInput type="text" id="validationCustom02" placeholder="Search point of Attraction" Value="" required />
            </CCol>
      </CCardHeader>
      <CCardBody>
        <CCardText>
        <CTabs activeItemKey={2}>
        <CRow>
            <CCol md={1}>
            <CTabList variant="pills d-flex flex-column">
        <CTab aria-controls="day1-tab-pane" itemKey={1}> 1</CTab>
        <CTab aria-controls="day2-tab-pane" itemKey={2}> 2</CTab>
        <CTab aria-controls="day3-tab-pane" itemKey={3}> 3</CTab>
        <CTab aria-controls="day4-tab-pane" itemKey={4}> 4</CTab>
        <CTab aria-controls="day5-tab-pane" itemKey={5}> 5</CTab>
        <CTab aria-controls="day6-tab-pane" itemKey={6}> 6</CTab>

      </CTabList>
            </CCol>
            <CCol md={11}>
      <CTabContent>
        <CTabPanel className="p-3" aria-labelledby="day1-tab-pane" itemKey={1}>
            <CRow>
            <CCol md={8}>
            <h6>Day overview Optional</h6>
            <HtmlEditor/>
         </CCol>
         <CCol md={4}>
            <h4>Day Accomodation</h4>
         </CCol>
         <CCol md={12}>
            <CFormLabel htmlFor="validationCustom02" className='d-flex justify-content-between'>
                <span>Filter by Type</span>
                <span>Clear Filter</span>
                </CFormLabel>
            <div className='mb-3 filter-check-text'>
            <CFormCheck inline id="inlineCheckbox1" value="option1" label="Building"/>
             <CFormCheck inline id="inlineCheckbox2" value="option2" label="Promenade"/>
             <CFormCheck inline id="inlineCheckbox3" value="option3" label="Monument"/>
             <CFormCheck inline id="inlineCheckbox4" value="option3" label="Monument"/>
             <CFormCheck inline id="inlineCheckbox5" value="option4" label="Tower"/>
             <CFormCheck inline id="inlineCheckbox6" value="option5" label="Public place"/>
             <CFormCheck inline id="inlineCheckbox7" value="option6" label="Museum"/>
             <CFormCheck inline id="inlineCheckbox8" value="option7" label="Temple"/>

            </div>
            </CCol>
            </CRow>
              <CRow>
                <CCol className='d-flex flex-wrap gap-1'>
                <FilterCard/>
                <FilterCard/>
                <FilterCard/>
                <FilterCard/>
                <FilterCard/>
                <FilterCard/>
                </CCol>
              </CRow>
        

        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="day2-tab-pane" itemKey={2}>
         day 2
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="day3-tab-pane" itemKey={3}>
        day 3
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="day4-tab-pane" itemKey={4}>
       day 4
        </CTabPanel><CTabPanel className="p-3" aria-labelledby="day5-tab-pane" itemKey={5}>
         day 5
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="day6-tab-pane" itemKey={6}>
          day 6
        </CTabPanel>
      </CTabContent>
      </CCol>
        </CRow>
    </CTabs>        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
    
  

    </div>

  )
}

// import React from 'react'
// import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react'

// export const CardHeader2Example = () => {
//   return (
//     <CCard>
//       <CCardHeader as="h5">Header</CCardHeader>
//       <CCardBody>
//         <CCardTitle>Special title treatment</CCardTitle>
//         <CCardText>
//           With supporting text below as a natural lead-in to additional content.
//         </CCardText>
//         <CButton color="primary" href="#">
//           Go somewhere
//         </CButton>
//       </CCardBody>
//     </CCard>
//   )
// }

import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import BasicDetail from './basicDetail'
import Accomodation from './Accomodation'
import DayWise  from './DayWise'
import Flight from './Flight'
import Transfers from './Transfers'
import InclusionAndExclusion from './InclusionAndExclusion'
import Price from './Price'
import GeneralTerm from './GeneralTerm'
import ViewItineries from './ViewItineries'

export default function UpdateItineraries()
{
    return(
        
        <CTabs activeItemKey={2}>
        <CTabList variant="underline-border">
          <CTab aria-controls="basic-tab-pane" itemKey={1}>Basic Detail</CTab>
          <CTab aria-controls="accomodation-tab-pane" itemKey={2}>Accomodation</CTab>
          <CTab aria-controls="days-tab-pane" itemKey={3}>Day Wise</CTab>
          <CTab aria-controls="flights-tab-pane" itemKey={4}>Flights</CTab>
          <CTab aria-controls="transfers-tab-pane" itemKey={5}>Transfers</CTab>
          <CTab aria-controls="inclusion&exclusion-tab-pane" itemKey={6}>Inclusions & Exclusion</CTab>
          <CTab aria-controls="price-tab-pane" itemKey={7}>Price</CTab>
          <CTab aria-controls="general-tab-pane" itemKey={8}>General Terms</CTab>
          <CTab aria-controls="view-tab-pane" itemKey={9}>View Itineray</CTab>
        </CTabList>
        <CTabContent>
          <CTabPanel className="p-3" aria-labelledby="basic-tab-pane" itemKey={1}>
          <BasicDetail/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="accomodation-tab-pane" itemKey={2}>
          <Accomodation/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="days-tab-pane" itemKey={3}>
          <DayWise/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="flights-tab-pane" itemKey={4}>
          <Flight/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="flights-tab-pane" itemKey={5}>
          <Transfers/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="flights-tab-pane" itemKey={6}>
          <InclusionAndExclusion/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="flights-tab-pane" itemKey={7}>
            <Price/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="flights-tab-pane" itemKey={8}>
          <GeneralTerm/>
          </CTabPanel>
          <CTabPanel className="p-3" aria-labelledby="flights-tab-pane" itemKey={9}>
          <ViewItineries/>
          </CTabPanel>
        </CTabContent>
      </CTabs>
    )
}
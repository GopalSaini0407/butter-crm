import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export default function FilterCard () {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src="https://picsum.photos/500/300" />
      <CCardBody>
        <CCardTitle>Old City Baku</CCardTitle>
        <CCardText>
          Old City or Inner City, Baku, Azerbaijan,1000
        </CCardText>
        <h6>Old City or Inner City is the historical core of Baku, the capital of...</h6>
      </CCardBody>
    </CCard>
  )
}

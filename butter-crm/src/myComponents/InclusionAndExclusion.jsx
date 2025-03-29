import React from 'react';
import { CButton,CRow, CCard, CCardBody, CCardHeader, CCardText, CCardTitle,CFormCheck ,CCol,CFormLabel,CFormInput,CFormFeedback} from '@coreui/react'
import HtmlEditor from './simpleTextEditor';
export default function InclusionAndExclusion()
{
    return (
        <div>
            <CRow>
                <CCol md={6}>
                    <h6>Inclusion</h6>
                   <HtmlEditor/>
                </CCol>
                <CCol md={6}>
                    <h6>Exclusion</h6>
                   <HtmlEditor/>
                </CCol>
                <CCol className='d-flex justify-content-end mt-3'>
                    <button className='btn btn-primary'>Save</button>
                </CCol>
            </CRow>
        </div>

    )
}
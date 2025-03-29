import HtmlEditor from "./simpleTextEditor"
import { CCol, CRow} from '@coreui/react'


export default function GeneralTerm()
{
    return(
        <div>
          <CRow>
           <CCol md={6}>
           <span>Note</span>
           <HtmlEditor/>
           </CCol>
           <CCol md={6}>
           <span>Cancellation Policy</span>
           <HtmlEditor/>
           </CCol>
           <CCol md={12}>
           <span>Terms & Conditions</span>
           <HtmlEditor/>
           </CCol>
           <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Save</button>
           </div>
           </CRow>
            
        </div>
    )
}
import CIcon from '@coreui/icons-react'
import {
    cilFile,
    cilBriefcase,
    cilLoopCircular,
    cilFilter,
    cilPlus,
    cilPhone
  } from '@coreui/icons'
  
export default function ItinaryDesignHeader()
{
    return(
        <div>

        <table className="w-100" style={{ background:"orange" }}>
            <tr>
                <td className="p-2">
                    <table className="w-100">
                        <tr>
                            <td rowspan="2" className="">
                            <img src={"https://picsum.photos/70/70"} className="rounded-circle overflow-hidden" alt="img 1" />
                            <span className="ps-3 text-white">Big Bang Trip Pvt Ltd</span>
                            </td>
                            
                            <td colspan="5" align="right" className="text-white"><span><CIcon icon={cilPhone    } /></span>
                            +91 9910682592
                            <table className="w-100">
                                <tr>
                                    <td align="right">operations@bigbangtrip.com</td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table style={{width:"100%"}}>
  <tr>
    <th>Trip Name:</th>
    <td className='fw-bold text-primary'>Baku holiday Swati</td>
    <th>Duration:</th>
    <td>5N/6N</td>
    <th>Start From:</th>
    <td>New Delhi</td>  
  </tr>
  <tr>
    <th>Places Covered:</th>
    <td>Baku,Sheki</td>
  </tr>
  <tr>
    <th>Package Id:</th>
    <td>32</td>
  </tr>
   </table>
        </div>
   
    )
}
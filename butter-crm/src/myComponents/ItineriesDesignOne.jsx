import {
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,


} from '@coreui/react'



import ItinaryDesignHeader from './ItinaryDesignHeader'
export default function ItineriesDesignOne()
{
    return(
        <div className='itineresDesignOne'>

<table border="0" style={{ minWidth:"100%", maxWidth:"600px" }}>
    <tr>
    <td>
      <table style={{ width:"100%"}}>
        <tr className='bg-success text-white'>
          <td className='text-primary'>Day 1: <span className='text-primary'>Baku</span> Stay at Atlas Hotel Baku </td>
        </tr>
        <tr>
          <td align="right" colspan="2" className='pt-2'>
            <img src={"https://picsum.photos/300/200"} alt="img 1" />
          </td>
        </tr>
        <tr>
          <td className='text-primary'>
            Activities/Places to see in Baku
          </td>
        </tr>
        <tr>
          <td>No Activity</td>
        </tr>

      </table>
    </td>
  </tr>
  <tr>
    <td>
      <table className='100%'>
        <tr>
          <td><span>imgIcon</span> <span className='text-primary'>Inclusion</span></td>
        </tr>
        <tr>
          <td>data</td>
        </tr>
       
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <table>
         <tr>
          <td><span>imgIcon</span> <span className='text-primary'>Exclusion</span></td>
        </tr>
      </table>
    </td>
  </tr>
 

</table>

        </div>
    )
}




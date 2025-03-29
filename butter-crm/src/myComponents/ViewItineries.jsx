import ItineriesDesignOne from "./ItineriesDesignOne"
import ItinaryDesignFooter from "./ItinaryDesignFooter"
import ItinaryDesignHeader from "./ItinaryDesignHeader"
import ItineriesDesignTwo from "./ItineriesDesignTwo"
import TablePdfDownload from './TablePdfDownload';
import React, { useRef } from 'react';

export default function ViewItineries()
{
  const tableRef = useRef(null);


    return(
        <div>
        <TablePdfDownload/>
        </div>
    )
}
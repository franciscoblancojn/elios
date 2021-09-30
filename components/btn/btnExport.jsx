import { useState, useEffect } from "react"
import exportFromJSON from 'export-from-json'  

import SvgDownload from "@/components/svg/download"

const BtnExpor = ({rows,lang}) => {
    const [showList, setShowList] = useState(false)
    const exportExcel = () => {
        setShowList(false)
        const fileName = (new Date).toISOString().split(" ").join("_")
        exportFromJSON({ data:rows, fileName, exportType:'xls' }) 
    }
    return (
        <div className="btnExport">
            <button  onClick={()=>{setShowList(!showList)}}>
                <SvgDownload/>
                {lang.btnExport.text}
            </button>
            <div className="listExport" hidden={!showList}>
                <div className="excel optionExport" onClick={exportExcel}>
                    <img src="/icons/excel.png" alt="excel" />
                    {lang.btnExport.excel}
                </div>
            </div>
        </div>
    )
}
export default BtnExpor
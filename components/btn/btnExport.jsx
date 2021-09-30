import { useState, useEffect } from "react"

import SvgDownload from "@/components/svg/download"

const BtnExpor = ({rows,lang}) => {
    const [showList, setShowList] = useState(false)
    return (
        <div className="btnExport">
            <button  onClick={()=>{setShowList(!showList)}}>
                <SvgDownload/>
                {lang.btnExport.text}
            </button>
            <div className="listExport" hidden={!showList}>
                <div className="excel optionExport">
                    <img src="/icons/excel.png" alt="excel" />
                    {lang.btnExport.excel}
                </div>
            </div>
        </div>
    )
}
export default BtnExpor
import { useState, useEffect } from "react"

import SvgDownload from "@/components/svg/download"

const BtnExpor = ({rows,lang}) => {
    const [showList, setShowList] = useState(false)
    return (
        <>
            <button className="btnExport" onClick={()=>{setShowList(!showList)}}>
                <SvgDownload/>
                {lang.btnExport.text}
            </button>
            <div className="listExport" hidden={!showList}>
                <div>
                    {lang.btnExport.excel}
                </div>
            </div>
        </>
    )
}
export default BtnExpor
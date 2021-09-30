import { useState, useEffect } from "react"

const BtnExpor = ({rows,lang}) => {
    const [showList, setShowList] = useState(false)
    return (
        <>
            <button className="btnExport" onClick={()=>{setShowList(!showList)}}>
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
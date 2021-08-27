import React, { useState } from "react"

import Arrow from "@/components/svg/right-arrow"

const LimitText = ({children,sw = false}) => {
    const [BtnSw, setBtnSw] = useState(false)
    return (
        <div className={`LimitText ${(BtnSw)?"active":""} ${(sw)?"hidden":""}`}>
            <div className="children ">
                {children}
            </div>
            {
                sw &&
                <div className="btnSW" onClick={()=>setBtnSw(!BtnSw)}></div>
            }
        </div>
    )
}
export default LimitText
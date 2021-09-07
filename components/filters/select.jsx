import { useState, useEffect } from "react"

import SvgSearch from "@/components/svg/search"

const FilterSelect = ({id,list,selected=console.log}) => {
    const [select, setSelect] = useState("")
    return <div className="filtro list">
        <select name={id} id={id}  className="input" value={select} onChange={(e)=>{setSelect(e.target.value)}}>
            <option disabled value="">Select</option>
            {list.map((e,i)=>{
                if(!e)return;
                return <option id={`s-${id}-${i}`}>{e}</option>
            })}
        </select>
        <button className="btn" onClick={()=>{selected(select,id)}}><SvgSearch></SvgSearch></button>
    </div>
}
export default FilterSelect
import { useState, useEffect } from "react"

import SvgSearch from "@/components/svg/search"

const Search = ({name,id,search}) => {
    const [value, setValue] = useState("")
    const onChangeValue = (element) => {
        setValue(element.target.value)
    } 
    return <div className="filtro search">
        <input type="text" name={name} id={id} placeholder={`Search ${name}`} className="input" onChange={onChangeValue} value={value}/>
        <button className="btn" onClick={search(value)}><SvgSearch></SvgSearch></button>
    </div>
}

const Filter = ({filter,setFilter}) => {
    

    const swFilterType = {
        string : <Search id={filter.id} name={filter.name} search={(value)=>()=>setFilter({[filter.id]:value})}/>
    }
    if(swFilterType[filter.type]){
        return swFilterType[filter.type]
    }   
    return <div>{filter.id}</div>
}
export default Filter
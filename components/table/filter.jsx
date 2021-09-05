import { useState, useEffect } from "react"
import FilterDate from "@/components/filters/date"

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
        search : <Search id={filter.id} name={filter.name} search={(value)=>()=>setFilter({[filter.id]:value})}/>,
        date : <FilterDate onChange={(value)=>{
                const init = value.startDate.getTime()
                const fin = value.endDate.getTime()
                const query = {
                    date:{
                        $gte:init,
                        $lt:fin
                    }
                }
                setFilter(query)
            }
        }/>
    }
    if(swFilterType[filter.filter]){
        return swFilterType[filter.filter]
    }   
    return <div>{filter.id}</div>
}
export default Filter
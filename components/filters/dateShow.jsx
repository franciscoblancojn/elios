import { useState, useEffect } from "react"

import FilterDate from "@/components/filters/date"

const FilterDateShow = ({onChange=console.log}) => {
    const [init, setInit] = useState(new Date())
    const [fin, setFin] = useState(new Date())
    const [btnText, setBtnText] = useState("")

    const changeDate = (value) => {
        setInit(new Date(value.startDate.getTime()))
        setFin(new Date(value.endDate.getTime()))
        
        const query = {
            date:{
                $gte:init,
                $lt:fin
            }
        }
        onChange(query)
    }

    useEffect(() => {
        const text = init.toDateString() + " - " + fin.toDateString()
        setBtnText(text)
    }, [init,fin])
    useEffect(() => {
        const today = new Date()
        today.setMonth(today.getMonth() - 1)
        setInit(today)
    }, [])
    return <div className="FilterDateShow">
        <span>Filtrar por fecha:</span>
        <FilterDate 
            btn={btnText}
            onChange={changeDate}
        />
    </div>
}
export default FilterDateShow
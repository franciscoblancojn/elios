import { useState, useEffect } from "react"

import FilterDate from "@/components/filters/date"

const FilterDateShow = ({onChange=console.log}) => {
    const [init, setInit] = useState(new Date())
    const [fin, setFin] = useState(new Date())
    const [btnText, setBtnText] = useState("")

    const changeDate = (value) => {
        setInit(new Date(value.startDate.getTime()))
        setFin(new Date(value.endDate.getTime()))
    }

    useEffect(() => {
        const text = init.toDateString() + " - " + fin.toDateString()
        setBtnText(text)
        const query = {
            date:{
                $gte:init.getTime(),
                $lt:fin.getTime()
            }
        }
        onChange(query)
    }, [init,fin])
    useEffect(() => {
        const today = new Date()
        today.setMonth(today.getMonth() - 1)
        setInit(today)
    }, [])
    return <div className="FilterDateShow">
        <span className="textb">Filtrar por fecha:</span>
        <FilterDate 
            btn={btnText}
            onChange={changeDate}
        />
    </div>
}
export default FilterDateShow
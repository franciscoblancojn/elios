import Modal from "@/components/modal/modal"
import { DateRangePicker } from 'react-date-range';
import { useState,useEffect } from "react"

const FilterDate = ({onChange=()=>{}}) => {
    const [countChange, setCountChange] = useState(0)
    const [open, setOpen] = useState(false)
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const toggelModal = () => {
        setOpen(!open)
    }
    const closeModal = () => {
        setOpen(false)
    }
    const setSelectionRange = (e)=>{
        setDateRange(e.selection)
        setCountChange(countChange + 1)
    }
    useEffect(() => {
        if(countChange == 2){
            setCountChange(0)
            onChange(dateRange)
            closeModal()
        }
    }, [countChange]);
    return (
        <Modal
            btn="Filter by Date"
            open={open}
            toggelModal={toggelModal}
            closeModal={closeModal}
        >
            <DateRangePicker
            ranges={[dateRange]}
            onChange={setSelectionRange}
            />
        </Modal>
    )
}
export default FilterDate
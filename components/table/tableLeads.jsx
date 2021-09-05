import { useState, useEffect } from "react"

import {getLeads} from "@/app/app"
import LoaderCircle from "@/components/loader/circle";
import Table from "@/components/table/table_v2";

const KEYS = [
    {
        id : "_id",
        name : "ID",
        type : "text"
    },
    {
        id : "ipAddress",
        name : "IP",
        type : "text"
    },
    {
        id : "continentName",
        name : "Continente",
        type : "text"
    },
    {
        id : "countryCode",
        name : "Pais Code",
        type : "text"
    },
    {
        id : "countryName",
        name : "Pais",
        type : "text"
    },
    {
        id : "stateProv",
        name : "State",
        type : "text"
    },
    {
        id : "city",
        name : "Ciudad",
        type : "text"
    },
    {
        id : "os",
        name : "OS",
        type : "text"
    },
    {
        id : "platform",
        name : "Platforma",
        type : "text"
    },
    {
        id : "system",
        name : "System",
        type : "text"
    },
    {
        id : "browser",
        name : "Navegador",
        type : "text"
    },
    {
        id : "pageUrl",
        name : "Url",
        type : "text"
    },
    {
        id : "get",
        name : "GET",
        type : "text"
    },
    {
        id : "date",
        name : "Fecha",
        type : "text"
    },
]
const TableLeads = () => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const [rows, setRows] = useState()
    const [countItems, setCountItems] = useState()
    const loadLeads = async (query={event:{$exists: true}}) => {
        const result = await getLeads({query})
        console.log(result);
        setCountItems(result.countLeads)
        setRows(result.leads)
    }
    const loadTable = async () => {
        await loadLeads()
    }
    useEffect(() => {
        loadTable()
    }, [])
    useEffect(() => {
        if(rows){
            setContent(<Table rows={rows} countItems={countItems} keys={KEYS} />)
        }
    }, [rows])
    return <>{content}</>
}
export default TableLeads
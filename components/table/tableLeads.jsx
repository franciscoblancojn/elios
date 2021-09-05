import { useState, useEffect } from "react"

import {getLeads} from "@/app/app"
import LoaderCircle from "@/components/loader/circle";
import Table from "@/components/table/table_v2";

const KEYS = [
    {
        id : "_id",
        name : "ID",
        type : "string"
    },
    {
        id : "ipAddress",
        name : "IP",
        type : "string"
    },
    {
        id : "continentName",
        name : "Continente",
        type : "string"
    },
    {
        id : "countryCode",
        name : "Pais Code",
        type : "string"
    },
    {
        id : "countryName",
        name : "Pais",
        type : "string"
    },
    {
        id : "stateProv",
        name : "State",
        type : "string"
    },
    {
        id : "city",
        name : "Ciudad",
        type : "string"
    },
    {
        id : "os",
        name : "OS",
        type : "string"
    },
    {
        id : "platform",
        name : "Platforma",
        type : "string"
    },
    {
        id : "system",
        name : "System",
        type : "string"
    },
    {
        id : "browser",
        name : "Navegador",
        type : "string"
    },
    {
        id : "pageUrl",
        name : "Url",
        type : "string"
    },
    {
        id : "get",
        name : "GET",
        type : "object"
    },
    {
        id : "date",
        name : "Fecha",
        type : "date"
    },
]
const TableLeads = () => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const [rows, setRows] = useState()
    const [countItems, setCountItems] = useState()
    const [page, setPage] = useState(1)
    const [npage, setNpage] = useState(20)
    const loadLeads = async (query={event:{$exists: true}}) => {
        const result = await getLeads({
            query,
            sort:{
                date:-1
            },
            page,
            npage,
        })
        console.log(result);
        setCountItems(result.countLeads)
        setRows(result.leads)
    }
    const loadTable = async () => {
        await loadLeads()
        const tbody = document.querySelector('.tbody')
        tbody.scrollTop = 0
    }
    useEffect(() => {
        loadTable()
    }, [page,npage])
    useEffect(() => {
        if(rows){
            setContent(<Table rows={rows} countItems={countItems} keys={KEYS} page={page} setPage={setPage} npage={npage} setNpage={setNpage}/>)
        }
    }, [rows])
    return <>{content}</>
}
export default TableLeads
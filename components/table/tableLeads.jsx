import { useState, useEffect } from "react"

import {getLeads} from "@/app/app"
import LoaderCircle from "@/components/loader/circle";
import Table from "@/components/table/table_v2";

const KEYS = [
    {
        id : "_id",
        name : "ID",
        type : "string",
        filter : 'search'
    },
    {
        id : "ipAddress",
        name : "IP",
        type : "string",
        filter : 'search'
    },
    {
        id : "continentName",
        name : "Continente",
        type : "string",
        filter : 'search'
    },
    {
        id : "countryCode",
        name : "Pais Code",
        type : "string",
        filter : 'search'
    },
    {
        id : "countryName",
        name : "Pais",
        type : "string",
        filter : 'search'
    },
    {
        id : "stateProv",
        name : "State",
        type : "string",
        filter : 'search'
    },
    {
        id : "city",
        name : "Ciudad",
        type : "string",
        filter : 'search'
    },
    {
        id : "os",
        name : "OS",
        type : "string",
        filter : 'search'
    },
    {
        id : "platform",
        name : "Platforma",
        type : "string",
        filter : 'search'
    },
    {
        id : "system",
        name : "System",
        type : "string",
        filter : 'search'
    },
    {
        id : "browser",
        name : "Navegador",
        type : "string",
        filter : 'search'
    },
    {
        id : "pageUrl",
        name : "Url",
        type : "a",
        filter : 'search'
    },
    {
        id : "get",
        name : "GET",
        type : "object",
        filter : 'search'
    },
    {
        id : "date",
        name : "Fecha",
        type : "date",
        filter : 'date'
    },
]
const TableLeads = ({query}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const [rows, setRows] = useState()
    const [countItems, setCountItems] = useState()
    const [page, setPage] = useState(1)
    const [npage, setNpage] = useState(20)
    const [filter, setFilter] = useState({})

    const loadLeads = async (defaultQuery={event:{$exists: true}}) => {
        setContent(<LoaderCircle/>)
        const result = await getLeads({
            query:{
                ...defaultQuery,
                ...(query || {}),
                ...filter
            },
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
    }
    useEffect(() => {
        const tbody = document.querySelector('.tbody')
        if(tbody){
            tbody.scrollTop = 0
        }
    }, [content])
    useEffect(() => {
        loadTable()
    }, [page,npage,filter])
    useEffect(() => {
        if(rows){
            setContent(<Table rows={rows} countItems={countItems} keys={KEYS} page={page} setPage={setPage} npage={npage} setNpage={setNpage} setFilter={(value)=>{setPage(1);setFilter(value)}}/>)
        }
    }, [rows])
    return <>{content}</>
}
export default TableLeads
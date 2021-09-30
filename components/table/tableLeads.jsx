import { useState, useEffect } from "react"

import {getLeads} from "@/app/app"

import LoaderCircle from "@/components/loader/circle";
import Table from "@/components/table/table";

const DEFAULTKEYS = [
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
        filter : 'select'
    },
    {
        id : "countryCode",
        name : "Pais Code",
        type : "string",
        filter : 'select',
        image:true
    },
    {
        id : "countryName",
        name : "Pais",
        type : "string",
        filter : 'select',
    },
    {
        id : "stateProv",
        name : "State",
        type : "string",
        filter : 'select',
    },
    {
        id : "city",
        name : "Ciudad",
        type : "string",
        filter : 'select',
    },
    {
        id : "os",
        name : "OS",
        type : "string",
        filter : 'select',
        image:true
    },
    {
        id : "platform",
        name : "Platforma",
        type : "string",
        filter : 'select',
    },
    {
        id : "system",
        name : "System",
        type : "string",
        filter : 'select',
    },
    {
        id : "browser",
        name : "Navegador",
        type : "string",
        filter : 'select',
        image:true
    },
    {
        id : "pageUrl",
        name : "Url",
        type : "a",
        filter : 'search'
    },
    // {
    //     id : "event",
    //     name : "Event",
    //     type : "object",
    //     filter : 'search'
    // },
    // {
    //     id : "get",
    //     name : "GET",
    //     type : "object",
    //     filter : 'search'
    // },
    {
        id : "date",
        name : "Fecha",
        type : "date",
        filter : 'date'
    },
]
const TableLeads = ({query={event:{$exists: true}},KEYS=null,queryUrl={},lang,url="leads"}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const [rows, setRows] = useState()
    const [countItems, setCountItems] = useState()
    const [page, setPage] = useState(1)
    const [npage, setNpage] = useState(20)
    const [filter, setFilter] = useState({})
    const [selects,setSelects] = useState({})
    const [sort, setSort] = useState({date:-1})
    const [rowsLengthNoFilters, setRowsLengthNoFilters] = useState(null)

    const loadLeads = async () => {
        setContent(<LoaderCircle/>)
        const result = await getLeads({
            query:{
                ...(query || {}),
                ...queryUrl,
                ...filter,
            },
            sort,
            page,
            npage,
        })
        console.log(result);
        if(rowsLengthNoFilters === null){
            setRowsLengthNoFilters(result.countLeads)
        }
        setCountItems(result.countLeads)
        setRows(result.leads)
    }
    const loadTable = async () => {
        await loadLeads()
    }
    const loadSelects = async () => {
        const result = await getLeads({
            query:{
                ...(query || {}),
                ...queryUrl,
                ...filter,
            },
            distinct:"continentName;countryCode;countryName;stateProv;city;os;platform;system;browser"
        })
        setSelects(result);
    }
    useEffect(() => {
        const tbody = document.querySelector('.tbody')
        if(tbody){
            tbody.scrollTop = 0
        }
    }, [content])
    useEffect(() => {
        loadTable()
    }, [page,npage,filter,sort])
    useEffect(() => {
        if(rows){
            setContent(<Table 
                url={url}
                rows={rows} 
                countItems={countItems} 
                keys={KEYS || DEFAULTKEYS} 
                page={page} 
                setPage={setPage} 
                npage={npage} 
                setNpage={setNpage} 
                setFilter={(value)=>{setPage(1);setFilter(value)}}
                setSort={setSort}
                sort={sort}
                selects={selects}
                lang={lang}
                rowsLengthNoFilters={rowsLengthNoFilters}
                />)
        }
    }, [rows,selects])
    useEffect(() => {
        loadSelects()
    }, [])
    return <>{content}</>
}

export default TableLeads
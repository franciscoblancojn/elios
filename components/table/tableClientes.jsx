import { useState, useEffect } from "react"

import {getClients} from "@/app/app"

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
        id : "ip",
        name : "IP",
        type : "string",
        filter : 'search'
    },
    {
        id : "continentName",
        name : "Continente",
        type : "string",
        filter : 'select',
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
        id : "leads",
        name : "Leads",
        type : "string",
        filter : 'search',
    },
    {
        id : "form",
        name : "Formularios",
        type : "string",
        filter : 'search',
    },
    {
        id : "whatsapp",
        name : "Whatsapps",
        type : "string",
        filter : 'search',
    },
    {
        id : "compras",
        name : "Compras",
        type : "string",
        filter : 'search',
    },
]
const TableClients = ({query,KEYS=null,queryUrl={},lang}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const [rows, setRows] = useState()
    const [countItems, setCountItems] = useState()
    const [page, setPage] = useState(1)
    const [npage, setNpage] = useState(20)
    const [filter, setFilter] = useState({})
    const [selects,setSelects] = useState({})

    const loadClients = async (defaultQuery={}) => {
        setContent(<LoaderCircle/>)
        const result = await getClients({
            query:{
                ...defaultQuery,
                ...(query || {}),
                ...queryUrl,
                ...filter
            },
            sort:{
                date:-1
            },
            page,
            npage,
        })
        console.log(result);
        setCountItems(result.countClients)
        setRows(result.clients)
    }
    const loadTable = async () => {
        await loadClients()
    }
    const loadSelects = async () => {
        const result = await getClients({
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
    }, [page,npage,filter])
    useEffect(() => {
        if(rows){
            setContent(<Table 
                url="visitantes"
                rows={rows} 
                countItems={countItems} 
                keys={KEYS || DEFAULTKEYS} 
                page={page} 
                setPage={setPage} 
                npage={npage} 
                setNpage={setNpage} 
                setFilter={(value)=>{setPage(1);setFilter(value)}}
                selects={selects}
                lang={lang}
                />)
        }
    }, [rows,selects])
    useEffect(() => {
        loadSelects()
    }, [])
    return <>{content}</>
}
export default TableClients
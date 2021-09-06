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
        filter : 'search'
    },
    {
        id : "countryCode",
        name : "Pais Code",
        type : "string",
        filter : 'search',
        image:true
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
        filter : 'search',
        image:true
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
        filter : 'search',
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
const TableClients = ({query,KEYS=null,queryUrl={}}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const [rows, setRows] = useState()
    const [countItems, setCountItems] = useState()
    const [page, setPage] = useState(1)
    const [npage, setNpage] = useState(20)
    const [filter, setFilter] = useState({})

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
                />)
        }
    }, [rows])
    return <>{content}</>
}
export default TableClients
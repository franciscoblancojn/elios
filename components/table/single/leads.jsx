import { useState, useEffect } from "react"
import Link from 'next/link'

import {getLeads} from "@/app/app"
import LoaderCircle from "@/components/loader/circle";
import Single from "@/components/table/single";

import ArrowRight from "@/components/svg/right-arrow"

const DEFAULTKEYS = [
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
        id : "pageUrl",
        name : "Url",
        type : "a",
        filter : 'search'
    },
    {
        id : "event",
        name : "Event",
        type : "object",
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
const SingleLeads = ({id,KEYS=null}) =>{
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadLead = async () => {
        const result = await getLeads({
            query:{
                _id : id
            },
        })
        console.log(result);
        if(result.error || result.leads.length == 0){
            setContent(<div className="content-table">
                <h1>ID Invalid</h1>
                </div>
            )
            return;
        }
        const lead = result.leads[0];
        setContent(
            <div className="content-table">
                <Link href={`/leads/`}>
                    <a className="before">
                        <ArrowRight/>
                        Volver a Leads
                    </a>
                </Link>
                <h1 className="titleP">
                    Lead
                </h1>
                <div className="id">
                    ID: {id}
                </div>
                <Single item={lead} keys={KEYS || DEFAULTKEYS}/>
            </div>
        )
    }
    useEffect(() => {
        loadLead()
    }, [])
    return <>{content}</>
}
export default SingleLeads
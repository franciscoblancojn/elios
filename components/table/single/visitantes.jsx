import { useState, useEffect } from "react"
import Link from 'next/link'

import {getClients} from "@/app/app"
import LoaderCircle from "@/components/loader/circle";
import Single from "@/components/table/single";
import BtnPrincipal from "@/components/btn/btnPrincipal";

import ArrowRight from "@/components/svg/right-arrow"

const DEFAULTKEYS = [
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
        id : "compras",
        name : "Compras",
        type : "string",
        filter : 'search',
    },
]
const SingleVisitantes = ({id,KEYS=null}) =>{
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadClients = async () => {
        const result = await getClients({
            query:{
                _id : id
            },
        })
        console.log(result);
        if(result.error || result.clients.length == 0){
            setContent(<div className="content-table">
                <h1>ID Invalid</h1>
                </div>
            )
            return;
        }
        const client = result.clients[0];
        setContent(
            <div className="content-table">
                <Link href={`/visitantes/`}>
                    <a className="before">
                        <ArrowRight/>
                        Volver a Visitantes
                    </a>
                </Link>
                <h1 className="titleP">
                    {
                        client.compras > 0 ?
                        "Cliente":"Visitante"
                    }
                </h1>
                <div className="id">
                    ID: {id}
                </div>
                <Single item={client} keys={KEYS || DEFAULTKEYS}/>
                {
                    client.leads > 0 && 
                    <Link href={`/leads?ipAddress=${client.ip}`}>
                        <a className="link">
                            Ver todos los Leads
                        </a>
                    </Link>
                }
                <br />
                {
                    client.compras > 0 &&
                    <Link href={`/clientes/compras?browser_ip=${client.ip}`}>
                        <a className="link">
                            Ver todas las Compras
                        </a>
                    </Link>
                }
            </div>
        )
    }
    useEffect(() => {
        loadClients()
    }, [])
    return <>{content}</>
}
export default SingleVisitantes
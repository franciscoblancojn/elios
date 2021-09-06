import { useState, useEffect } from "react"
import Link from 'next/link'

import {getLeads} from "@/app/app"
import LoaderCircle from "@/components/loader/circle";

import ArrowRight from "@/components/svg/right-arrow"

const KeysHead = {
    first_name : "Nombre",
    last_name : "Apellido",

    countryCode    :"Pais",
    ciudad  :"Ciudad",

    address1 : "Address",
    address2 : "Address 2",
    phone : "Numero Telefónico",
    email : "Correo Electrónico",

    os      :"OS",
    browser :"Navegador",

    pageUrl:"Url",

}
const SingleLeads = ({id}) =>{
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
        const lead = result.leads[0]
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
            </div>
        )
    }
    useEffect(() => {
        loadLead()
    }, [])
    return <>{content}</>
}
export default SingleLeads
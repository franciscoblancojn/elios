import { useState, useEffect } from "react"
import Link from 'next/link'

import {getUser} from "@/functions/index";
import {getClientsLive} from "@/app/app";

import LoaderCircle from "@/components/loader/circle";

import ArrowRight from "@/components/svg/right-arrow"

const Site = ({host}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadContent = async () => {
        const result = await getClientsLive()
        console.log(result);
        const user = getUser()
        const sites = user.sites || []
        const site = sites.find((element)=>element.host=host)
        setContent(
            <div className="">
                <div className="flex-between">
                    <Link href={`/`}>
                        <a className="before">
                            <ArrowRight/>
                            Volver al Inicio
                        </a>
                    </Link>
                </div>
                {JSON.stringify(site)}
            </div>
        )
    }
    useEffect( async () => {
        loadContent()
    }, [])
    return <>{content}</>
}

export default Site
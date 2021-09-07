import { useState, useEffect } from "react"
import Link from 'next/link'

import {getUser} from "@/functions/index";

import LoaderCircle from "@/components/loader/circle";
import UserInLive from "@/components/msg/userInLive";

import ArrowRight from "@/components/svg/right-arrow"

const Site = ({host}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadContent = async () => {
        const user = getUser()
        const sites = user.sites || []
        const site = sites.find((element)=>element.host=host)
        setContent(
            <div className="">
                <div className="flex flex-between flex-align-center">
                    <Link href={`/`}>
                        <a className="before mb-0">
                            <ArrowRight/>
                            Volver al Inicio
                        </a>
                    </Link>
                    <UserInLive/>
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
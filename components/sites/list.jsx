import { useState, useEffect } from "react"
import Link from 'next/link'

import {getUser,reloadUser} from "@/functions/index";

import LoaderCircle from "@/components/loader/circle";

const ListSites = ({lang}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadContent = async () => {
        await reloadUser()
        const user = getUser()
        const sites = user.sites || []
        setContent(
            <div className="list-integracion list-sites">
                <h3>
                    {lang.inicion.titleSite}
                </h3>
                <ul>
                    {sites.map((site,i)=>{
                        return(
                            <li key={i}>
                                {
                                    site.iconSite ?
                                    <img src={`https://pixeltracking.startscoinc.com/upload/img/sites/${site.iconSite}`} alt={site.host} className="iconHost"/>
                                    :
                                    <img src={`/icons/${site.cms}x2.png`} alt={site.host} className="iconHost"/>
                                }
                                <Link href={`/sites/${site.host}`}>
                                    <a>{site.host}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    useEffect( async () => {
        loadContent()
    }, [])
    return <>{content}</>
}

export default ListSites
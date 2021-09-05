import { useState, useEffect } from "react"

import {getUser,reloadUser} from "@/functions/index";

import LoaderCircle from "@/components/loader/circle";

const Host = () => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadContent = async () => {
        await reloadUser()
        const user = getUser()
        const sites = user.sites || []
        setContent(
            <div className="msg-host"> 
                {sites.map((site,i)=>{
                    return(
                        <div className="item" key={i}>
                            <img src="/icons/iconList.png" alt="ok"/>
                            {site.host}
                        </div>
                    )
                })}
            </div>
        )
    }
    useEffect( async () => {
        loadContent()
    }, [])
    return <>{content}</>
}

export default Host
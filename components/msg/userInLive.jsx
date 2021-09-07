import { useState, useEffect } from "react"

import {getClientsLive} from "@/app/app";

import LoaderCircle from "@/components/loader/circle";

const UserInLive = () => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadContent = async () => {
        const usersLive = await getClientsLive()
        setContent(
        <div className="user-live">
            <img src="/icons/en-vivo.png" alt="en-vivo" />
            <span className="count">{usersLive}</span>
            <span className="text">Visitantes</span>
        </div>
        )
    }
    useEffect( async () => {
        loadContent()
    }, [])
    return <>{content}</>
}
export default UserInLive
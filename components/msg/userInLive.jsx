import { useState, useEffect } from "react"

import {getClientsLive} from "@/app/app";

const UserInLive = () => {
    const [userInLive, setUserInLive] = useState(0)
    const loadContent = async () => {
        const result = await getClientsLive()
        if(result.error){
            return;
        }
        const usersLive = result.count
        setUserInLive(usersLive)
        setTimeout(()=>{
            loadContent()
        },5000)
    }
    useEffect( async () => {
        loadContent()
    }, [])
    return <div className="user-live">
        <img src="/icons/en-vivo.png" alt="en-vivo" />
        <span className="count">{userInLive}</span>
        <span className="text">Visitantes</span>
    </div>
}
export default UserInLive
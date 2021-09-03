import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import {onChangeCookie} from "@/functions/index";

import LoaderCircle from "@/components/loader/circle";

const IsNotlogin = ({children}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const router = useRouter()

    const loadContent = () => {
        try {
            const cookie = JSON.parse(document.cookie)
            if(cookie.login){
                router.push("/")
            }else{
                setContent(children)
            }
        } catch (error) {
            setContent(children)
        }
    }
    useEffect(() => {
        loadContent()
        onChangeCookie(loadContent)
    }, [])
    return <>{content}</>
}
export default IsNotlogin
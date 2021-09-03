import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import LoaderCircle from "@/components/loader/circle";

const IsNotlogin = ({children}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const router = useRouter()

    const onChangeCookie = (onChange) => {
        let lastCookie = document.cookie;
        setInterval(()=> {
            let cookie = document.cookie;
            if (cookie !== lastCookie) {
                try {
                    onChange()
                } finally {
                    lastCookie = cookie;
                }
            }
        }, 1000);
    }
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
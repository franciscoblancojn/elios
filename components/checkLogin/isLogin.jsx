import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import LoaderCircle from "@/components/loader/circle";

const Islogin = ({children}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const router = useRouter()

    const loadContent = () => {
        try {
            const cookie = JSON.parse(document.cookie)
            if(cookie.login){
                setContent(children)
            }else{
                router.push("/login")
            }
        } catch (error) {
            console.log(error);
            router.push("/login")
        }
    }
    useEffect(() => {
        loadContent()
    }, [])
    return <>{content}</>
}
export default Islogin
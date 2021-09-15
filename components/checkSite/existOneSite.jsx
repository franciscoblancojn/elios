import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import {getUser} from "@/functions/index";

import LoaderCircle from "@/components/loader/circle";

const ExistOneSite = ({children}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const router = useRouter()

    const loadContent = () => {
        try {
            const user = getUser()
            const sites = user.sites || []
            if(sites.length > 0){
                setContent(children)
            }else{
                router.push("/add-site")
            }
        } catch (error) {
            console.log(error);
            router.push("/add-site")
        }
    }
    useEffect(() => {
        loadContent()
    }, [])
    return <>{content}</>
}
export default ExistOneSite
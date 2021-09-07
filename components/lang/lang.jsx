import { useState, useEffect } from "react"

import LoaderCircle from "@/components/loader/circle";

import languaje from "@/languajes/languaje";

const Lang = ({children}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const loadContent = async () => {
        const lang = await languaje()
        localStorage.setItem("languaje",JSON.stringify(lang))
        setContent(children)
    }
    useEffect(() => {
        loadContent()
    }, [])
    return <>{content}</>
}
export default Lang
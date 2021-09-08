import React, { useState, useEffect } from "react"

import LoaderCircle from "@/components/loader/circle";

import languaje from "@/languajes/languaje";

const Lang = ({children}) => {
    const [content, setContent] = useState(<LoaderCircle/>)
    const addPropsElement = (element, props) => {
        return React.cloneElement(element, props)
    }
    const addLang = (elemets,lang,key=1) => {
        if(!elemets){
            return {}
        }
        if(Array.isArray(elemets)){
            return elemets.map((child,i) => {
                const childrens = {}
                if(child?.props?.children){
                    childrens.children = addLang(child?.props?.children,lang,key+1)
                }
                return addPropsElement(child, {...child.props,...childrens,lang,key:`${key}-${i}`})
            })
        }
        const childrens = {}
        if(elemets?.props?.children){
            childrens.children = addLang(elemets?.props?.children,lang,key+1)
        }
        return addPropsElement(elemets, {...elemets.props,...childrens,lang})
    }
    const loadContent = async () => {
        const lang = await languaje()
        const contentWithLang = addLang(children,lang);
        setContent(contentWithLang)
    }
    useEffect(() => {
        loadContent()
    }, [])
    return <>{content}</>
}
export default Lang
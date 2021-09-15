import { useState, useEffect } from "react"

import Content from "@/components/content";

const Idiomas = ({lang}) => {
    const [langActual, setLangActual] = useState("es")
    const changeLang = (e) => {
        const value = e.target.value
        setLangActual(value)
        localStorage.setItem("lang",value)
        window.location.reload()
    }
    useEffect(() => {
        setLangActual(localStorage.getItem("lang"))
    }, [])
    return (
        <Content 
        title={lang.configuraciones.pages.idiomas.title}
        className="cMenu page-configuracion"
        >
            <div className="content-info-page">
                <h2>
                    {lang.configuraciones.pages.idiomas.actual}
                </h2>
                <select className="select-ss" value={langActual} onChange={changeLang}>
                    {lang.configuraciones.pages.idiomas.languajes.map((e,i)=>{
                        return(
                            <option key={i} value={e}>{e}</option>
                        )
                    })}
                </select>
            </div>
        </Content>
    )
}
export default Idiomas
import { useState, useEffect } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Content from "@/components/content";
import TitelIcon from "@/components/title/titleIcon";
import ListIntegracion from "@/components/list/integracion";
import languajes from "@/languajes/languaje";

const Index = () => {
    const [allText, setAllText] = useState({
        title : "Bienvenido a elios!",
        text1 : "Por favor comienza conectando",
        text2 : "tu tienda virtual o sitio web.",
        titleList :"Selecciona la integración:",
        "btn":{
            "conectar":"CONECTAR",
            "proximamente":"PROXIMAMENTE"
        }
    })
    const loadLanguajes = async () => {
        const lang = await languajes()
        setAllText({
            ...allText,
            ...lang.addSite
        })
    }
    useEffect(() => {
        loadLanguajes()
    }, [])
    return (
        <Islogin>
            <Content 
            title="Elios"
            className="cMenu home"
            >
                <TitelIcon
                title={allText.title}
                subtitle={(
                    <>
                        {allText.text1}
                        <br/>
                        {allText.text2}
                    </>
                )}
                icon={(<img src="/img/elios.png" alt="Elios" />)}
                />
                <ListIntegracion
                title={allText.titleList}
                btn={allText.btn}
                />
            </Content>
        </Islogin>
    )
}
export default Index
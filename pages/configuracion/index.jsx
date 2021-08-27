import React, { Component } from "react"

import Content from "@/components/content";
import Card from "@/components/card/card";
import MsgTop from "@/components/msg/top";

import SvgUser from "@/components/svg/user";
import SvgInfo from "@/components/svg/info";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Configuración",
        "subtitle":"Configuraciones",
        "config":[
            {
                "id":"perfil",
                "title":"Perfil",
                "text":"Ve y actualiza los detalles de tu cuenta, fotos de perfil, cambio de contraseña etc."
            },
            {
                "id":"pagos_planes",
                "title":"Pagos y Planes",
                "text":"Ve la información del plan y gestiona lo que los empleados pueden ver o hacer en tu cuenta."
            },
            {
                "id":"configuraciones",
                "title":"Configuraciones",
                "text":"Configura detalles generales de tu perfil."
            },
            {
                "id":"idiomas",
                "title":"Idiomas",
                "text":"Gestiona el idioma  de tu cuenta de ELIOS."
            }
        ]
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.configuracion,
            ...lang.configuraciones
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <Content 
            title={this.state.title}
            className="cMenu page-configuracion"
            >
                {/* <MsgTop
                    title="¡Bienvenido a tu versión de prueba Emprendedor!"
                    icon={<SvgInfo/>}
                    text={(
                        <>
                            Tienes 14 días para probar las <a href="/plan">funcionalidades de pago</a> de Elios, <a href="/plan">mejora</a> tu plan en cualquier momento por tan solo $ 89,99/Mes.
                        </>
                    )}
                /> */}
                <div className="content-info-page">
                    <h1>
                        {this.state.subtitle}
                    </h1>
                    <div className="row">
                        {
                            this.state.config.map((e)=>(
                                <Card
                                key={e.id}
                                title={e.title}
                                icon={<SvgUser/>}
                                link={`/configuracion/${e.id}`}
                                >
                                    {e.text}
                                </Card>))
                        }
                    </div>
                </div>
            </Content>
        )
    }
}
export default Index
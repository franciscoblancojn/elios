import React, { Component } from "react"

import Content from "@/components/content";
import TitelIcon from "@/components/title/titleIcon";
import ListIntegracion from "@/components/list/integracion";
import Log from "@/components/log";
import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Bienvenido a elios!",
        text1 : "Por favor comienza conectando",
        text2 : "tu tienda virtual o sitio web.",
        titleList :"Selecciona la integración:",
        "btn":{
            "conectar":"CONECTAR",
            "proximamente":"PROXIMAMENTE"
        }
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            ...lang.inicion
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <Content 
            title="Elios"
            className="cMenu home"
            >
                <TitelIcon
                title={this.state.title}
                subtitle={(
                    <>
                        {this.state.text1}
                        <br/>
                        {this.state.text2}
                    </>
                )}
                icon={(<img src="/img/elios.png" alt="Elios" />)}
                />
                <ListIntegracion
                title={this.state.titleList}
                btn={this.state.btn}
                />
            </Content>
        )
    }
}
export default Index
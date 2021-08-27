import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import ListNumber from "@/components/list/listNumber";

class Index extends React.Component {
    render() {
        const list = [
            "Haga clic en Activar complemento."
        ]
        return (
            <Content 
            title="Connect Wordpress"
            className="connect wordpress cMenu"
            >
                <CardSimple>
                    <h2>
                        Conecte su cuenta de 
                        <br/>
                        Wordpress a Elios
                    </h2>
                    <Points
                    s={2}
                    n={5}
                    c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                    u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                    l={true}
                    r={true}
                    />
                    <img src="/img/active.png" alt="active" className="radius"/>
                    <ListNumber list={list}></ListNumber>
                    <div className="text-center">
                        <Link href="/connect/wordpress/add-key">
                            <a className="btn">Siguiente</a>
                        </Link>
                    </div>
                </CardSimple>
            </Content>
        )
    }
}
export default Index
import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import Host from "@/components/msg/host";

class Index extends React.Component {
    render() {
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
                    s={4}
                    n={5}
                    c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                    u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                    l={true}
                    r={true}
                    />
                    <h2>
                        Sitios conectados
                    </h2>
                    <Host></Host>
                    <div className="text-center">
                        <Link href="/">
                            <a className="btn">Home</a>
                        </Link>
                    </div>
                </CardSimple>
            </Content>
        )
    }
}
export default Index
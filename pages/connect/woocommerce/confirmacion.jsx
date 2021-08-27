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
            title="Connect Woocommerce"
            className="connect woocommerce cMenu"
            >
                <CardSimple>
                    <h2>
                        Conecte su cuenta de 
                        <br/>
                        Woocommerce a Elios
                    </h2>
                    <Points
                    s={4}
                    n={5}
                    c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                    u={["/connect/woocommerce","/connect/woocommerce/install","/connect/woocommerce/active","/connect/woocommerce/add-key","/connect/woocommerce/confirmacion"]}
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
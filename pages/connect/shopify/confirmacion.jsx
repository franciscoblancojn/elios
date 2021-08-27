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
                        Confirmación
                    </h2>
                    <Points
                    s={2}
                    n={3}
                    c={["Instalar el App","Agregar Key","Confirmación"]}
                    u={["/connect/shopify","/connect/shopify/add-key","/connect/shopify/confirmacion"]}
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
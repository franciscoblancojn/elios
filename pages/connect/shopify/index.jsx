import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import SvgInfo from "@/components/svg/info";

class Index extends React.Component {
    render() {
        return (
            <Content 
            title="Connect Woocommerce"
            className="connect woocommerce cMenu"
            >
                <CardSimple>
                    <h2>
                        Install App Elios
                    </h2>
                    <Points
                    s={0}
                    n={3}
                    c={["Instalar el App","Agregar Key","Confirmación"]}
                    u={["/connect/shopify","/connect/shopify/add-key","/connect/shopify/confirmacion"]}
                    l={true}
                    r={true}
                    />
                    <p>
                        <strong>Busque Elios</strong>
                        Instale la App desde la Tienda de Shopify.
                    </p>
                    <div className="info">
                        <SvgInfo/>
                        Esta App es compatible con las versiones 2021-01 y superiores de API Shopify.
                    </div>
                    <br/>
                    <div className="text-center">
                        <Link href="/connect/shopify/add-key">
                            <a className="btn">Continuar</a>
                        </Link>
                    </div>
                </CardSimple>
            </Content>
        )
    }
}
export default Index
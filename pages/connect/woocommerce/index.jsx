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
                        Conecte su cuenta de 
                        <br/>
                        Woocommerce a Elios
                    </h2>
                    <Points
                    s={0}
                    n={5}
                    c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                    u={["/connect/woocommerce","/connect/woocommerce/install","/connect/woocommerce/active","/connect/woocommerce/add-key","/connect/woocommerce/confirmacion"]}
                    l={true}
                    r={true}
                    />
                    <p>
                        <strong>Descarga la extensión de píxeles de Elios</strong>
                        Haga clic en Descargar para obtener un archivo .zip que cargará
                        <br/>
                        en su cuenta de WooCommerce.
                    </p>
                    <div className="info">
                        <SvgInfo/>
                        Esta integración es compatible con las versiones 3.0 y superiores de WooCommerce y las versiones 4.4 y superiores de WordPress.
                    </div>
                    <div className="text-center">
                        <a 
                        className="btn"
                        href="/file/plugin.zip"
                        target="blanck"
                        onClick={this.downloadPlugin}
                        >DESCARGAR</a>
                    </div>
                    <br/>
                    <div className="text-center">
                        <Link href="/connect/woocommerce/install">
                            <a className="btn">Continuar</a>
                        </Link>
                    </div>
                </CardSimple>
            </Content>
        )
    }
}
export default Index
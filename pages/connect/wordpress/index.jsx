import React, { Component } from "react"
import Link from 'next/link'

import Islogin from "@/components/checkLogin/isLogin";
import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import SvgInfo from "@/components/svg/info";

class Index extends React.Component {
    render() {
        return (
            <Islogin>
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
                        s={0}
                        n={5}
                        c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                        u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                        l={true}
                        r={true}
                        />
                        <p>
                            <strong>Descarga la extensión de píxeles de Elios</strong>
                            Haga clic en Descargar para obtener un archivo .zip que cargará
                            <br/>
                            en su cuenta de Wordpress.
                        </p>
                        <div className="info">
                            <SvgInfo/>
                            Esta integración es compatible con las versiones 3.0 y superiores de WooCommerce y las versiones 4.4 y superiores de WordPress.
                        </div>
                        <div className="text-center">
                            <a 
                            className="btn"
                            href="https://gitlab.com/eliosapp/plugin-wordpress/-/archive/master/plugin-wordpress-master.zip"
                            target="blanck"
                            onClick={this.downloadPlugin}
                            >DESCARGAR</a>
                        </div>
                        <br/>
                        <div className="text-center">
                            <Link href="/connect/wordpress/install">
                                <a className="btn">Continuar</a>
                            </Link>
                        </div>
                    </CardSimple>
                </Content>
            </Islogin>
        )
    }
}
export default Index
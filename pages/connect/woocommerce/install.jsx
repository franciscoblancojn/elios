import React, { Component } from "react"
import Link from 'next/link'

import Islogin from "@/components/checkLogin/isLogin";
import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import ListNumber from "@/components/list/listNumber";

class Index extends React.Component {
    render() {
        const list = [
            "Seleccione Complementos y elija Agregar nuevo en el menú desplegable.",
            "Seleccione Cargar complemento.",
            "Haga clic en Elegir archivo y seleccione el archivo facebook-for-woocommerce.zip que descargó.",
            "Seleccione Instalar ahora."
        ]
        return (
            <Islogin>
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
                        s={1}
                        n={5}
                        c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                        u={["/connect/woocommerce","/connect/woocommerce/install","/connect/woocommerce/active","/connect/woocommerce/add-key","/connect/woocommerce/confirmacion"]}
                        l={true}
                        r={true}
                        />
                        <img src="/img/install1.png" alt="install" className="radius"/>
                        <ListNumber list={list}></ListNumber>
                        <div className="text-center">
                            <Link href="/connect/woocommerce/active">
                                <a className="btn">Siguiente</a>
                            </Link>
                        </div>
                    </CardSimple>
                </Content>
            </Islogin>
        )
    }
}
export default Index
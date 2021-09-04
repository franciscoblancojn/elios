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
            "Haga clic en Activar complemento."
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
                        s={2}
                        n={5}
                        c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                        u={["/connect/woocommerce","/connect/woocommerce/install","/connect/woocommerce/active","/connect/woocommerce/add-key","/connect/woocommerce/confirmacion"]}
                        l={true}
                        r={true}
                        />
                        <img src="/img/active.png" alt="active" className="radius"/>
                        <ListNumber list={list}></ListNumber>
                        <div className="text-center">
                            <Link href="/connect/woocommerce/add-key">
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
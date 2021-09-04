import React, { Component } from "react"
import Link from 'next/link'

import Islogin from "@/components/checkLogin/isLogin";
import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import ListNumber from "@/components/list/listNumber";
import Key from "@/components/msg/key";

class Index extends React.Component {
    render() {
        const list = [
            "Habrir panel de Elios",
            "Agregar key"
        ]
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
                        s={3}
                        n={5}
                        c={["Descargar el Plugin","Instalar el Plugin","Activar el Plugin","Agregar Key","Confirmación"]}
                        u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                        l={true}
                        r={true}
                        />
                        <Key></Key>
                        <br/>
                        <img src="/img/add-key.png" alt="add-key" className="radius"/>
                        <ListNumber list={list}></ListNumber>
                        <div className="text-center">
                            <Link href="/connect/wordpress/confirmacion">
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
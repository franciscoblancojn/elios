import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import ListNumber from "@/components/list/listNumber";
import Key from "@/components/msg/key";

class Index extends React.Component {
    render() {
        const list = [
            "Agregar key",
            "Guarde"
        ]
        return (
            <Content 
            title="Connect Woocommerce"
            className="connect woocommerce cMenu"
            >
                <CardSimple>
                    <h2>
                        Agrege la Key
                    </h2>
                    <Points
                    s={1}
                    n={3}
                    c={["Instalar el App","Agregar Key","Confirmación"]}
                    u={["/connect/shopify","/connect/shopify/add-key","/connect/shopify/confirmacion"]}
                    l={true}
                    r={true}
                    />
                    <Key></Key>
                    <br/>
                    <img src="/img/add-key-shopify.png" alt="add-key" className="radius"/>
                    <ListNumber list={list}></ListNumber>
                    <div className="text-center">
                        <Link href="/connect/shopify/confirmacion">
                            <a className="btn">Siguiente</a>
                        </Link>
                    </div>
                </CardSimple>
            </Content>
        )
    }
}
export default Index
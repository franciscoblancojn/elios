import React, { Component } from "react"

import Content from "@/components/content";

import Headers from "@/components/header/single";

class Index extends React.Component {
    render() {
        return (
            <Content 
            title="Elios Politicas"
            className="privacy-policy"
            >
                <Headers></Headers>
                <div className="contentInfo">
                    <h1>
                        Políticas de Privacidad
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempore sunt blanditiis corporis ex excepturi, amet cumque necessitatibus molestiae iure provident eveniet odio impedit explicabo debitis nisi, veritatis dolores laudantium.
                    </p>
                </div>
            </Content>
        )
    }
}
export default Index
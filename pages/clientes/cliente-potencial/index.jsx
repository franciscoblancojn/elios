import React, { Component } from "react"

import Content from "@/components/content";
import TableClientes from "@/components/table/tableClientes";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Cliente Potencial",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.potencial
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <Content 
            title={this.state.title}
            className="cMenu clientes"
            >
                <TableClientes
                    maxVentas={0}
                    minEventos={10}
                ></TableClientes>
            </Content>
        )
    }
}
export default Index
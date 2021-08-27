import React, { Component } from "react"

import Content from "@/components/content";
import TableClientes from "@/components/table/tableClientes";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Fieles",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.fieles
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
                    minVentas={2}
                ></TableClientes>
            </Content>
        )
    }
}
export default Index
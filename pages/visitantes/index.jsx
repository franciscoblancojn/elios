import React, { Component } from "react"

import Content from "@/components/content";
import TableVisitantes from "@/components/table/tableVisitantes";

import languajes from "@/languajes/languaje"

class Index extends React.Component {
    state = {
        visitantes : "Visitantes",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            ...lang.menu
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <Content 
            title={this.state.visitantes}
            className="cMenu visitantes"
            >
                <TableVisitantes></TableVisitantes>
            </Content>
        )
    }
}
export default Index
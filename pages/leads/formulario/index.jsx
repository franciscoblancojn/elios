import React, { Component } from "react"

import Content from "@/components/content";
import TableLeads from "@/components/table/tableLeads";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Whatsapp",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.formularios
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <Content 
            title={this.state.title}
            className="cMenu page-leads"
            >
                <TableLeads 
                query={{
                    "event.type":"Form Submit",
                }}
                ></TableLeads>
            </Content>
        )
    }
}
export default Index
import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import TableClientes from "@/components/table/tableClientes";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Clientes",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.clientes
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <Islogin>
                <Content 
                title={this.state.title}
                className="cMenu clientes"
                >
                    <ExistOneSite>
                        <TableClientes></TableClientes>
                    </ExistOneSite>
                </Content>
            </Islogin>
        )
    }
}
export default Index
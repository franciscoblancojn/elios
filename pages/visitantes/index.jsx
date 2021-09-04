import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
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
            <Islogin>
                <Content 
                title={this.state.visitantes}
                className="cMenu visitantes"
                >
                    <ExistOneSite>
                        <TableVisitantes></TableVisitantes>
                    </ExistOneSite>
                </Content>
            </Islogin>
        )
    }
}
export default Index
import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
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
            title:lang.menu.whatsapp
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
                className="cMenu page-leads"
                >
                    <ExistOneSite>
                        <TableLeads 
                        query={{
                            "event.type":"click",
                            "event.class":"joinchat__button__sendtext",
                        }}
                        ></TableLeads>
                    </ExistOneSite>
                </Content>
            </Islogin>
        )
    }
}
export default Index
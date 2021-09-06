import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import TableClientes from "@/components/table/tableClientes";

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
                        <TableClientes
                            KEYS={
                                [
                                    {
                                        id : "_id",
                                        name : "ID",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "ip",
                                        name : "IP",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "continentName",
                                        name : "Continente",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "countryCode",
                                        name : "Pais Code",
                                        type : "string",
                                        filter : 'search',
                                        image:true
                                    },
                                    {
                                        id : "countryName",
                                        name : "Pais",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "stateProv",
                                        name : "State",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "city",
                                        name : "Ciudad",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "os",
                                        name : "OS",
                                        type : "string",
                                        filter : 'search',
                                        image:true
                                    },
                                    {
                                        id : "platform",
                                        name : "Platforma",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "system",
                                        name : "System",
                                        type : "string",
                                        filter : 'search'
                                    },
                                    {
                                        id : "browser",
                                        name : "Navegador",
                                        type : "string",
                                        filter : 'search',
                                        image:true
                                    },
                                    {
                                        id : "leads",
                                        name : "Leads",
                                        type : "string",
                                        filter : 'search',
                                    },
                                ]
                            }
                        />
                    </ExistOneSite>
                </Content>
            </Islogin>
        )
    }
}
export default Index
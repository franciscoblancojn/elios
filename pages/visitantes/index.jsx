import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Lang from "@/components/lang/lang";
import Content from "@/components/content";
import TableClientes from "@/components/table/tableClientes";

class Index extends React.Component {
    render() {
        return (
            <Islogin>
                <Lang>
                    <Content 
                    title="visitantes"
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
                                            filter : 'select',
                                        },
                                        {
                                            id : "countryCode",
                                            name : "Pais Code",
                                            type : "string",
                                            filter : 'select',
                                            image:true
                                        },
                                        {
                                            id : "countryName",
                                            name : "Pais",
                                            type : "string",
                                            filter : 'select',
                                        },
                                        {
                                            id : "stateProv",
                                            name : "State",
                                            type : "string",
                                            filter : 'select',
                                        },
                                        {
                                            id : "city",
                                            name : "Ciudad",
                                            type : "string",
                                            filter : 'select',
                                        },
                                        {
                                            id : "os",
                                            name : "OS",
                                            type : "string",
                                            filter : 'select',
                                            image:true
                                        },
                                        {
                                            id : "platform",
                                            name : "Platforma",
                                            type : "string",
                                            filter : 'select',
                                        },
                                        {
                                            id : "system",
                                            name : "System",
                                            type : "string",
                                            filter : 'select',
                                        },
                                        {
                                            id : "browser",
                                            name : "Navegador",
                                            type : "string",
                                            filter : 'select',
                                            image:true
                                        },
                                        {
                                            id : "leads",
                                            name : "Leads",
                                            type : "string",
                                            filter : 'search',
                                        },
                                        {
                                            id : "form",
                                            name : "Formularios",
                                            type : "string",
                                            filter : 'search',
                                        },
                                        {
                                            id : "whatsapp",
                                            name : "Whatsapps",
                                            type : "string",
                                            filter : 'search',
                                        },
                                    ]
                                }
                            />
                        </ExistOneSite>
                    </Content>
                </Lang>
            </Islogin>
        )
    }
}
export default Index
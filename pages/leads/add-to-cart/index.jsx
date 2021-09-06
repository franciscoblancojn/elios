import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import TableLeads from "@/components/table/tableLeads";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Agregados al carrito",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.carrito
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
                            "type": "checkouts-update"
                        }}
                        KEYS={[
                            {
                                id : "_id",
                                name : "ID",
                                type : "string",
                                filter : 'search'
                            },
                            {
                                id : "user_id",
                                name : "User ID",
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
                                id : "currency",
                                name : "Currency",
                                type : "string",
                                filter : 'search'
                            },
                            {
                                id : "phone",
                                name : "Phone",
                                type : "string",
                                filter : 'search'
                            },
                            {
                                id : "customer",
                                name : "Customer",
                                type : "object",
                                filter : 'search'
                            },
                            {
                                id : "shipping_address",
                                name : "Shipping Address",
                                type : "object",
                                filter : 'search'
                            },
                            {
                                id : "billing_address",
                                name : "Billing Address",
                                type : "object",
                                filter : 'search'
                            },
                            {
                                id : "line_items",
                                name : "Line Items",
                                type : "object",
                                filter : 'search'
                            },
                            {
                                id : "date",
                                name : "Date",
                                type : "date",
                                filter : 'date'
                            },
                        ]}
                        ></TableLeads>
                    </ExistOneSite>
                </Content>
            </Islogin>
        )
    }
}
export default Index
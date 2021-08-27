import React, { Component } from "react"

import Content from "@/components/content";
import MenuLeft from "@/components/header/left";
import MenuDropDown from "@/components/header/dropDown";
import TableLeads from "@/components/table/tableLeads";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Clientes",
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.compras
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
                    "type": "orders-paid"
                }}
                keys={{
                    _id      :"ID",
                    // ip      :"IP",
                    // user_id         :"User ID",

                    billing_address:"Billing Address",
                    shipping_address:"Shipping Address",
                    currency    :"Currency",
                    customer    :"Customer",
                    line_items :"Items",

                    // phone  :"Phone",
                    updated_at:"Date Update",
                    date:"Fecha",
                
                }}
                noPrint={[
                    "default_address",
                    "properties"
                ]}
                ></TableLeads>
            </Content>
        )
    }
}
export default Index
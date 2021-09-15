import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import Lang from "@/components/lang/lang";
import TableLeads from "@/components/table/tableLeads";

class Index extends React.Component {
    render() {
        return (
            <Islogin>
                <Lang>
                    <Content 
                    title="add-to-card"
                    className="cMenu page-leads"
                    >
                        <ExistOneSite>
                            <TableLeads 
                            url="leads/add-to-cart"
                            queryUrl={this.props.queryUrl || {}}
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
                                    filter : 'select',
                                },
                                {
                                    id : "phone",
                                    name : "Phone",
                                    type : "tel",
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
                </Lang>
            </Islogin>
        )
    }
}
export async function getServerSideProps({query}) {
    return { props: { queryUrl : query } }
}
export default Index
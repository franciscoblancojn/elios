import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Lang from "@/components/lang/lang";
import Content from "@/components/content";
import SingleLeads from "@/components/table/single/leads";


const Index = ({id}) => {
    return (
        <Islogin>
            <Lang>
                <Content 
                title="add-to-card"
                className="cMenu page-leads"
                >
                    <ExistOneSite>
                        <SingleLeads 
                            id={id}
                            KEYS={[
                                {
                                    id : "_id",
                                    name : "ID",
                                    type : "string",
                                    filter : 'search'
                                },
                                {
                                    id : "email",
                                    name : "Email",
                                    type : "email",
                                    filter : 'search'
                                },
                                {
                                    id : "phone",
                                    name : "Phone",
                                    type : "tel",
                                    filter : 'search'
                                },
                                {
                                    id : "browser_ip",
                                    name : "IP",
                                    type : "string",
                                    filter : 'search'
                                },
                                {
                                    id : "order_number",
                                    name : "Order Number",
                                    type : "string",
                                    filter : 'search'
                                },
                                {
                                    id : "order_status_url",
                                    name : "Order Url",
                                    type : "a",
                                    filter : 'search'
                                },
                                {
                                    id : "currency",
                                    name : "Currency",
                                    type : "string",
                                    filter : 'select',
                                },
                                {
                                    id : "gateway",
                                    name : "Gateway",
                                    type : "string",
                                    filter : 'select',
                                },
                                {
                                    id : "subtotal_price",
                                    name : "Subtotal Price",
                                    type : "string",
                                    filter : 'search'
                                },
                                {
                                    id : "total_weight",
                                    name : "Weight",
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
                                    id : "billing_address",
                                    name : "Billing Address",
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
                                    id : "line_items",
                                    name : "Line Items",
                                    type : "object",
                                    filter : 'search'
                                },
                                {
                                    id : "discount_codes",
                                    name : "Discount Codes",
                                    type : "object",
                                    filter : 'search'
                                },
                                {
                                    id : "note",
                                    name : "Note",
                                    type : "string",
                                    filter : 'search'
                                },
                                {
                                    id : "date",
                                    name : "Date",
                                    type : "date",
                                    filter : 'date'
                                },
                            ]}
                        />
                    </ExistOneSite>
                </Content>
            </Lang>
        </Islogin>
    )
}

export async function getServerSideProps({ params }) {
    return { props: { id : params.id } }
}
export default Index
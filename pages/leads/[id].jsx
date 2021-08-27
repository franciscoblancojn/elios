import React, { Component } from "react"

import Content from "@/components/content";
import SingleLeads from "@/components/table/single/leads";


const Index = ({id}) => {
    return (
        <Content 
        title="Leads"
        className="cMenu page-leads"
        >
            <SingleLeads id={id}></SingleLeads>
        </Content>
    )
}

export async function getServerSideProps({ params }) {
    return { props: { id : params.id } }
}
export default Index
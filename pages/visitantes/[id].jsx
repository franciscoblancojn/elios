import React, { Component } from "react"

import Content from "@/components/content";
import SingleVisitantes from "@/components/table/single/visitantes";


const Index = ({id}) => {
    return (
        <Content 
        title="Visitantes"
        className="cMenu page-visitantes"
        >
            <SingleVisitantes id={id}></SingleVisitantes>
        </Content>
    )
}

export async function getServerSideProps({ params }) {
    return { props: { id : params.id } }
}
export default Index
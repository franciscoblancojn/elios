import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import Site from "@/components/sites";


const Index = ({id}) => {
    return (
        <Islogin>
            <Content 
            title="Leads"
            className="cMenu page-leads"
            >
                <ExistOneSite>
                    <Site host={id}/>
                </ExistOneSite>
            </Content>
        </Islogin>
    )
}

export async function getServerSideProps({ params }) {
    return { props: { id : params.id } }
}
export default Index
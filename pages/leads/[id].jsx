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
                title="Leads"
                className="cMenu page-leads"
                >
                    <ExistOneSite>
                        <SingleLeads id={id}></SingleLeads>
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
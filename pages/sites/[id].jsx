import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";

import Site from "@/components/sites";


const Index = ({id,ID_APP_FACEBOOK}) => {
    return (
        <Islogin>
            <Lang>
                <Content 
                title="Leads"
                className="cMenu page-leads"
                >
                    <ExistOneSite>
                        <Site host={id} ID_APP_FACEBOOK={ID_APP_FACEBOOK}/>
                    </ExistOneSite>
                </Content>
            </Lang>
        </Islogin>
    )
}

export async function getServerSideProps({ params }) {
    return { props: { id : params.id , ID_APP_FACEBOOK : process.env.ID_APP_FACEBOOK} }
}
export default Index
import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import SingleVisitantes from "@/components/table/single/visitantes";


const Index = ({id}) => {
    return (
        <Islogin>
            <Content 
            title="Visitantes"
            className="cMenu page-visitantes"
            >
                <ExistOneSite>
                    <SingleVisitantes id={id}></SingleVisitantes>
                </ExistOneSite>
            </Content>
        </Islogin>
    )
}

export async function getServerSideProps({ params }) {
    return { props: { id : params.id } }
}
export default Index
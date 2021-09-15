import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import Lang from "@/components/lang/lang";
import SingleVisitantes from "@/components/table/single/visitantes";


const Index = ({id}) => {
    return (
        <Islogin>
            <Lang>
                <Content 
                title="Visitantes"
                className="cMenu page-visitantes"
                >
                    <ExistOneSite>
                        <SingleVisitantes id={id}></SingleVisitantes>
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
import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import Lang from "@/components/lang/lang";
import TableClientes from "@/components/table/tableClientes";

class Index extends React.Component {
    render() {
        return (
            <Islogin>
                <Lang>
                    <Content 
                    title="clients"
                    className="cMenu clientes"
                    >
                        <ExistOneSite>
                            <TableClientes queryUrl={this.props.queryUrl || {}}></TableClientes>
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
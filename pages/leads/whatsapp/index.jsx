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
                    title="Whatsapp"
                    className="cMenu page-leads"
                    >
                        <ExistOneSite>
                            <TableLeads 
                            queryUrl={this.props.queryUrl || {}}
                            query={{
                                "event.type":"click",
                                "event.class":"joinchat__button__sendtext",
                            }}
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
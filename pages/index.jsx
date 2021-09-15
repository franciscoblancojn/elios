import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";

import Page from "@/components/page"

class Index extends React.Component {
    render() {
        return (
            <Islogin>
                <Lang>
                    <Content 
                    title="Elios"
                    className="cMenu home"
                    >
                        <ExistOneSite>
                            <Page/>
                        </ExistOneSite>
                    </Content>
                </Lang>
            </Islogin>
        )
    }
}
export default Index
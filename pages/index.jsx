import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import ExistOneSite from "@/components/checkSite/existOneSite";
import Content from "@/components/content";
import SitesList from "@/components/sites/list";
import TitelIcon from "@/components/title/titleIcon";
import Lang from "@/components/lang/lang";

class Index extends React.Component {
    render() {
        return (
            <Islogin>
                <Lang>
                    <div></div>
                    <Content 
                    title="Elios"
                    className="cMenu home"
                    >
                        <ExistOneSite>
                            <TitelIcon
                            title="Bienvenido a elios!"
                            icon={(<img src="/img/elios.png" alt="Elios" />)}
                            />
                            <SitesList/>
                        </ExistOneSite>
                    </Content>
                </Lang>
            </Islogin>
        )
    }
}
export default Index
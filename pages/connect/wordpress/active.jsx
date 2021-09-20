import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import Page from "@/components/page/connect/wordpress/active";

class Index extends React.Component {
    render() {
        return (
            <Islogin>
                <Lang>
                    <Page/>
                </Lang>
            </Islogin>
        )
    }
}
export default Index
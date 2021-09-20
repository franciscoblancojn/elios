import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import Page from "@/components/page/configuracion/idiomas";

const Index = () => {
    return (
        <Islogin>
            <Lang>
                <Page/>
            </Lang>
        </Islogin>
    )
}
export default Index
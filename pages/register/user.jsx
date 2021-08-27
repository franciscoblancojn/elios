import React, { Component } from "react"

import Content from "@/components/content";
import ToCreateAccount from "@/components/form/toCreateAccount"
import CreateAccount from "@/components/form/createAccount"

class RegisterUser extends React.Component {
    render() {
        return (
            <Content 
            title="Elios Register"
            footer="1"
            redirect="1"
            className="page-login"
            >
                <div className="row">
                    <div className="col-6 flex-center">
                        <div className="contentLogo">
                            <img src="/img/elios_logo.png" alt="Elios" className="iconElios"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="LoginRS register">
                            <h1>
                                Crear Cuenta
                            </h1>
                            <CreateAccount></CreateAccount>
                            <hr/>
                            <ToCreateAccount
                            title="Ya tienes una cuenta?"
                            btn="ENTRAR"
                            url="/login"
                            ></ToCreateAccount>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
}
export default RegisterUser
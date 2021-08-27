import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";
import BtnGoogle from "@/components/btn/btnGoogle"
import BtnFacebook from "@/components/btn/btnFacebook"
import FormLogin from "@/components/form/login"
import ToCreateAccount from "@/components/form/toCreateAccount"

class Login extends React.Component {
    render() {
        return (
            <Content 
            title="Elios Login"
            footer="1"
            className="page-login"
            >
                <div className="row">
                    <div className="col-6 flex-center">
                        <div className="contentLogo">
                            <img src="/img/elios_logo.png" alt="Elios" className="iconElios"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="LoginRS">
                            <h1>
                                Ingresar
                            </h1>
                            <BtnGoogle>INGRESAR con Google</BtnGoogle>
                            <BtnFacebook>INGRESAR con Facebook</BtnFacebook>
                        </div>
                        <div className="LoginForm">
                            <FormLogin></FormLogin>
                            <Link href="/recover_password">
                                <a className="recover_password">Did you forget your password?</a>
                            </Link>
                            <ToCreateAccount></ToCreateAccount>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
}
export default Login
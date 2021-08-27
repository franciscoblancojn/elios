import React, { Component } from "react"

import Content from "@/components/content";
import BtnGoogle from "@/components/btn/btnGoogle"
import BtnFacebook from "@/components/btn/btnFacebook"
import BtnCorreo from "@/components/btn/btnCorreo"
import ToCreateAccount from "@/components/form/toCreateAccount"
import {CreateAccount} from '@/components/app'

class Register extends React.Component {
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
                            <h2>
                                Crear una cuenta con
                            </h2>
                            <BtnGoogle>crear con Google</BtnGoogle>
                            <BtnFacebook>crear con Facebook</BtnFacebook>
                            <BtnCorreo>crear con correo</BtnCorreo>
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
export default Register
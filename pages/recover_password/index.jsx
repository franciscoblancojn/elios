import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";
import FormRecoverPassword from "@/components/form/recoverPassword";

class Recover_password extends React.Component {
    render() {
        return (
            <Content 
            title="Elios Recover Password"
            footer="1"
            className="page-recover_password page-login"
            >
                <div className="row">
                    <div className="col-6 flex-center">
                        <div className="contentLogo">
                            <img src="/img/elios_logo.png" alt="Elios" className="iconElios"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="LoginRS content-recover_password">
                            <h1>
                                Olvidaste tu contraseña
                            </h1>
                            <FormRecoverPassword></FormRecoverPassword>
                            <p className="terminos_condiciones">
                                Ver Terminos y Condiciones
                            </p>
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
}
export default Recover_password
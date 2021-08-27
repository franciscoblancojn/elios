import React, { Component } from "react"
import Link from 'next/link'

import Content from "@/components/content";

class Recover_password extends React.Component {
    render() {
        return (
            <Content 
            title="Elios Cambio de Contraseña"
            footer="1"
            className="page-recover_password page-email-send page-login"
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
                                Cambio de Contraseña
                            </h1>
                            <img src="/img/email.png" alt="email"/>
                            <p>
                                Revisa tu bandeja de entrada<br/>
                                Hemos enviado un correo electrónico<br/> 
                                con los pasos a seguir
                            </p>
                            <Link href="/login">
                                <a className="btn">
                                    Hecho
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
}
export default Recover_password
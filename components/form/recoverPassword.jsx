import React, { Component } from "react"

import InputText from "@/components/input/inputText"
import BtnPrincipal from "@/components/btn/btnPrincipal"
import {resetPassword} from "@/firebase/firebase"

class formRecoverPassword extends React.Component {
    state = {
        message : "",
        email : "",
        code:""
    }
    onSendQuestion = (e) => {
        e.preventDefault()
        resetPassword(
            this.state,
            (e)=>{
                location = "recover_password/email_send"
            },
            ({msj,code})=>this.setState({message:msj,code}),
            )
    }
    changeState = (e) => {
        this.setState({[e.id]:`${e.value}`})
    }
    render() {
        return (
            <form
                onSubmit={this.onSendQuestion}
                className="formRecoverPassword"
                code={this.state.code}
            >
                <InputText
                    id="email"
                    name="email"
                    type="email"
                    label="Email*"
                    placeholder="Correo electronico"
                    className="inputRecoverPassword"
                    onChange={this.changeState}
                    required="1"
                />
                <p>{this.state.message}</p>
                <BtnPrincipal
                    className="inputSubmit"
                >
                    RECUPERAR
                </BtnPrincipal>
            </form>
        )
    }
}
export default formRecoverPassword
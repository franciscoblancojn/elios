import React, { Component } from "react"

import InputText from "@/components/input/inputText"
import BtnPrincipal from "@/components/btn/btnPrincipal"

import {loginEmailPassword} from "@firebase/firebase"

class Login extends React.Component {
    state = {
        email:"",
        password:"",
        message:"",
        code:"",
    }
    onLogin = (e) => {
        e.preventDefault()
        loginEmailPassword(
            this.state , 
            ({msj,code})=>this.setState({message:msj,code}),
            ()=>{
                this.setState({
                    email:"",
                    password:"",
                    message:""
                })
            })
    }
    changeState = (e) => {
        this.setState({[e.id]:e.value})
    }
    render() {
        return (
            <form
                onSubmit={this.onLogin}
                className="formLogin"
                code={this.state.code}
            >
                <InputText
                    id="email"
                    name="email"
                    type="email"
                    label="Correo *"
                    placeholder="Email"
                    className="inputLogin"
                    onChange={this.changeState}
                />
                <InputText
                    id="password"
                    name="password"
                    type="password"
                    label="Contraseña *"
                    placeholder="**************"
                    className="inputLogin"
                    onChange={this.changeState}
                />
                <p className="result">{this.state.message}</p>
                <BtnPrincipal
                    className="inputSubmit"
                >
                    INGRESAR
                </BtnPrincipal>
            </form>
        )
    }
}
export default Login
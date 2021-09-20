import React, { Component } from "react"

import InputText from "@/components/input/inputText"
import BtnPrincipal from "@/components/btn/btnPrincipal"

import {loginEmailPassword} from "@/firebase/firebase"

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
                    label={this.props.lang.form.login.email.label}
                    placeholder={this.props.lang.form.login.email.placeholder}
                    className="inputLogin"
                    onChange={this.changeState}
                />
                <InputText
                    id="password"
                    name="password"
                    type="password"
                    label={this.props.lang.form.login.password.label}
                    placeholder={this.props.lang.form.login.password.placeholder}
                    className="inputLogin"
                    onChange={this.changeState}
                />
                <p className="result">{this.props.lang.form.respond[this.state.message] || this.state.message}</p>
                <BtnPrincipal
                    className="inputSubmit"
                >
                    {this.props.lang.form.login.btn}
                </BtnPrincipal>
            </form>
        )
    }
}
export default Login
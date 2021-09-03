import React, { Component } from "react"

import BtnPrincipal from "@/components/btn/btnPrincipal"
import InputText from "@/components/input/inputText"

import {createAccount} from "@/firebase/firebase"

class CreateAccount extends React.Component {
    state = {
        name:"",
        surname:"",
        email:"",
        password:"",
        message:"",
        code:"",
    }
    Submit = (e) =>{
        e.preventDefault()
        createAccount(
            this.state , 
            ({msj,code})=>this.setState({message:msj,code}),
            ()=>{
                console.log("yes");
            })
    }
    changeState = (e) => {
        this.setState({[e.id]:e.value})
    }
    render() {
        return (
            <form 
                onSubmit={this.Submit}
                className="CreateAccount"
                code={this.state.code}
                >
                <InputText
                    id="name"
                    name="name"
                    type="text"
                    label="Nombre*"
                    placeholder="Tu nombre"
                    className="inputLogin"
                    onChange={this.changeState}
                />
                <InputText
                    id="surname"
                    name="surname"
                    type="text"
                    label="Apellido*"
                    placeholder="Tu apellido"
                    className="inputLogin"
                    onChange={this.changeState}
                />
                <InputText
                    id="email"
                    name="email"
                    type="email"
                    label="Correo *"
                    placeholder="micorreo@gmail.com"
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
                <BtnPrincipal>
                    Crear
                </BtnPrincipal>
            </form>
        )
    }
}
export default CreateAccount
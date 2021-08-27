import React, { Component } from "react"

import InputText from "@/components/input/inputText"
import InputSelect from "@/components/input/inputSelect"
import InputCheckboxt from "@/components/input/inputCheckbox"
import BtnPrincipal from "@/components/btn/btnPrincipal"
import {PutQuestionnaire} from "@/components/app"

const ROL = [
    "Dueño de negocio o fundador",
    "Ingeniero de datos",
    "Disenador",
    "Devops",
    "Disenador web",
    "Desarrollador",
    "Profesional en mercadeo",
    "Web master",
    "Project Manager",
    "CEO o President",
    "Asesor Financiero",
    "Comercial",
    "Otro",
]
const TAMANO_COMPANIA = [
    "1 - 4",
    "5 - 24",
    "25 -49",
    "50 - 249",
    "250 - 999",
    "1,000 +",
]

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        const questionnaire = props.currentUser.questionnaire;
        this.state = {
            I_am: questionnaire?.I_am || "",
            n_employees:questionnaire?.n_employees || "",
            getEmail:questionnaire?.getEmail || "false",
            error:"",
            code:""
        }
    }
    validatePreSend = () => {
        if(!ROL.includes(this.state.I_am)){
            this.setState({
                code:"empty/I_am"
            })
            return false
        }
        if(!TAMANO_COMPANIA.includes(this.state.n_employees)){
            this.setState({
                code:"empty/n_employees"
            })
            return false
        }
        return true;
    }
    onSendQuestion = (e) => {
        e.preventDefault()
        if(!this.validatePreSend())return;
        PutQuestionnaire({
            uid:this.props.currentUser.uid,
            email:this.props.currentUser.email,
            questionnaire:{
                I_am : this.state.I_am,
                n_employees : this.state.n_employees,
                getEmail : this.state.getEmail
            }
        },
        (e)=>{
            if(e.type=="error"){
                error = e.msj
            }else{
                location = "/"
            }
        })
    }
    changeState = (e) => {
        this.setState({[e.id]:`${e.value}`})
    }
    render() {
        return (
            <form
                onSubmit={this.onSendQuestion}
                className="formQuestionnaire"
                code={this.state.code}
            >
                <InputSelect
                    id="I_am"
                    name="I_am"
                    label="Soy Un:"
                    placeholder="Buscar rol"
                    className="inputQuestionnaire"
                    onChange={this.changeState}
                    required="1"
                    icon={
                        <img src="/icons/search.png" alt="Soy Un:"/>
                    }
                    defaultValue={this.state.I_am}
                    options={ROL}
                />
                <InputSelect
                    id="n_employees"
                    name="n_employees"
                    type="number"
                    label="Escoge el tamaño de tu compañía"
                    placeholder="25 - 49"
                    className="inputQuestionnaire"
                    onChange={this.changeState}
                    required="1"
                    icon={
                        <img src="/icons/search.png" alt="Mi empresa tiene estos empleados:"/>
                    }
                    defaultValue={this.state.n_employees}
                    options={TAMANO_COMPANIA}
                />
                <InputCheckboxt
                    id="getEmail"
                    name="getEmail"
                    label="Quieres recibir email marketing de Elios"
                    onChange={this.changeState}
                    defaultChecked={this.state.getEmail=="true"}
                />
                <p className="error">
                    {this.state.error}
                </p>
                <BtnPrincipal
                    className="inputSubmit"
                >
                    CONTINUAR
                </BtnPrincipal>
            </form>
        )
    }
}
export default Questionnaire
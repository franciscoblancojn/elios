import React, { Component } from "react"

import BtnLink from "@/components/btn/btnLink"
import {logout} from "@firebase/firebase"

import SvgSettings from "@/components/svg/settings"
import SvgLogout from "@/components/svg/logout"

import languajes from "@/languajes/languaje";

class MenuDropDown extends React.Component {
    state = {
        active : true,
        "configuracion":"Configuración",
        "cerrar_sesion":"Cerrar Sesión"
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            ...lang.menu
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    render() {
        return (
            <header
                className="header-drop-down"
            >
                {
                    this.props.title &&
                    (
                        <h1 className="title">
                            {this.props.title}
                        </h1>
                    )
                }
                <img
                    src="/img/elios_icon.png"
                    alt="Elios"
                    onClick={()=>this.setState({active:!this.state.active})}
                    className="iconMenu"
                />
                <div className="drop-down" hidden={this.state.active}>
                    
                    <BtnLink icon={<SvgSettings/>} link="/configuracion" noActive="1">{this.state.configuracion}</BtnLink>

                    <BtnLink 
                    icon={<SvgLogout/>}
                    onClick={logout}
                    >
                        {this.state.cerrar_sesion}
                    </BtnLink>
                </div>
            </header>
        )
    }
}
export default MenuDropDown
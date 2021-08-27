import React, { Component } from "react"

import BtnSites from "@/components/btn/btnSites"
import BtnLink from "@/components/btn/btnLink"

import SvgHome from "@/components/svg/home"
import SvgUser from "@/components/svg/user"
import SvgUserPluss from "@/components/svg/userPlus"
import SvgCliente from "@/components/svg/cliente"
import SvgSettings from "@/components/svg/settings"
import SvgDownload from "@/components/svg/download"

import languajes from "@/languajes/languaje";

class MenuLeft extends React.Component {
    state = {
        "inicio":"Inicio",
        "visitantes":"Visitantes",
        "leads":"Leads",
        "carrito":"Agregados al carrito",
        "whatsapp":"Whatsapp",
        "formularios":"Formularios",
        "clientes":"Clientes",
        "compras":"Compras",
        "fieles":"Fieles",
        "recurrencia":"Posible Recurrencia",
        "potencial":"Cliente Potencial",
        "configuracion":"Configuración",
        "descargar_plugins":"Descargar Plugins",
        "cerrar_sesion":"Cerrar Sesión"
    };
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
                className="header-left"
            >
                <div className="content-imgLogo">
                    <img src="/img/elios_logo_h.png" alt="Elios" className="imgLogo"/>
                </div>
                {this.props.btnSite}
                <br />
                <BtnLink icon={<SvgHome/>} link="/">{this.state.inicio}</BtnLink>

                <BtnLink icon={<SvgUser/>} link="/visitantes">{this.state.visitantes}</BtnLink>

                <BtnLink icon={<SvgUserPluss/>} link="/leads" className="iconSizeVar" style={{"--iconSize":"34px"}} subMenu="1">{this.state.leads}</BtnLink>
                <ul className="subMenu">
                    <li>
                        <BtnLink link="/leads/add-to-cart">
                            {this.state.carrito}
                        </BtnLink>
                    </li>
                    <li>
                        <BtnLink link="/leads/whatsapp">
                            {this.state.whatsapp}
                        </BtnLink>
                    </li>
                    <li>
                        <BtnLink link="/leads/formulario">
                            {this.state.formularios}
                        </BtnLink>
                    </li>
                </ul>
                
                <BtnLink icon={<SvgCliente/>} link="/clientes" subMenu="1">{this.state.clientes}</BtnLink>
                <ul className="subMenu">
                    <li>
                        <BtnLink link="/clientes/compras">
                            {this.state.compras}
                        </BtnLink>
                    </li>
                    <li>
                        <BtnLink link="/clientes/fieles">
                            {this.state.fieles}
                        </BtnLink>
                    </li>
                    <li>
                        <BtnLink link="/clientes/posible-recurrencia">
                            {this.state.recurrencia}
                        </BtnLink>
                    </li>
                    <li>
                        <BtnLink link="/clientes/cliente-potencial">
                            {this.state.potencial}
                        </BtnLink>
                    </li>
                </ul>

                <div className="mt-auto"></div>

                <BtnLink icon={<SvgSettings/>} link="/configuracion">{this.state.configuracion}</BtnLink>

                {/* <BtnLink icon={<SvgDownload/>} link="/descargar-plugins">{this.state.descargar_plugins}</BtnLink> */}

            </header>
        )
    }
}
export default MenuLeft
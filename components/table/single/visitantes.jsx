import React, { Component } from "react"
import Link from 'next/link'

import {getClientes} from "@/components/app"
import {printValue} from "@/components/functions"

import ArrowRight from "@/components/svg/right-arrow"

const KeysHead = {
    continentCode: "Continente Code",
    continentName: "Continente",
    pais    :"Pais",
    stateProv : "Estado",
    countryCode  :"Country Code",
    countryName  :"Ciudad",
    os      :"OS",
    browser :"Browser",
    platform : "Platforma",
    system : "System",

    sesiones:"Sesiones",
    events :"Eventos",
    compras  :"Ventas",

}

class SingleVisitantes extends React.Component {
    state = {
        user : {}
    }
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const _id = this.props.id
        const user = this.props.currentUser
        const key = user.key
        const host = this.props.getHostSelect()
        var query = {
            _id
        }
        var _return = {}
        getClientes({
            key,
            host,
            query,
            _return,
            respondOk : (r) => {
                console.log(r);
                if(r.type == "error"){
                    console.log(r);
                    this.setState({
                        error:true,
                        msjError:r.msj
                    })
                }else if(r.length == 0){
                    this.setState({
                        error:true,
                        msjError:"Usuario Invalido"
                    })
                }else{
                    r = r.map((e)=>{
                        return {
                            ...e,
                            sesiones : e?.sesiones || 0,
                            events : e?.events || 0,
                            compras : e?.compras || 0
                        }
                    })
                    this.setState({
                        user:r[0]
                    })
                }
            },
        })
    }
    render(){
        const idKeys = Object.keys(KeysHead)
        return  (
            <div className="content-table">
                <Link href={`/visitantes/`}>
                    <a className="before">
                        <ArrowRight/>
                        Volver a Visitantes
                    </a>
                </Link>
                <h1 className="titleP">
                {
                    this.state.user.ventas > 0 ?
                    "Buyer Persona":
                    "Persona"
                }
                </h1>
                <div className="id">
                    IP: {this.props.id}
                </div>
                {
                    idKeys.map((e,i)=>(
                        <div key={i} className={`textItem ${e}`}>
                            <strong>{KeysHead[e]}: </strong>
                            {printValue({
                                key:e,
                                value:this.state.user[e],
                                KeysHead
                            })}
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default SingleVisitantes
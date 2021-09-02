import React, { Component } from "react"
import Link from 'next/link'

import {getEvents} from "@/app/app"
import {printValue} from "@/components/functions"

import ArrowRight from "@/components/svg/right-arrow"

const KeysHead = {
    first_name : "Nombre",
    last_name : "Apellido",

    countryCode    :"Pais",
    ciudad  :"Ciudad",

    address1 : "Address",
    address2 : "Address 2",
    phone : "Numero Telefónico",
    email : "Correo Electrónico",

    os      :"OS",
    browser :"Navegador",

    pageUrl:"Url",

}
class SingleLeads extends React.Component {
    state = {
        lead : {},
        keys: []
    }
    constructor(props) {
        super(props);
    }
    setLeads = (result) => {
        var lead = result[0]
        delete lead._id
        this.setState({
            lead:lead,
            keys:Object.keys(lead)
        })
    }
    render(){
        const id = this.props.id
        const user = this.props.currentUser
        const key = user.key
        const host = this.props.getHostSelect()
        var query = {
            _id:id
        }
        var _return = {}
        getEvents({
            key,
            host,
            query,
            _return,
            respondOk : this.setLeads
        })
        var idKeys = this.state.keys
        return  (
            <div className="content-table">
                <Link href={`/leads/`}>
                    <a className="before">
                        <ArrowRight/>
                        Volver a Leads
                    </a>
                </Link>
                <h1 className="titleP">
                    Lead
                </h1>
                <div className="id">
                    ID: {this.props.id}
                </div>
                <br />
                {
                    idKeys.map((e,i)=>(
                        <div key={i} className="textItem">
                            <strong>{KeysHead[e]?KeysHead[e]:e}: </strong>
                            {printValue({
                                key:e,
                                value:this.state.lead[e],
                                KeysHead
                            })}
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default SingleLeads
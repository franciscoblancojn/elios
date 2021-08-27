import React, { Component } from "react"
import Link from 'next/link'

import {getEvents, getClientes} from "@/components/app"
import {printValue,TableRow,printFilter} from "@/components/functions"
import SvgView from "../svg/view"
import SvgReload from "../svg/reload"

const KeysHead = {
    _id      :"ID",
    ip      :"IP",
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
class TableVisitantes extends TableRow {
    onLoad = () => {
        this.setState({
            load:true
        })
        this.clearConfig()
        const user = this.props.currentUser
        const key = user.key
        const host = this.props.getHostSelect()
        if(!user.host.includes(host)){
            this.setState({
                error:true,
                msjError:"Debe agregar un Sitio Web"
            })
            return;
        }
        var query = {}
        var _return = {}
        getClientes({
            key,
            host,
            query,
            _return,
            respondOk : (r) => {
                if(r.type == "error"){
                    console.log(r);
                    this.setState({
                        error:true,
                        msjError:r.msj
                    })
                }else{
                    r = r.map((e)=>{
                        return {
                            ...e,
                            sesiones : e?.sesiones || 0,
                            events : e?.events || 0,
                            compras : e?.compras?.length || 0
                        }
                    })
                    this.setState({
                        rowF:r
                    })
                    this.setRow(r)
                    this.setState({
                        load:false
                    })
                }
            },
        })
    }
    render(){
        // console.log(this.props.host);
        // console.log(this.props.getHostSelect());
        const idKeys = Object.keys(KeysHead)
        if(this.state.error)return<div className="content-table">{this.state.msjError || "Error"}</div>
        if(this.state.load)return<div className="content-table">Load.....</div>
        if(this.state.rowF.length ==0){
            return (<div className="content-table">No existen elementos</div>)
        }
        return  (
            <div className="content-table">
                <div className="top-table">
                    {this.pagination()}
                </div>
                <div className="overflow">
                    <table className="table-h">
                        <thead className="filters">
                            <tr >
                                <th>
                                    <button className="btn clear" onClick={this.clearFilter}>
                                        <SvgReload></SvgReload>
                                    </button>
                                </th>
                                {
                                    idKeys.map((e,i)=>(
                                        <th key={i} id={e} order="none">
                                            {printFilter({
                                                key : e,
                                                row : this.state.rowF,
                                                search : this.search,
                                                select : this.select,
                                                searchObj : this.searchObj,
                                                KeysHead
                                            })}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th></th>
                                {
                                    idKeys.map((e,i)=>(
                                        <th key={i} id={e} order="none">
                                            {KeysHead[e]}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rowShow.map((r,i)=>(
                                    <tr key={i} ip={r.id}>
                                        <td className="view">
                                            <Link href={`/visitantes/${r._id}`}>
                                                <a>
                                                    <SvgView></SvgView>
                                                </a>
                                            </Link>
                                        </td>
                                        {
                                            idKeys.map((e,j)=>(
                                                <td key={j} id={e}>
                                                    {printValue({
                                                        key:e,
                                                        value:r[e],
                                                        KeysHead
                                                    })}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default TableVisitantes
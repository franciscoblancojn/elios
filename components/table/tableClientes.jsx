import React, { Component } from "react"
import Link from 'next/link'

import {getClientes} from "@/components/app"
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
class TableClientes extends TableRow {
    saveRowF = (result) => {
        var row = {}
        result.forEach(e => {
            var ip = e.ipAddress || e.ip || e.browser_ip
            if(ip){
                row[ip] = row[ip] ? row[ip] : {
                    id:window.btoa(ip),
                    marca:"",
                    ip,
                    pais:e.countryCode,
                    ciudad:e.stateProv,
                    os:e.os,
                    browser:[],
                    sesiones:0,
                    eventos:0,
                    ventas:0,
                }
                
                if(!row[ip].pais)row[ip].pais = e.countryCode
                if(!row[ip].ciudad)row[ip].ciudad = e.stateProv
                if(!row[ip].os)row[ip].os = e.os

                if(row[ip].browser.indexOf(e.browser) == -1){
                    row[ip].browser.push(e.browser)
                }
                if(e?.event?.type == "load"){
                    row[ip].sesiones++
                }
                row[ip].eventos++
            }
            if(e.type=="orders-paid"){
                var ip = e.browser_ip || e.ip
                row[ip].ventas ++
            }
        });
        result = Object.values(row)
        result = result.filter((e)=>
            e.ventas >= (this.props.minVentas ?? 0) && e.ventas <= (this.props.maxVentas ?? 99999999999) &&
            e.eventos >= (this.props.minEventos ?? 0) && e.eventos <= (this.props.maxEventos ?? 99999999999)

        )
        this.setState({
            rowF:result
        })
        this.setRow(result)
        this.setState({
            load:false
        })
    }
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
                    }).filter((e)=>
                        e.compras >= (this.props.minVentas ?? 0) && e.compras <= (this.props.maxVentas ?? 99999999999) &&
                        e.events >= (this.props.minEventos ?? 0) && e.events <= (this.props.maxEventos ?? 99999999999)

                    )
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
                                        <th key={`f${i}`} id={e} order="none">
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
                                        <th key={`h${i}`} id={e} order="none">
                                            {KeysHead[e]}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rowShow.map((r,i)=>(
                                    <tr key={`tr${i}`} ip={r.id}>
                                        <td className="view">
                                            <Link href={`/visitantes/${r._id}`}>
                                                <a>
                                                    <SvgView></SvgView>
                                                </a>
                                            </Link>
                                        </td>
                                        {
                                            idKeys.map((e,j)=>(
                                                <td key={`td${i}-${j}`} id={e}>
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
export default TableClientes
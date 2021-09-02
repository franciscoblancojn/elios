import React, { Component } from "react"
import Link from 'next/link'

import {getEvents} from "@/app/app"
import {printValue,TableRow,printFilter} from "@/components/functions"
import LimitText from "@/components/card/limitText"
import SvgView from "../svg/view"
import SvgReload from "../svg/reload"

const DefaultKeysHead = {
    _id      :"ID",
    ipAddress      :"IP",
    continentName:"Continente",
    countryCode    :"Pais Code",
    countryName    :"Pais",
    stateProv :"State",
    city  :"Ciudad",

    os      :"OS",
    platform:"Platforma",
    system  :"System",
    browser :"Navegador",

    pageUrl:"Url",
    get:"GET",
    date:"Fecha",

}

class TableLeads extends TableRow {
    onLoad = () => {
        this.setState({
            load:true
        })
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
        var query = this.props.query ?? {
            event:{
                $exists: true
            }
        }
        var _return = {}
        this.clearConfig()
        getEvents({
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
                    this.setState({
                        rowF:r
                    })
                    this.setRow(r)
                    this.setState({
                        load:false
                    })
                }
            }
        })
    }
    render(){
        const KeysHead = this.props.keys ?? DefaultKeysHead
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
                                                rageDate : this.rageDate,
                                                KeysHead,
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
                                    <tr key={i} ip={r._id}>
                                        <td className="view">
                                            <Link href={`/leads/${r._id}`}>
                                                <a>
                                                    <SvgView></SvgView>
                                                </a>
                                            </Link>
                                        </td>
                                        {
                                            idKeys.map((e,j)=>{
                                                if(r[e] == undefined){
                                                    r[e] = ""
                                                }
                                                const n = JSON.stringify(r[e]).length
                                                var style = {}
                                                if(n>100){
                                                    style = {
                                                        maxWidth:"none"
                                                    }
                                                }
                                                return (
                                                    <td key={`${i}-${j}`} style={style}>
                                                        <LimitText sw={n>100} >
                                                            {printValue({
                                                                key:e,
                                                                value:r[e],
                                                                KeysHead:idKeys,
                                                                noPrint:this.props.noPrint ?? [],
                                                            })}
                                                        </LimitText>
                                                    </td>
                                                )
                                            })
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
export default TableLeads
import React, { Component, useState } from "react"
import Pagination from "@/components/table/pagination"
import LimitText from "@/components/card/limitText"
import Table from "@/components/table/table"
import Modal from "@/components/modal/modal"
import FilterDate from "@/components/filters/date"
import SvgSearch from "@/components/svg/search"
import { DateRangePicker } from 'react-date-range';

const CONFIG = {
    page:0,
    nitems:10,
    items:0,
    maxpage:0,
}
export class TableRow extends React.Component {
    state = {
        rowF : [],
        row : [],
        rowShow : [],
        config : {...CONFIG},
        load : true,
        error : false,
    }
    changePage = (e) => {
        var config = this.state.config
        config.page = e
        this.setState({
            config
        })
        this.setRow(this.state.row)
    }
    changeNItems = (e) => {
        var config = this.state.config
        config.nitems = e
        config.page = 0
        this.setState({
            config
        })
        this.setRow(this.state.row)
    }
    setRow = (result) => {
        const config = this.state.config
        config.items = result.length
        config.maxpage = Math.ceil(config.items / config.nitems) -1
        const rowShow = result.slice(config.page * config.nitems,(config.page + 1)* config.nitems)
        this.setState({
            row:result,
            rowShow:rowShow,
        })
    }
    clearConfig = () => {
        this.changePage(0)
    }
    clearFilter = () => {
        var row = this.state.rowF
        this.clearConfig()
        this.setRow(row)
    }
    search = (value,key) => {
        var row = this.state.rowF
        row = row.filter((e)=>e[key] && e[key].indexOf(value) > -1)
        this.clearConfig()
        this.setRow(row)
    }
    select = (value,key) => {
        var row = this.state.rowF
        row = row.filter((e)=>e[key]==value)
        this.clearConfig()
        this.setRow(row)
    }
    searchObj = (value,key) => {
        var row = this.state.rowF
        row = row.filter((e)=>e[key] && JSON.stringify(e[key]).indexOf(value) > -1)
        this.clearConfig()
        this.setRow(row)
    }
    rageDate = (key,value) => {
        const start = value.startDate.getTime()
        const end = value.endDate.getTime()

        var row = this.state.rowF
        row = row.filter((e)=>{
            if(!e[key])return false;
            const rDay = e[key].split("T")[0].split('-').join("/")

            const date = new Date(rDay)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()

            const eDay = (new Date(`${year}-${month}-${day}`)).getTime()

            return eDay >= start && eDay <= end  
        })
        this.clearConfig()
        this.setRow(row)
        console.log(key,value);
    }
    pagination = () => {
        const config = this.state.config
        return <Pagination page={config.page} pageT={config.maxpage} changePage={this.changePage} nItems={config.nitems} changeNItems={this.changeNItems}/>
    }
    toggleLoad = () => {
        this.setState({load:!this.state.load})
    }
    componentDidMount(){
        this.onLoad()
        // this.props.hookChangeHost(()=>{this.onLoad()})
    }
}


export const printValue = ({key, value,KeysHead,__id,noPrint=[]}) => {
    if(value == null)return;
    if(noPrint.includes(key))return;
    const printWithImg = (e,i=-1)=>{
        if(e==undefined)return"";
        const c = <>
            <img src={`/icons/${e.toLowerCase().replace(" ","-")}.png`} alt={e} />
            {e}
        </>
        return <div className="content-i" key={`i${i}`}>{c}</div>
    }
    const printWithUrl = (e) => {
        return (
            <a href={e} target="_blank" key={__id}>
                {e}
            </a>
        )
    }
    const printCompras = (e) => {
        if(typeof e == "number")return e;
        return <Table row={e}/>
    }
    const SwitchPrint = {
        "pageUrl":printWithUrl,
        "pais":printWithImg,
        "countryCode":printWithImg,
        "os":printWithImg,
        "compras":printCompras,
        "browser":(value)=>(value==undefined || typeof value == "string"?printWithImg(value,__id):value.map((e,i)=>printWithImg(e,i)))
    }
    if(Object.keys(SwitchPrint).includes(key)){
        value = SwitchPrint[key] ? SwitchPrint[key](value) : value

    }else if(Array.isArray(value)){
        return value.map((e,i)=>printValue({
            key,
            value:e,
            KeysHead,
            __id:i,
            noPrint
        }))
    }else if(typeof value == "object"){
        var newkeys = Object.keys(value)
        if(newkeys.length > 0){
            const auxValue = value
            value = (
                <ul>
                    {newkeys.map((e,i)=>(
                        <li key={`li-g${key}-${i}`} >
                            <strong>{KeysHead[e]?KeysHead[e]:e}: </strong>
                            {printValue({
                                key: e,
                                value: auxValue[e],
                                KeysHead: newkeys,
                                __id: `g${key}-${i}`,
                                noPrint
                            })}
                        </li>
                    ))}
                </ul>
            )
        }else{
            value = "void";
        }
        // value = JSON.stringify(value)
    }else{
        value = SwitchPrint[key] ? SwitchPrint[key](value) : value
    }
    return value
}

var valueFilter = ""
const changeValueFilter = (e) => {
    valueFilter = e.target.value
}
export const printFilter = ({key, row, search, select, searchObj,KeysHead,rageDate=console.log}) => {
    var value 
    const filterSelect =  (e) => {
        var list = {}
        row.map((v,i)=>{
            list[row[i][key]] = row[i][key]
        })
        list = Object.values(list)
        return (
            <div className="filtro list">
                <select name={e} id={e}  className="input" defaultValue="" onChange={changeValueFilter}>
                    <option disabled>Select</option>
                    {list.map((e,i)=>{
                        if(!e)return;
                        return <option key={`s${i}`}>{e}</option>
                    })}
                </select>
                <button className="btn" onClick={()=>select(valueFilter,key)}><SvgSearch></SvgSearch></button>
            </div>
        )
    }
    const filterSearch = (e) => (
        <div className="filtro search">
            <input type="text" name={e} id={e} placeholder={`Search ${e}`} className="input" onChange={changeValueFilter}/>
            <button className="btn" onClick={()=>search(valueFilter,key)}><SvgSearch></SvgSearch></button>
        </div>
    )
    const filterSearchObj = (e) => (
        <div className="filtro search">
            <input type="text" name={e} id={e} placeholder={`Search ${e}`} className="input" onChange={changeValueFilter}/>
            <button className="btn" onClick={()=>searchObj(valueFilter,key)}><SvgSearch></SvgSearch></button>
        </div>
    )
    const filterDate = (e) => <FilterDate onChange={(value)=>rageDate(e,value)}/>
    const SwitchPrint = {
        // ipAddress : filterSelect,
        continentName : filterSelect,

        pais    :filterSelect,
        ciudad    :filterSelect,
        stateProv :filterSelect,
        city  :filterSelect,
        countryCode : filterSelect,
        countryName : filterSelect,
    
        os      :filterSelect,
        platform:filterSelect,
        system  :filterSelect,
        browser :filterSelect,
        get : filterSearchObj,

        date : filterDate,

        default : filterSearch
    }
    value = SwitchPrint[key] ? SwitchPrint[key](key) : SwitchPrint.default(KeysHead[key])
    return value
}
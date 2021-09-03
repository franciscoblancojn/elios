import React, { Component } from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'

import SvgArrow from "@/components/svg/arrow"
import SvgSearch from "@/components/svg/search"

import {getUser} from "@/functions/index";

class BtnSites2 extends React.Component {
    state = {
        style:false,
        hidden:false,
        site:[],
        siteShow:[],
        icon:{},
        select:"",
        searchSite:""
    }
    styleUl = () => {
        const ulSites = document.getElementById("ulSites")
        const {
            left,
            top,
            width,
            height
        } = ulSites.getBoundingClientRect()

        ulSites.style.width = `${width}px`
        ulSites.style.height = `${height}px`
        ulSites.style.top = `${top}px`
        ulSites.style.left = `${left}px`
        ulSites.style.opacity = "1"
        ulSites.style.zIndex = "9999"
        ulSites.style.position = "fixed"
        ulSites.style.minWidth = "0"
        ulSites.style.maxHeight = `calc(100vh - ${top}px)`

        this.setState({
            style : true
        })
    }
    componentDidMount(){
        const currentUser =  this.props.currentUser
        const site = currentUser?.host ?? []
        const siteShow = currentUser?.host ?? []
        const icon = currentUser?.cms ?? {}
        var select = localStorage.getItem('hostSelect') ?? site[0]
        if(!site.includes(select)){
            select = site[0]
            localStorage.setItem('hostSelect',select)
        }
        this.setState({
            site,
            siteShow,
            icon,
            select
        })

        this.onChangeSite = ((e) => {
            this.setState({select:e})
            this.props.onChange(e)
        }) ?? ((e) => {})
        getUser()
    }
    onChangeSite = () => {}
    toggleHidden = () => {
        if(!this.state.style){
            this.styleUl()
        }else{
            this.setState({hidden:!this.state.hidden})
        }
    }
    onChangeSearchSite = (e) => {
        const value = e.target.value
        const siteShow = this.state.site.filter((e)=>e.indexOf(value)>-1)
        this.setState({
            searchSite : value,
            siteShow
        })
    }
    render() {
        const site = this.state.site ?? []
        const siteShow = this.state.siteShow ?? []
        const icon = this.state.icon ?? {}
        const select = this.state.select ?? site[0]
        return (
            <>
                {
                    (site.length == 0)?
                    (
                        <Link href="/">
                            <a 
                            className={`btn-2 ${this.props.className || ""}`}
                            >
                                <img src="/icons/+.svg" alt="+" className="iconM"/>
                                AGREGAR SITIO NUEVO
                            </a>
                        </Link>
                    )
                    :
                    (
                        <div className={`btn-select ${this.props.className || ""}`}>
                            <button
                            className="btn-2"
                            onClick={this.toggleHidden}
                            >
                                <span className="select">
                                    <img src={`/icons/icon-${icon[select]}.png`} alt={select} className="iconHost"/>
                                    {select}
                                    <SvgArrow/>
                                </span>
                            </button>
                            <ul hidden={this.state.hidden} id="ulSites">
                                <li>
                                    <div className="search">
                                        <SvgSearch></SvgSearch>
                                        <input type="text" name="searchSite" id="searchSite" onChange={this.onChangeSearchSite} value={this.state.searchSite} placeholder="Buscar Sitio"/>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a 
                                        className={`btn ${this.props.className || ""}`}
                                        >
                                            AGREGAR SITIO NUEVO
                                        </a>
                                    </Link>
                                </li>
                                {
                                    siteShow.length > 0 ?
                                    siteShow.map((e,i)=>(
                                        <li key={i} value={e}
                                        onClick={
                                            ()=>{
                                                this.onChangeSite(e)
                                                this.toggleHidden()
                                            }
                                        }
                                        >
                                            <img src={`/icons/icon-${icon[e]}.png`} alt={e} className="iconHost"/>
                                            {e}
                                        </li>
                                    ))
                                    :
                                    (
                                        <li className="noFound">No found</li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </>
        )
    }
}
const BtnSites = ({className}) => {
    const [showList, setShowList] = useState(false)
    const user = getUser()
    const sites = user.sites || []

    const toggleShowList = () => setShowList(!showList)
    return <>
        {
            (sites.length == 0)?
            (
                <Link href="/">
                    <a 
                    className={`btn-2 ${className || ""}`}
                    >
                        <img src="/icons/+.svg" alt="+" className="iconM"/>
                        AGREGAR SITIO NUEVO
                    </a>
                </Link>
            )
            :
            (
                <div className={`btn-select ${className || ""}`}>
                    <button
                    className="btn-2"
                    onClick={toggleShowList}
                    >
                        <span className="select">
                            <img src={`/icons/icon-${icon[select]}.png`} alt={select} className="iconHost"/>
                            {select}
                            <SvgArrow/>
                        </span>
                    </button>
                    <ul hidden={this.state.hidden} id="ulSites">
                        <li>
                            <div className="search">
                                <SvgSearch></SvgSearch>
                                <input type="text" name="searchSite" id="searchSite" onChange={this.onChangeSearchSite} value={this.state.searchSite} placeholder="Buscar Sitio"/>
                            </div>
                        </li>
                        <li>
                            <Link href="/">
                                <a 
                                className={`btn ${this.props.className || ""}`}
                                >
                                    AGREGAR SITIO NUEVO
                                </a>
                            </Link>
                        </li>
                        {
                            siteShow.length > 0 ?
                            siteShow.map((e,i)=>(
                                <li key={i} value={e}
                                onClick={
                                    ()=>{
                                        this.onChangeSite(e)
                                        this.toggleHidden()
                                    }
                                }
                                >
                                    <img src={`/icons/icon-${icon[e]}.png`} alt={e} className="iconHost"/>
                                    {e}
                                </li>
                            ))
                            :
                            (
                                <li className="noFound">No found</li>
                            )
                        }
                    </ul>
                </div>
            )
        }
    </>
}
export default BtnSites
import React, { Component } from "react"

import Content from "@/components/content";

import languajes from "@/languajes/languaje";

class Index extends React.Component {
    state = {
        title : "Idiomas",
        "actual":"Idioma actual",
        lang:"es",
        languajes:[
            "es",
            "en"
        ]
    }
    loadLanguajes = async () => {
        const lang = await languajes()
        this.setState({
            ...this.state,
            title:lang.menu.idiomas,
            ...lang.idioma,
            lang:localStorage.getItem("lang") ?? "es",
        })
    }
    componentDidMount(){
        this.loadLanguajes()
    }
    changeLanguaje(value){
        localStorage.setItem("lang",value)
        window.location.reload()
        this.setState({
            ...this.state,
            lang:value
        })
    }
    render() {
        return (
            <Content 
            title={this.state.title}
            className="cMenu page-configuracion"
            >
                <div className="content-info-page">
                    <h2>
                        {this.state.actual}
                    </h2>
                    <select className="select-ss" onChange={(e)=>this.changeLanguaje(e.target.value)} defaultValue={this.state.lang}>
                        {this.state.languajes.map((e,i)=>{
                            return(
                                <option key={i} value={e}>{e}</option>
                            )
                        })}
                    </select>
                </div>
            </Content>
        )
    }
}
export default Index
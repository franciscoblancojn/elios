import React, { Component } from "react"
import {loginGoogle} from "@/firebase/firebase"

class BtnGoogle extends React.Component {
    render() {
        return (
            <button 
            className={`btn btn-google btn-rs ${this.props.className || ""}`}
            onClick={loginGoogle}
            >
                <img src="/icons/google.png" alt="google"/>
                {this.props.children}
            </button>
        )
    }
}
export default BtnGoogle
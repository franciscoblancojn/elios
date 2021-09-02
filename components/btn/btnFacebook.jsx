import React, { Component } from "react"
import {loginFacebook} from "@firebase/firebase"

class BtnFacebook extends React.Component {
    render() {
        return (
            <button 
            className={`btn btn-facebook btn-rs ${this.props.className || ""}`}
            onClick={loginFacebook}
            >
                <img src="/icons/facebook_white.png" alt="google"/>
                {this.props.children}
            </button>
        )
    }
}
export default BtnFacebook
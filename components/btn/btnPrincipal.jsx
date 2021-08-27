import React, { Component } from "react"

class BtnPrincipal extends React.Component {
    render() {
        return (
            <button 
            className={`btn ${this.props.className || ""}`}
            onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}
export default BtnPrincipal
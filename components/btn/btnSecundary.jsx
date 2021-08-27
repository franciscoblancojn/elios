import React, { Component } from "react"

class BtnSecundary extends React.Component {
    render() {
        return (
            <button 
            className={`btn-2 ${this.props.className || ""}`}
            onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}
export default BtnSecundary
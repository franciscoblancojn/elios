import React, { Component } from "react"

class BtnThesis extends React.Component {
    render() {
        return (
            <button 
            className={`btn-3 ${this.props.className || ""}`}
            onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}
export default BtnThesis
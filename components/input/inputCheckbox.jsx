import React, { Component } from "react"

class InputCheckboxt extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.id || ""} className="content-Input"> 
                <span className="content-Input-checkbox">
                    <input 
                        id={this.props.id || ""}
                        name={this.props.name || ""}
                        type="checkbox"
                        className={`input-checkbox ${this.props.className || ""}`}
                        onChange={(e)=>this.props.onChange({
                            id:this.props.id,
                            value:e.target.checked
                        })}
                        {...this.props.extras}
                        defaultChecked={this.props.defaultChecked}
                    />
                    {this.props.label}
                </span>
            </label>
        )
    }
}
export default InputCheckboxt
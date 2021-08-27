import React, { Component } from "react"

class InputText extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.id || ""} className="content-Input">
                <span className="spanInput">
                    {this.props.label}
                </span>
                {
                    this.props.required &&
                    (
                        <span className="required">requerido*</span>
                    )
                }
                <div className="div-input">
                    {
                        this.props.icon && 
                        (
                            <span className="icon">
                                {this.props.icon}
                            </span>
                        )
                    }
                    <input 
                    id={this.props.id || ""}
                    name={this.props.name || ""}
                    type={this.props.type || "text"}
                    placeholder={this.props.placeholder || ""}
                    className={`input ${this.props.className || ""}`}
                    onChange={(e)=>this.props.onChange({
                        id:this.props.id,
                        value:e.target.value
                    })}
                    required={this.props.required}
                    {...this.props.extras}
                    defaultValue={this.props.defaultValue}
                    />
                </div>
            </label>
        )
    }
}
export default InputText
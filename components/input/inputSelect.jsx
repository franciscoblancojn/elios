import React, { Component } from "react"

class InputSelect extends React.Component {
    state = {
        value:"",
        active:"false"
    }
    onChangeValue = (e) => {
        const value = e.target.value
        this.setState({value})
    }
    onSelect = (value) => {
        this.setState({
            value,
            active:"false"
        })
        this.props.onChange({
            id:this.props.id,
            value
        })
    }
    showOptions = () => this.setState({active:"true"})
    hiddenOptions = () => this.setState({active:"false"})
    render() {
        const options = this.props.options ?? []
        return (
            <label htmlFor={this.props.id || ""} className="content-Input content-Input-Select"
            onMouseLeave={this.hiddenOptions}>
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
                    type="text"
                    placeholder={this.props.placeholder || ""}
                    className={`input input-select ${this.props.className || ""}`}
                    required={this.props.required}
                    {...this.props.extras}
                    value={this.state.value}
                    onChange={()=>{}}
                    onClick={this.showOptions}
                    />
                    <ul className="options" active={this.state.active}>
                        {options.map((e,i)=>(
                            <li key={i} value={e} onClick={()=>this.onSelect(e)}>
                                {e}
                            </li>
                        ))}
                    </ul>
                </div>
            </label>
        )
    }
}
export default InputSelect
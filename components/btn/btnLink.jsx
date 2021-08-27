import React, { Component } from "react"
import Link from 'next/link'
import dynamic from 'next/dynamic'

class BtnLink extends React.Component {
    state = {
        showSubmenu : false,
        active : false
    }
    clickSubMenu = (e) => {
        e.preventDefault()
        this.setState({showSubmenu:!this.state.showSubmenu})
    }
    componentDidMount(){
        const Active = location.pathname.indexOf(this.props.link) > -1   && this.props.noActive == undefined && 
                        (this.props.link != "/" || this.props.link == location.pathname)
        this.setState({
            showSubmenu : Active,
            active : Active
        })
    }
    render() {
        const Active = this.state.active
        const showSubmenu = this.state.showSubmenu
        return (
            <Link href={this.props.link || "#"}>
                <a 
                className={`btn-link ${this.props.className || ""} ${(Active)?"active":""} ${showSubmenu?"showSubmenu":""}`}
                onClick={this.props.onClick}
                style={this.props.style || {}}
                >
                    {
                        this.props.icon != undefined && 
                        (
                            <div className="btn-link-icon">
                                {this.props.icon}
                            </div>
                        )
                    }
                    {this.props.children}
                    {
                        this.props.subMenu && 
                        (
                            <span className="btnSubMenu" onClick={this.clickSubMenu}></span>
                        )
                    }
                </a>
            </Link>
        )
    }
}
export default BtnLink
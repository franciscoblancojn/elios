import React, { Component } from "react"
import Link from 'next/link'

class Card extends React.Component {
    render() {
        const card = (
            <div className="card">
                <div className="card-head">
                    {this.props.icon ?? ""}
                    <h3 className="card-title">
                        {this.props.title}
                    </h3>
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
        if(this.props.link){
            return (
                <Link href={this.props.link}>
                    <a className="a-card">
                        {card}
                    </a>
                </Link>
            )
        }
        return card
    }
}
export default Card
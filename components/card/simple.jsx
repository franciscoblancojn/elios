import React, { Component } from "react"

import ArrowRight from "@/components/svg/right-arrow"

class CardSimple extends React.Component {
    render() {
        return (
            <div className="card-simple">
                <div 
                className="before"
                onClick={()=>{history.go(-1);}}
                >
                    <ArrowRight/>
                    Atras
                </div>
                {this.props.children}
            </div>
        )
    }
}
export default CardSimple
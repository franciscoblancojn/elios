import React, { Component } from "react"
import Link from 'next/link'

class Points extends React.Component {
    render() {
        var n = this.props.n ?? 2
        var s = this.props.s ?? 0
        var c = this.props.c ?? ["",""]
        var a = []
        var l = this.props.l ?? false
        var r = this.props.r ?? false
        var u = this.props.u ?? ["",""]

        var cl = ""
        var co = ""
        for (var i = 0; i < n; i++) {
            cl = `point ${(i==s || (l && i<s))?"select":""}`
            co = (
                <>
                    {
                        c[i]!="" &&
                        (
                            <span className="span">{c[i]}</span>
                        )
                    }
                </>
            )
            if(r){
                a.push(
                    <Link key={i} href={u[i]}>
                        <a className={cl}>
                            {co}
                        </a>
                    </Link>
                )
            }else{
                a.push(<div key={i} className={cl}>{co}</div>)
            }
        }
        return (
            <div className="content-points">
                {a.map((e)=>e)}
            </div>
        )
    }
}
export default Points
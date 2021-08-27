import React, { Component } from "react"
import Link from 'next/link'

class Single extends React.Component {
    render() {
        return (
            <header
                className="header-single"
            >
                <Link href="/">
                    <a>
                        <img src="/img/elios_logo_h.png" alt="Elios"/>
                    </a>
                </Link>
            </header>
        )
    }
}
export default Single
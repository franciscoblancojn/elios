import { useState, useEffect } from "react"
import Link from 'next/link'

import {getUser} from "@/functions/index";

import LoaderCircle from "@/components/loader/circle";
import UserInLive from "@/components/msg/userInLive";
import FilterDateShow from "@/components/filters/dateShow"

import ArrowRight from "@/components/svg/right-arrow"

const Site = ({host}) => {
    return <div className="container" style={{maxWidth:"1000px"}}>
        <div className="flex flex-between flex-align-center">
            <Link href={`/`}>
                <a className="before mb-0">
                    <ArrowRight/>
                    Volver al Inicio
                </a>
            </Link>
            <UserInLive/>
        </div>
        <h1 className="title-1">
            Hola {host}
        </h1>
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <FilterDateShow onChange={console.log}/>
                </div>
            </div>
        </div>
        {JSON.stringify(host)}
    </div>
}

export default Site
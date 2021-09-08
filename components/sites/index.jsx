import { useState, useEffect } from "react"
import Link from 'next/link'

import {getLeads} from "@/app/app"

import {trunkNumber} from '@/functions/index'

import Card from "@/components/card/card";
import UserInLive from "@/components/msg/userInLive";
import FilterDateShow from "@/components/filters/dateShow"
import BtnDeleteSite from "@/components/btn/btnDeleteSite"
import LoaderCircle from "@/components/loader/circle";

import ArrowRight from "@/components/svg/right-arrow"

const Site = ({host,lang}) => {
    console.log(lang);
    const [loader, setLoader] = useState(true)
    const [query, setQuery] = useState(null)
    const [infoSite, setInfoSite] = useState({
        sesiones : 0,
        eventos : 0,
        visitantes : 0,
        compras : 0
    })
    const loadInfoHost = async () => {
        const result = await getLeads({
            distinct : "_id;ipAddress",
            query
        })
        const compras = (await getLeads({
            query : {
                ...query,
                "type": "orders-paid"
            }
        })).countLeads
        const sesiones = (await getLeads({
            query : {
                ...query,
                "event.type": "load"
            }
        })).countLeads
        const info = {
            sesiones : trunkNumber(sesiones),
            eventos : trunkNumber(result?._id?.length),
            visitantes : trunkNumber(result?.ipAddress?.length),
            compras : trunkNumber(compras)
        }
        setInfoSite(info);
        setLoader(false)
    }
    useEffect(() => {
        // setLoader(true)
        if(query){
            loadInfoHost()
        }
    }, [query])
    useEffect(() => {
        const today = new Date()
        today.setMonth(today.getMonth() - 1)
        setQuery({
            date:{
                $gte:(today).getTime(),
                $lt:(new Date()).getTime()
            }
        })
    }, [])
    return <>{loader ? <LoaderCircle/> :
        <div className="container" style={{width:"1000px",marginTop:"25px"}}>
            <div className="row">
                <div className="col-12">
                    <div className="flex flex-between flex-align-center">
                        <Link href={`/`}>
                            <a className="before mb-0">
                                <ArrowRight/>
                                {lang.before.inicio}
                            </a>
                        </Link>
                        <UserInLive/>
                    </div>
                    <h1 className="title-1 ellipsis">
                        {lang.sites.hi} {host}
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6 contectCardSite">
                    <FilterDateShow onChange={setQuery}/>
                    <div className="row">
                        <div className="col-6">
                            <Card title="Sesiones">{infoSite.sesiones}</Card>
                        </div>
                        <div className="col-6">
                            <Card title="Eventos">{infoSite.eventos}</Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Card title="Visitantes">{infoSite.visitantes}</Card>
                        </div>
                        <div className="col-6">
                            <Card title="Compras">{infoSite.compras}</Card>
                        </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                        <BtnDeleteSite site={host}/>
                    </div>
                </div>
            </div>
        </div>
    }</>
}

export default Site
import { useState, useEffect } from "react"
import Link from 'next/link'

import SvgArrow from "@/components/svg/arrow"
import SvgSearch from "@/components/svg/search"

import {getUser,getSiteSelected,setSiteSelected} from "@/functions/index";

import languajes from "@/languajes/languaje";

const BtnSites = ({className}) => {
    const user = getUser()
    const sites = user.sites || []

    const [site, setSite] = useState(getSiteSelected())
    const [showList, setShowList] = useState(true)
    const [siteShow, setSiteShow] = useState(sites)
    const [textSearch, setTextSearch] = useState("")

    const [allText, setAllText] = useState({
        addNewSite:"AGREGAR SITIO NUEVO",
        noFound: "No hay resultados"
    })
    const loadLanguajes = async () => {
        const lang = await languajes()
        setAllText({
            ...allText,
            ...lang.btnSites
        })
    }

    const toggleShowList = () => {
        setShowList(!showList)
    }
    const onChangeSite = (e) => {
        setSite(e);
        setSiteSelected(e)
    }
    const search = (e) => {
        const value = e.target.value
        setTextSearch(value)
        setSiteShow(sites.filter((e)=>e.host.indexOf(value)>-1))
    }

    useEffect(() => {
        loadLanguajes()
    }, [])
    return <>
        {
            (sites.length == 0)?
            (
                <Link href="/">
                    <a 
                    className={`btn-2 ${className || ""}`}
                    >
                        <img src="/icons/+.svg" alt="+" className="iconM"/>
                        {allText.addNewSite}
                    </a>
                </Link>
            )
            :
            (
                <div className={`btn-select ${className || ""}`}>
                    <button
                    className="btn-2"
                    onClick={toggleShowList}
                    >
                        <span className="select">
                            <img src={`/icons/icon-${site.icon || site.cms}.png`} alt={site.host} className="iconHost"/>
                                <span className="text">{site.host}</span>
                            <SvgArrow/>
                        </span>
                    </button>
                    <ul hidden={showList} id="ulSites">
                        <li>
                            <div className="search">
                                <SvgSearch></SvgSearch>
                                <input type="text" name="searchSite" id="searchSite" onChange={search} value={textSearch} placeholder="Buscar Sitio"/>
                            </div>
                        </li>
                        <li>
                            <Link href="/">
                                <a 
                                className={`btn ${className|| ""}`}
                                >
                                    {allText.addNewSite}
                                </a>
                            </Link>
                        </li>
                        {
                            siteShow.length > 0 ?
                            siteShow.map((e,i)=>(
                                <li key={i} value={e.host}
                                onClick={
                                    ()=>{
                                        onChangeSite(e)
                                        toggleShowList()
                                    }
                                }
                                >
                                    <img src={`/icons/icon-${e.icon || e.cms}.png`} alt={e.host} className="iconHost"/>
                                    <span className="text">{e.host}</span>
                                </li>
                            ))
                            :
                            (
                                <li className="noFound">{allText.noFound}</li>
                            )
                        }
                    </ul>
                </div>
            )
        }
    </>
}
export default BtnSites
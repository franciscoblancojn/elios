import { useState, useEffect } from "react"

import BtnLink from "@/components/btn/btnLink"
import {logout} from "@/firebase/firebase"

import SvgSettings from "@/components/svg/settings"
import SvgLogout from "@/components/svg/logout"

const MenuDropDown = ({title,lang}) => {
    const [show, setShow] = useState(false)
    return (
        <header
            className="header-drop-down"
        >
            {
                title &&
                (
                    <h1 className="title">
                        {title}
                    </h1>
                )
            }
            <img
                src="/img/elios_icon.png"
                alt="Elios"
                onClick={()=>setShow(!show)}
                className="iconMenu"
            />
            <div className="drop-down" hidden={!show}>
                
                <BtnLink icon={<SvgSettings/>} link="/configuracion" noActive="1">{lang.menu.configuracion}</BtnLink>

                <BtnLink 
                icon={<SvgLogout/>}
                onClick={logout}
                >
                    {lang.menu.cerrar_sesion}
                </BtnLink>
            </div>
        </header>
    )
}
export default MenuDropDown
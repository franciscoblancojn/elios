import React, { Component } from "react"
import { useRouter } from "next/router"

const BtnCorreo = (props) => {

    const router = useRouter()

    return (
        <button 
        className={`btn btn-correo btn-rs ${props.className || ""}`}
        onClick={()=>{router.push("/register/user")}}
        >
            <img src="/icons/email.png" alt="google"/>
            {props.children}
        </button>
    )
}
export default BtnCorreo
import React, { Component } from "react"
import { useRouter } from "next/router"

import BtnThesis from "@/components/btn/btnThesis"


const ToCreateAccount = (props) => {

    const router = useRouter()

    return (
        <div className="ToCreateAccount">
            <h3>
                {
                    (props.title)?
                        props.title:
                        "No tienes una cuenta?"
                }
            </h3>
            <BtnThesis
                onClick={()=>{router.push((props.url)?
                    props.url:
                    "/register")}}
            >
                {
                    (props.btn)?
                        props.btn:
                        "CREAR CUENTA"
                }
            </BtnThesis>
            <p className="terminos_condiciones">
                {
                    (props.tmc)?
                        props.btn:
                        "Ver Terminos y Condiciones"
                }
            </p>
        </div>
    )
}
export default ToCreateAccount
import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import Page from "@/components/page/configuracion";

const Index = () => {
    return (
        <Islogin>
                {/* <MsgTop
                    title="¡Bienvenido a tu versión de prueba Emprendedor!"
                    icon={<SvgInfo/>}
                    text={(
                        <>
                            Tienes 14 días para probar las <a href="/plan">funcionalidades de pago</a> de Elios, <a href="/plan">mejora</a> tu plan en cualquier momento por tan solo $ 89,99/Mes.
                        </>
                    )}
                /> */}
                <Lang>
                    <Page/>
                </Lang>
        </Islogin>
    )
}
export default Index
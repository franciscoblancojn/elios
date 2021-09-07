import React, { Component } from "react"

import Content from "@/components/content";
import Islogin from "@/components/checkLogin/isLogin";
import MenuSingle from "@/components/header/single";
import Points from '@/components/points';
import TitlePlan from '@/components/title/titlePlan';
import Planes from "@/components/plan/planes";

const ArrayPlanes = [
    {
        title : "Emprendedor",
        price : 89,
        text : (
            <p>
                Lorem ipsum dolor sit<br/>
                Lorem ipsum dolor sit amet<br/>
                Lorem ipsum dolor sit 
            </p>
        ),
        list : [
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit"
        ],
        note : "**Lorem ipsum dolor sit"
    },
    {
        title : "Compañía",
        price : 199,
        text : (
            <p>
                Lorem ipsum dolor sit<br/>
                Lorem ipsum dolor sit amet<br/>
                Lorem ipsum dolor sit 
            </p>
        ),
        list : [
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit"
        ],
        note : "**Lorem ipsum dolor sit"
    },
    {
        title : "Agencia",
        price : 499,
        text :(
            <p>
                Lorem ipsum dolor sit<br/>
                Lorem ipsum dolor sit amet<br/>
                Lorem ipsum dolor sit 
            </p>
        ),
        list : [
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit"
        ],
        note : "**Lorem ipsum dolor sit"
    },
    {
        title : "Gratis",
        text : (
            <>
                <p>
                    Lorem ipsum dolor sit<br/>
                    Lorem ipsum dolor sit amet<br/>
                    Lorem ipsum dolor sit 
                </p>
                <p>
                    Lorem ipsum dolor sit<br/>
                    Lorem ipsum dolor sit amet<br/>
                    Lorem ipsum dolor sit 
                </p>
                <p>
                    Lorem ipsum dolor sit<br/>
                    Lorem ipsum dolor sit amet<br/>
                    Lorem ipsum dolor sit 
                </p>
            </>
        ),
        className:"w-100"
    },
]

class PlanesPage extends React.Component {
    render() {
        return (
            <Islogin>
                <Content 
                title="Planes"
                className="page-plan cMenu"
                >
                    <br />
                    <Points
                        n={2}
                        s={1}
                    ></Points>
                    <TitlePlan></TitlePlan>
                    <Planes planes={ArrayPlanes}></Planes>
                </Content>
            </Islogin>
        )
    }
}
export default PlanesPage
import Head from 'next/head'
import Router,{ useRouter } from "next/router"
import React, { Component ,useEffect,useState} from "react"

import Footer from '@/components/footer'
import {isLogin} from "@/firebase/firebase"
import {GetUser} from "@/app/app"
import MenuLeft from "@/components/header/left";
import MenuDropDown from "@/components/header/dropDown";
import BtnSites from "@/components/btn/btnSites"
import Link from 'next/link'

function recursiveMap(children, fn) {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child) || typeof child.type == 'string') {
            return child;
        }
    
        if (child.props.children) {
            child = React.cloneElement(child, {
            children: recursiveMap(child.props.children, fn)
            });
        }
    
        return fn(child);
    });
}
const UrlsNoRouterPush = [
    "/login",
    "/register",
    "/register/user",
    "/recover_password",
    "/recover_password/email_send",
    "/privacy-policy",
]
const NoRedirectInLogin = [
    "/privacy-policy",
]
const content2 = ({children, ...pageProps}) => {
    const [user,setUser] = useState(null)
    const [userSelect,setUserSelect] = useState(null)
    const router = useRouter()

    useEffect(() => {
        isLogin((e)=>{
            if(e == undefined){
                if (pageProps.redirect == undefined && !UrlsNoRouterPush.includes(router.route)) {
                    router.push("/login")
                }
            }else{
                if(UrlsNoRouterPush.includes(router.route) && !NoRedirectInLogin.includes(router.route)){
                    router.push("/")
                }else{
                    GetUser(
                        e,
                        (result) => {
                            var r = result[0]
                            setUser(r)
                            var hostSelect = ""
                            if(!localStorage.getItem("userSelect")){
                                hostSelect = r.host[0]
                                localStorage.setItem("userSelect",hostSelect)
                            }else{
                                hostSelect = localStorage.getItem("userSelect")
                            }
                            setUserSelect(userSelect);
                            if(r.questionnaire == undefined){
                                if(![
                                    "/questionnaire"
                                ].includes(router.route)){
                                    router.push("/questionnaire")
                                }
                            }
                        }
                    )
                }
            }
        })
    }, []);
    var defaultHookChangeHost = () => {}
    const hookChangeHost = (hook = () => {}) => {
        defaultHookChangeHost = hook
    }
    const changeHost = (host = "") => {
        userSelect = host
        localStorage.setItem("userSelect",host)
        defaultHookChangeHost()
    }
    const getUserSelect = () => localStorage.getItem("userSelect")

    const childrenWithProps = recursiveMap(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                currentUser: { ...user } ,
                changeHost,
                getUserSelect,
                hookChangeHost
            })
        }

        return child;
    });
    return (
        <div className="content">
            <Head>
                <title>{pageProps.title}</title>
                <link rel="stylesheet" href="https://use.typekit.net/kqm1fcv.css"></link>
            </Head>
            <div id="page" className={`page ${pageProps?.className??""}`}>
                {
                    pageProps?.className.indexOf('cMenu') > -1 &&
                    <>
                        <MenuLeft 
                        currentUser={ user} 
                        changeHost={changeHost}
                        getUserSelect={getUserSelect}
                        hookChangeHost={hookChangeHost}
                        ></MenuLeft>
                        <MenuDropDown title={pageProps.title}></MenuDropDown>
                    </>
                }
                {
                    (user !== null || UrlsNoRouterPush.includes(router.route)) 
                    &&
                    childrenWithProps
                }
                {
                    pageProps.footer === undefined && <Footer></Footer>
                }
            </div>
        </div>
    )
}
class content extends React.Component {
    state = {
        host:""
    }
    defaultHookChangeHost = () => {}
    hookChangeHost = (hook = () => {}) => {
        this.defaultHookChangeHost = hook
    }
    changeHost = (host = "") => {
        localStorage.setItem("hostSelect",host)
        this.setState({host:host})
        this.defaultHookChangeHost()
    }
    getHostSelect = () => {
        return localStorage.getItem("hostSelect")
    }
    loadContent = ({currentUser,hostSelect}) => {
        const childrenWithProps = recursiveMap(this.props.children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    currentUser ,
                    changeHost:this.changeHost,
                    getHostSelect:this.getHostSelect,
                    hookChangeHost:this.hookChangeHost,
                    host:this.state.host,
                })
            }
    
            return child;
        });
        
        this.setState({
            childrenWithProps,
            currentUser,
            hostSelect,
            btnSite : (
                <BtnSites 
                currentUser={currentUser} 
                onChange={this.changeHost}
                />
            )
        })
    }
    render(){
        const pageProps = this.props
        const user = this.state?.currentUser
        return (
            <div className="content">
                <Head>
                    <title>{pageProps.title}</title>
                    <link rel="stylesheet" href="https://use.typekit.net/kqm1fcv.css"></link>
                </Head>
                <div id="page" className={`page ${pageProps?.className??""}`}>
                    {
                        pageProps?.className.indexOf('cMenu') > -1 &&
                        <>
                            <MenuLeft 
                            currentUser={this.state?.currentUser} 
                            changeHost={this.changeHost}
                            getUserSelect={this.getUserSelect}
                            hookChangeHost={this.hookChangeHost}
                            btnSite={(
                                this.state?.currentUser  &&
                                <BtnSites 
                                currentUser={this.state?.currentUser} 
                                onChange={this.changeHost}
                                />
                                ||
                                <Link href="/">
                                    <a 
                                    className={`btn-2`}
                                    >
                                        <img src="/icons/+.svg" alt="+" className="iconM"/>
                                        AGREGAR SITIO NUEVO
                                    </a>
                                </Link>
                            )}
                            ></MenuLeft>
                            <MenuDropDown title={pageProps.title}></MenuDropDown>
                            {
                                (user !== null || UrlsNoRouterPush.includes(router.route)) 
                                &&
                                this.state?.childrenWithProps
                            }
                        </>
                    }
                    {
                        !(pageProps?.className.indexOf('cMenu') > -1) &&
                        this.props.children
                    }
                    {
                        pageProps.footer === undefined && <Footer></Footer>
                    }
                </div>
            </div>
        )
    }
}
export default content
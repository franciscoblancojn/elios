import Link from 'next/link'

import Content from "@/components/content";
import BtnGoogle from "@/components/btn/btnGoogle"
import BtnFacebook from "@/components/btn/btnFacebook"
import FormLogin from "@/components/form/login"
import ToCreateAccount from "@/components/form/toCreateAccount"

const Login = ({lang}) => {
    return (
        <Content 
        lang={lang}
        title="Elios Login"
        footer="1"
        className="page-login"
        >
            <div className="row">
                <div className="col-6 flex-center">
                    <div className="contentLogo">
                        <img src="/img/elios_logo.png" alt="Elios" className="iconElios"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="LoginRS">
                        <h1>
                            {lang.login.title}
                        </h1>
                        <BtnGoogle>{lang.login.google}</BtnGoogle>
                        <BtnFacebook>{lang.login.facebook}</BtnFacebook>
                    </div>
                    <div className="LoginForm">
                        <FormLogin lang={lang}></FormLogin>
                        <Link href="/recover_password">
                            <a className="recover_password">{lang.login.recuperar_contrasena}</a>
                        </Link>
                        <ToCreateAccount></ToCreateAccount>
                    </div>
                </div>
            </div>
        </Content>
    )
}
export default Login